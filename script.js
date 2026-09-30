/* =========================
   MESSAGES
========================= */

const messages = {
  verse: `
        📖 <strong>Philippians 4:13</strong><br><br>

        "I can do all things through Christ who strengthens me."
        <br><br>

        Whatever today brings, remember that you don't have
        to face everything alone. Keep your faith, keep going,
        and take things one step at a time. 🙏💗
    `,

  reminder: `
        💗 <strong>A little reminder for you...</strong><br><br>

        You don't have to be perfect.
        You don't have to have everything figured out.
        <br><br>

        It's okay to rest. It's okay to have a bad day.
        What matters is that you keep going and keep being
        the wonderful person that you are. 🌷
    `,

  day: `
        🌼 <strong>For your day...</strong><br><br>

        I hope today gives you plenty of reasons to smile.
        I hope your plans go well, your heart feels light,
        and you meet people who make your day a little better.
        <br><br>

        Don't forget to take care of yourself today. ✨💗
    `,

  night: `
        🌙 <strong>For your night...</strong><br><br>

        If today was tiring, leave those worries behind for
        tonight. You have done enough for today.
        <br><br>

        Close your eyes, breathe slowly, and let yourself rest.
        Tomorrow is another beautiful opportunity. 💤🌙
    `,

  heart: `
        💌 <strong>A little something from my heart...</strong><br><br>

        Julie, I just want you to know that I genuinely wish
        good things for you.
        <br><br>

        I wish you good health, success, happiness,
        peaceful days, and the courage to chase the things
        you want in life.
        <br><br>

        Even through simple moments, I hope you always have
        reasons to smile.
        <br><br>

        Keep being yourself, keep believing in yourself,
        and please remember to take care of your heart. 🌷
        <br><br>

        <strong>— James 💗</strong>
    `,
};

/* =========================
   SHOW MESSAGE
========================= */

function showMessage(type) {
  const message = document.getElementById("message");

  const messageCard = document.querySelector(".message-card");

  if (!messages[type]) {
    return;
  }

  /* Animation */

  messageCard.classList.remove("active");

  void messageCard.offsetWidth;

  messageCard.classList.add("active");

  /* Clear old message */

  message.innerHTML = "";

  /* Typewriter effect */

  typeWriter(message, messages[type], 12);

  /* Floating hearts */

  createHearts(12);

  /* Sparkles */

  createSparkles();
}

/* =========================
   TYPEWRITER
========================= */

function typeWriter(element, text, speed) {
  let index = 0;

  let result = "";

  function type() {
    if (index < text.length) {
      result += text.charAt(index);

      element.innerHTML = result;

      index++;

      setTimeout(type, speed);
    }
  }

  type();
}

/* =========================
   FLOATING HEARTS
========================= */

function createHearts(amount) {
  const heartTypes = ["💗", "💕", "💖", "💞", "💓", "🌸"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = 18 + Math.random() * 22 + "px";

    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    heart.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8500);
  }
}

/* =========================
   SPARKLES
========================= */

function createSparkles() {
  const sparkleTypes = ["✨", "💫", "⭐"];

  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML =
      sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = 15 + Math.random() * 20 + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}

/* =========================
   RANDOM BACKGROUND HEARTS
========================= */

setInterval(() => {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.innerHTML = "♡";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 15 + Math.random() * 15 + "px";

  heart.style.opacity = "0.35";

  heart.style.animationDuration = 7 + Math.random() * 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}, 1800);

/* =========================
   CLICK SPARKLE
========================= */

document.addEventListener("click", function (event) {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";

  sparkle.innerHTML = "✨";

  sparkle.style.left = event.clientX + "px";

  sparkle.style.top = event.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});
