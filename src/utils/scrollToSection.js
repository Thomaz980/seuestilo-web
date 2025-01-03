export function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Seção com ID ${sectionId} não encontrada.`);
    }
  }