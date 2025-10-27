// Formulário de reserva
const reservaForm = document.getElementById("reservaForm");
if (reservaForm) {
  reservaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = document.getElementById("data").value;
    const pessoas = document.getElementById("pessoas").value;
    const tipo = document.getElementById("tipo").value;

    if (!data || !pessoas || !tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    document.getElementById("pessoas").addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
});

    const mensagem = `Olá! Gostaria de fazer uma reserva:\n\n📅 Data: ${data}\n👥 Número de pessoas: ${pessoas}\n🏖️ Tipo de passeio: ${tipo}`;
    const numeroWhatsApp = "558293511294";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}

// Carrossel
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (carouselWrapper && prevBtn && nextBtn && carouselItems.length > 0) {
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
}

const arrowButtons = document.querySelectorAll(".arrows button");

arrowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 300); // tempo em milissegundos
  });
});

const whatsappButtons = document.querySelectorAll(".btWhatsapp");

whatsappButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = document.getElementById("data")?.value || "";
    const pessoas = document.getElementById("pessoas")?.value || "";
    const tipo = document.getElementById("tipo")?.value || "";

    // Se os campos do formulário estiverem disponíveis e preenchidos
    if (data && pessoas && tipo) {
      const mensagem = `Olá! Gostaria de fazer uma reserva:\n\n📅 Data: ${data}\n👥 Número de pessoas: ${pessoas}\n🏖️ Tipo de passeio: ${tipo}`;
      const numeroWhatsApp = "558293511294";
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    } else {
      // Mensagem genérica para botões fora do formulário
      const mensagem = `Olá! Tenho interesse em saber mais sobre os passeios da Ilha do Paraíso.`;
      const numeroWhatsApp = "558293511294";
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    }
  });
});

// Menu responsivo
const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (toggleBtn && navbar) {
  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

