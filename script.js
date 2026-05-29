const links = document.querySelectorAll(".link-card");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transition = "0.3s";
  });
});

console.log("Cartão digital carregado com sucesso 🚀");
