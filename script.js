// Fecha del evento
const eventDate = new Date("Nov 1, 2025 22:00:00").getTime();

// Elementos del contador
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "🎉 ¡La fiesta ya comenzó! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}, 1000);
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const alergias = document.getElementById("alergias").value;

  // Número de WhatsApp de destino (ejemplo con código de país +54 Argentina)
  const phone = "5491153267923"; // 👈 reemplazá con tu número real

  const mensaje = `Hola! Soy ${nombre}. Confirmo mi asistencia a los 15 🎉%0A${
    alergias ? "Tema alimenticio: " + alergias : "Sin restricciones alimenticias"
  }`;

  const url = `https://wa.me/${phone}?text=${mensaje}`;

  window.open(url, "_blank");

});
