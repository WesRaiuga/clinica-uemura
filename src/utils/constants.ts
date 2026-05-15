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
  /** Se true, inverte a ordem imagem/conteúdo no desktop */
  reversed: boolean;
}

export const DOCTOR_HARUO: DoctorData = {
  name: 'Dr. Haruo Uemura',
  cro: 'CROSP 000.000',
  specialization: 'Endodontia | Cirurgia & Clínica Geral',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.',
  quote: 'Devolver o sorriso a um paciente é, para mim, a maior recompensa da odontologia.',
  photo: haruoPhoto,
  photoAlt: 'Foto do Dr. Haruo Uemura',
  reversed: false,
};

export const DOCTOR_LEANDRO: DoctorData = {
  name: 'Dr. Leandro Hilário',
  cro: 'CROSP 130.372',
  specialization: 'Ortodontia | Cirurgia & Clínica Geral',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.',
  quote: 'Cada sorriso que alinhamos hoje é uma confiança que se fortalece para sempre.',
  photo: leoPhoto,
  photoAlt: 'Foto do Dr. Leandro Hilário',
  reversed: true,
};
