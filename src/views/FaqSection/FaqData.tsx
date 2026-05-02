import { Link } from 'react-router-dom';

import { WHATSAPP_LINK } from '@/utils/constants';

export const FAQ_DATA = [
  {
    question: "Como faço para agendar uma consulta com vocês?",
    answer: [
      <>
        <p>Ficamos muito felizes que esteja considerando iniciar um tratamento em nossa clínica.</p>
        <p>É só nos chamar no WhatsApp:{" "}
          <Link to={WHATSAPP_LINK}
        target="_blank" rel="noopener noreferrer"
        style={{ color: "#5b99a1" }}>
            (11) 98742-8888
        </Link>
        .</p>
      </>
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    answer: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum."
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum."
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit facere sunt minus?",
    answer: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.",
    ]
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere sunt minus dolore, eaque atque aliquam, suscipit officiis placeat vel est enim iste molestiae unde ipsam quaerat porro nesciunt rerum.",
    ]
  }
];