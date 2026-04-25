const weddingDate = new Date("Dec 15, 2026 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerHTML = days + " days to go 💕";
}, 1000);

// RSVP Form
function submitForm(e) {
  e.preventDefault();
  document.getElementById("message").innerHTML =
    "Thank you! We can't wait to celebrate with you 🎉";
}

