
import corteDeCabelo from "$img/cortes.jpeg"
import remoTatto from "$img/remoTatto.png"
import microdesobrancelhas from "$img/microSobrancelhas.png";

const cursos = [
  {
    title: "Curso Remoção de Tatuagens",
    description: "Formação ideal para quem deseja se especializar em técnicas seguras e eficazes para remoção de tatuagens, atendendo a um público que busca apagar ou corrigir desenhos indesejados.",
    duration: "12h",
    vacancies:3,
    image: remoTatto
  },
  {
    title: "Curso Micropigmentação",
    description: "Formação completa e especializada para quem deseja aprender a técnica de aplicação de pigmentos na pele, proporcionando resultados naturais e semipermanentes.",
    duration: "12h",
    vacancies:3,
    image: microdesobrancelhas
  },
  {
    title: "Curso Corte de Cabelo",
    description: "Oportunidade perfeita para quem deseja aprender técnicas profissionais de corte, aprimorando suas habilidades e oferecendo um atendimento de alta qualidade aos seus clientes.",
    duration: "22h",
    vacancies: 5,
    image: corteDeCabelo
  }
];

export default cursos;