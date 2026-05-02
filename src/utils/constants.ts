import haruoPhoto from '../assets/img/haruo-uemura.png';
import leoPhoto from '../assets/img/leandro-hilario.png';

export const WHATSAPP_LINK = "https://wa.me/5511987428888?text=Olá,%20eu%20gostaria%20de%20agendar%20uma%20consulta";

export interface DoctorData {
  name: string;
  cro: string;
  specialization: string;
  bio: string;
  quote: string;
  photo: string;
  photoAlt: string;
}

export const DOCTOR_HARUO: DoctorData = {
  name: 'Dr. Haruo Uemura',
  cro: 'CROSP 000.000',
  specialization: 'Endodontia | Cirurgia & Clínica Geral',
  bio: 'Fundador da Clínica Uemura, o Dr. Haruo dedica mais de 30 anos ao cuidado da saúde bucal com excelência técnica e humanidade. Especialista em endodontia, transformou incontáveis sorrisos com precisão e comprometimento.',
  quote: 'A saúde começa pela boca — cuidar bem dela é cuidar de toda a pessoa.',
  photo: haruoPhoto,
  photoAlt: 'Foto do Dr. Haruo Uemura',
};

export const DOCTOR_LEANDRO: DoctorData = {
  name: 'Dr. Leandro Hilário',
  cro: 'CROSP 130.372',
  specialization: 'Ortodontia | Cirurgia & Clínica Geral',
  bio: 'Especialista em ortodontia moderna, o Dr. Leandro traz inovação e sensibilidade ao atendimento. Comprometido com resultados estéticos e funcionais, utiliza as técnicas mais avançadas para construir sorrisos harmoniosos.',
  quote: 'Um sorriso bem alinhado não é apenas estética — é autoconfiança em movimento.',
  photo: leoPhoto,
  photoAlt: 'Foto do Dr. Leandro Hilário',
};
