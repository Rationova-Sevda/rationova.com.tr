document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Teşekkürler! Bülten aboneliği için form altyapısı henüz bağlanmadı.");
    });
  });

  document.querySelectorAll(".form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Mesaj formu hazır. Gerçek gönderim için bir form/e-posta servisi bağlanması gerekiyor.");
    });
  });
});