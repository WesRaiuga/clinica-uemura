type DividerProps = {
  color: string;
};

const Divider: React.FC<DividerProps> = ({ color }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" fill={color} className={`w-full h-16`}>
          <path d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Divider;
