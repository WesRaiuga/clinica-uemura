import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/utils/cn';

import style from './GallerySlider.module.css';

interface GallerySliderProps {
  images: string[];
  className?: string;
  autoPlayInterval?: number;
}

const GallerySlider: React.FC<GallerySliderProps> = ({
  images,
  className,
  autoPlayInterval = 3000,
}) => {
  const imagesCount = images?.length || 0;

  // Store items with their original indexes so we know which indicator is active
  const [items, setItems] = useState(
    images.map((img, idx) => ({ img, originalIndex: idx }))
  );
  
  const [movement, setMovement] = useState<'idle' | 'next' | 'prev'>('idle');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => { document.body.style.overflow = ''; };
  }, []);

  const goToNext = useCallback(() => {
    if (imagesCount <= 1 || movement !== 'idle' || isDragging) return;
    setSlideDirection(1);
    setIsTransitioning(true);
    setMovement('next');
  }, [imagesCount, movement, isDragging]);

  const goToPrev = useCallback(() => {
    if (imagesCount <= 1 || movement !== 'idle' || isDragging) return;
    setSlideDirection(-1);
    setIsTransitioning(true);
    setMovement('prev');
  }, [imagesCount, movement, isDragging]);

  // Indicator manual click handling
  const goToIndex = (targetIndex: number) => {
    if (imagesCount <= 1 || movement !== 'idle' || isDragging) return;
    const currentIndex = items[0].originalIndex;
    if (currentIndex === targetIndex) return;

    // To prevent jumping without animating all slides in between,
    // we can reorder the array instantly so the target is next, then animate.
    // However, the simplest robust way is to just do a single next/prev.
    // If they click indicator, we find the item, put it at index 1 or length-1, then animate.
    setIsTransitioning(false); // disable transition to reorganize
    setItems((prev) => {
      const targetElementIndex = prev.findIndex((item) => item.originalIndex === targetIndex);
      const isForward = targetIndex > currentIndex;
      const newItems = [...prev];
      
      // Pull target out
      const [targetItem] = newItems.splice(targetElementIndex, 1);
      
      // Place it right next to the current element based on direction
      if (isForward) {
        newItems.splice(1, 0, targetItem);
        setSlideDirection(1);
      } else {
        newItems.push(targetItem); // end of array is left side
        setSlideDirection(-1);
      }
      return newItems;
    });

    // We must wait a tick for the reorganization to render without transition,
    // then trigger the transition.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
        setMovement(targetIndex > currentIndex ? 'next' : 'prev');
      });
    });
  };

  // Auto Play
  useEffect(() => {
    if (isDragging || imagesCount <= 1 || isLightboxOpen) return;
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval, isDragging, items, imagesCount, isLightboxOpen]); // items changing resets timer

  // Infinite Loop transition handling
  const handleTransitionEnd = () => {
    if (movement === 'idle') return;
    
    setIsTransitioning(false);
    setItems((prev) => {
      if (movement === 'next') {
        return [...prev.slice(1), prev[0]];
      } else {
        return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
      }
    });
    setMovement('idle');
  };

  // Drag Handlers
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (imagesCount <= 1 || movement !== 'idle') return;
    setIsDragging(true);
    setIsTransitioning(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || imagesCount <= 1) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setCurrentTranslate(diff);

    // Update slideDirection based on drag direction so the element is ready
    if (diff < 0 && slideDirection !== 1) setSlideDirection(1);
    if (diff > 0 && slideDirection !== -1) setSlideDirection(-1);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    if (currentTranslate < -50) {
      setMovement('next');
    } else if (currentTranslate > 50) {
      setMovement('prev');
    } else {
      setMovement('idle');
    }
    setCurrentTranslate(0);
  };

  if (imagesCount === 0) return null;

  const getLeft = (idx: number) => {
    if (idx === 0) return '0%';
    if (imagesCount === 2) {
      return slideDirection === 1 ? '100%' : '-100%';
    }
    return idx === imagesCount - 1 ? '-100%' : `${idx * 100}%`;
  };

  const currentTranslatePercent = movement === 'next' ? -100 : movement === 'prev' ? 100 : 0;

  return (
    <>
    <div className={cn(style.galleryWrapper, className)}>
      <div
        className={style.sliderContainer}
        ref={sliderRef}
        role="presentation"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className={cn(style.slides, isTransitioning && style.animate)}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(${currentTranslatePercent}% + ${currentTranslate}px))`,
          }}
        >
          {items.map((item, idx) => (
            <div 
              key={item.originalIndex} 
              className={style.slide}
              style={{ 
                left: getLeft(idx),
                zIndex: idx === 0 ? 2 : 1
              }}
              aria-hidden={idx !== 0 ? 'true' : 'false'}
            >
              <img
                src={item.img}
                alt={`Galeria ${item.originalIndex + 1}`}
                draggable="false"
                className={idx === 0 ? style.clickableImage : undefined}
                onClick={idx === 0 ? openLightbox : undefined}
                style={idx === 0 ? { cursor: 'zoom-in', pointerEvents: 'auto' } : undefined}
              />
            </div>
          ))}
        </div>
      </div>

      {imagesCount > 1 && (
        <>
          <button
            type="button"
            className={cn(style.navBtn, style.prevBtn)}
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Imagem Anterior"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <button
            type="button"
            className={cn(style.navBtn, style.nextBtn)}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Próxima Imagem"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className={style.indicators}>
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={cn(style.indicator, items[0].originalIndex === idx && style.active)}
                onClick={() => goToIndex(idx)}
                aria-label={`Ir para a imagem ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>

    {isLightboxOpen && createPortal(
      <div
        className={style.lightboxOverlay}
        role="dialog"
        aria-modal="true"
        aria-label="Imagem em tela cheia"
        onClick={closeLightbox}
      >
        <button
          type="button"
          className={style.lightboxClose}
          onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          aria-label="Fechar"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div
          className={style.lightboxSlider}
          ref={lightboxRef}
          onClick={(e) => e.stopPropagation()}
          role="presentation"
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div
            className={cn(style.slides, isTransitioning && style.animate)}
            style={{
              transform: `translateX(calc(${currentTranslatePercent}% + ${currentTranslate}px))`,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={item.originalIndex}
                className={style.slide}
                style={{
                  left: getLeft(idx),
                  zIndex: idx === 0 ? 2 : 1,
                }}
                aria-hidden={idx !== 0 ? 'true' : 'false'}
              >
                <img
                  src={item.img}
                  alt={`Galeria ${item.originalIndex + 1}`}
                  draggable="false"
                  className={style.lightboxImage}
                />
              </div>
            ))}
          </div>

          {imagesCount > 1 && (
            <>
              <button
                type="button"
                className={cn(style.navBtn, style.prevBtn)}
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                aria-label="Imagem Anterior"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>

              <button
                type="button"
                className={cn(style.navBtn, style.nextBtn)}
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                aria-label="Próxima Imagem"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>

              <div className={style.indicators}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={cn(style.indicator, items[0].originalIndex === idx && style.active)}
                    onClick={(e) => { e.stopPropagation(); goToIndex(idx); }}
                    aria-label={`Ir para a imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>,
      document.body
    )}
    </>
  );
};

export default GallerySlider;
