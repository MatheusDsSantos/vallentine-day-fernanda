/* ============================================================
   app.js — Nossa História ♥
   Feito com cada linha cheia de amor. 💕
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   ✏️  CONFIGURAÇÕES — edite aqui antes de presentear!
   ══════════════════════════════════════════════════════════ */

// Data de início do relacionamento (ano, mês-1, dia, hora, minuto, segundo)
// Exemplo: 14 de fevereiro de 2023 às 19:30
const START_DATE = new Date(2023, 1, 14, 19, 30, 0);

// ID do vídeo no YouTube (a parte depois de ?v= no link)
// Exemplo: https://www.youtube.com/watch?v=XXXXXXXX → "XXXXXXXX"
const YOUTUBE_VIDEO_ID = "PKfxmFU3lWY"; // ✏️ substitua pelo seu

// Título e artista exibidos no player
const SONG_TITLE  = "Perfect";        // ✏️ nome da música
const SONG_ARTIST = "Ed Sheeran";     // ✏️ nome do artista

/* ══════════════════════════════════════════════════════════
   ✏️  MOMENTOS DA LINHA DO TEMPO
   Adicione, remova ou edite os objetos abaixo.
   photo: caminho para a imagem em /assets/ — deixe null para usar emoji
   ══════════════════════════════════════════════════════════ */
const TIMELINE_MOMENTS = [
  {
    date:     "14 de Fevereiro de 2023",
    location: "Parque da Cidade",
    title:    "O Nosso Primeiro Encontro",
    text:     "Aquele dia ficou guardado para sempre no meu coração. Você chegou com aquele sorriso que eu ainda não consigo descrever com palavras. Sabia que era algo especial.",
    photo:    null,   // ✏️ ex: "assets/foto1.jpg"
    emoji:    "🌸",
    side:     "left",
  },
  {
    date:     "20 de Março de 2023",
    location: "Restaurante Bella Vista",
    title:    "O Jantar que Mudou Tudo",
    text:     "Foi nessa noite que eu percebi que queria todos os jantares da minha vida ao seu lado. A conversa nunca acabou, e eu não queria que acabasse.",
    photo:    null,   // ✏️ ex: "assets/foto2.jpg"
    emoji:    "🍷",
    side:     "right",
  },
  {
    date:     "01 de Maio de 2023",
    location: "Praia do Sol",
    title:    "Nossa Primeira Viagem",
    text:     "O pôr do sol nunca foi tão bonito quanto naquele dia, com você do meu lado, os pés na areia. Guardo essa imagem como um dos maiores presentes que a vida já me deu.",
    photo:    null,   // ✏️ ex: "assets/foto3.jpg"
    emoji:    "🌅",
    side:     "left",
  },
  {
    date:     "25 de Dezembro de 2023",
    location: "Casa da Família",
    title:    "Nosso Primeiro Natal Juntos",
    text:     "Apresentar você para a família foi o melhor presente que eu poderia dar a eles, e a mim mesmo. Você já é parte da nossa história, e eu amo demais isso.",
    photo:    null,   // ✏️ ex: "assets/foto4.jpg"
    emoji:    "🎄",
    side:     "right",
  },
  {
    date:     "14 de Fevereiro de 2024",
    location: "Em casa, com champanhe e Netflix",
    title:    "Nosso Primeiro Aniversário",
    text:     "Um ano inteiro ao seu lado, e cada dia valeu mais do que o anterior. Você me ensina a amar de um jeito que eu não sabia que existia.",
    photo:    null,   // ✏️ ex: "assets/foto5.jpg"
    emoji:    "🥂",
    side:     "left",
  },
];

/* ══════════════════════════════════════════════════════════
   EASTER EGG — Console
   ══════════════════════════════════════════════════════════ */
const asciiHeart = `
%c
     ██████   ██████
   ██      ███      ██
  ██                  ██
  ██    Nossa  Amor!   ██
   ██                ██
     ██            ██
       ██        ██
         ██    ██
           ████
            ██

  💕 Ei, desenvolvedor curioso!
     Você encontrou a mensagem secreta.
     Se for ela lendo isso... saiba que
     cada linha desse código foi escrita
     pensando em você. Te amo demais. 💕
`;
console.log(asciiHeart, "color: #BE185D; font-size: 13px; font-family: monospace;");

/* ══════════════════════════════════════════════════════════
   CONTADOR EM TEMPO REAL
   ══════════════════════════════════════════════════════════ */
function updateCounter() {
  const now   = new Date();
  let   diff  = now - START_DATE; // milissegundos

  const totalSecs  = Math.floor(diff / 1000);
  const secs       = totalSecs % 60;
  const totalMins  = Math.floor(totalSecs / 60);
  const mins       = totalMins % 60;
  const totalHours = Math.floor(totalMins / 60);
  const hours      = totalHours % 24;
  const totalDays  = Math.floor(totalHours / 24);

  // Cálculo de anos e meses completos
  let years  = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth()    - START_DATE.getMonth();
  if (months < 0) { years--; months += 12; }

  // Dias restantes após remover anos e meses completos
  const afterYearsMonths = new Date(START_DATE);
  afterYearsMonths.setFullYear(afterYearsMonths.getFullYear() + years);
  afterYearsMonths.setMonth(afterYearsMonths.getMonth() + months);
  const days = Math.floor((now - afterYearsMonths) / (1000 * 60 * 60 * 24));

  const fmt = n => String(n).padStart(2, "0");

  // Aplica valores e efeito de "tick" no segundo
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (!el) return;
    const str = fmt(val);
    if (el.textContent !== str) {
      el.textContent = str;
      el.classList.add("tick");
      setTimeout(() => el.classList.remove("tick"), 150);
    }
  };

  setVal("cnt-years",  years);
  setVal("cnt-months", months);
  setVal("cnt-days",   days);
  setVal("cnt-hours",  hours);
  setVal("cnt-mins",   mins);
  setVal("cnt-secs",   secs);
}
updateCounter();
setInterval(updateCounter, 1000);

/* ══════════════════════════════════════════════════════════
   LINHA DO TEMPO — renderização + Intersection Observer
   ══════════════════════════════════════════════════════════ */
function buildTimeline() {
  const container = document.getElementById("timelineCards");
  if (!container) return;

  TIMELINE_MOMENTS.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = `timeline-card ${m.side}`;

    const photoHTML = m.photo
      ? `<img src="${m.photo}" alt="${m.title}" class="card-photo" loading="lazy" />`
      : `<div class="card-photo-placeholder">${m.emoji}</div>`;

    card.innerHTML = `
      <div class="card-inner">
        ${photoHTML}
        <div class="card-body">
          <p class="card-tag">${m.date} · ${m.location}</p>
          <h3 class="card-title">${m.title}</h3>
          <p class="card-text">${m.text}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Intersection Observer para o fade-in dos cards
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // dispara só uma vez
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".timeline-card").forEach(el => observer.observe(el));
}
buildTimeline();

/* ══════════════════════════════════════════════════════════
   PLAYER DE MÚSICA — YouTube IFrame API
   ══════════════════════════════════════════════════════════ */
let ytPlayer      = null;
let isPlaying     = false;
let progressTimer = null;

// Callback global exigido pela API do YouTube
window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player("ytPlayer", {
    height: "0",
    width:  "0",
    videoId: YOUTUBE_VIDEO_ID,
    playerVars: {
      autoplay:       0,
      controls:       0,
      disablekb:      1,
      fs:             0,
      modestbranding: 1,
      rel:            0,
    },
    events: {
      onReady:       onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};

function onPlayerReady() {
  document.getElementById("songTitle").textContent  = SONG_TITLE;
  document.getElementById("songArtist").textContent = SONG_ARTIST;
  ytPlayer.setVolume(70);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    document.getElementById("vinyl").classList.add("playing");
    document.getElementById("iconPlay").classList.add("hidden");
    document.getElementById("iconPause").classList.remove("hidden");
    startProgressUpdate();
  } else {
    isPlaying = false;
    document.getElementById("vinyl").classList.remove("playing");
    document.getElementById("iconPlay").classList.remove("hidden");
    document.getElementById("iconPause").classList.add("hidden");
    stopProgressUpdate();
  }
}

function startProgressUpdate() {
  stopProgressUpdate();
  progressTimer = setInterval(() => {
    if (!ytPlayer || typeof ytPlayer.getCurrentTime !== "function") return;
    const cur      = ytPlayer.getCurrentTime();
    const duration = ytPlayer.getDuration();
    if (duration > 0) {
      const pct = (cur / duration) * 100;
      document.getElementById("progressFill").style.width = pct + "%";
    }
  }, 800);
}
function stopProgressUpdate() {
  if (progressTimer) clearInterval(progressTimer);
}

// Botão play/pause
document.getElementById("btnPlayPause").addEventListener("click", () => {
  if (!ytPlayer) return;
  isPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo();
});

// Clique no disco = play/pause
document.getElementById("vinyl").addEventListener("click", () => {
  document.getElementById("btnPlayPause").click();
});

// Volume slider
document.getElementById("volumeSlider").addEventListener("input", (e) => {
  if (ytPlayer) ytPlayer.setVolume(Number(e.target.value));
});

// Seek na barra de progresso
document.getElementById("progressBg").addEventListener("click", (e) => {
  if (!ytPlayer) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const pct  = (e.clientX - rect.left) / rect.width;
  ytPlayer.seekTo(ytPlayer.getDuration() * pct, true);
});

// Botão "Por que essa música?"
document.getElementById("btnWhySong").addEventListener("click", () => {
  document.getElementById("whySongCard").classList.toggle("hidden");
});
document.getElementById("closeWhyCard").addEventListener("click", () => {
  document.getElementById("whySongCard").classList.add("hidden");
});

/* ══════════════════════════════════════════════════════════
   CORAÇÕES FLUTUANTES NO CLIQUE / TOQUE
   ══════════════════════════════════════════════════════════ */
const canvas  = document.getElementById("heartsCanvas");
const ctx     = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class HeartParticle {
  constructor(x, y) {
    this.x     = x;
    this.y     = y;
    this.size  = Math.random() * 16 + 8;   // 8–24px
    this.speedY = -(Math.random() * 2 + 1.5);
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.alpha  = 1;
    this.fade   = Math.random() * 0.018 + 0.012;
    this.rotate = Math.random() * Math.PI * 2;
    this.rotateSpeed = (Math.random() - 0.5) * 0.06;
    // Cores variadas de rosa/vinho
    const hue = Math.floor(Math.random() * 30) + 320; // 320–350
    this.color = `hsl(${hue}, 80%, 60%)`;
  }

  drawHeart(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y - size * 0.3);
    ctx.bezierCurveTo(x, y - size, x + size, y - size, x + size, y - size * 0.3);
    ctx.bezierCurveTo(x + size, y + size * 0.1, x, y + size * 0.6, x, y + size * 0.8);
    ctx.bezierCurveTo(x, y + size * 0.6, x - size, y + size * 0.1, x - size, y - size * 0.3);
    ctx.bezierCurveTo(x - size, y - size, x, y - size, x, y - size * 0.3);
    ctx.closePath();
  }

  update() {
    this.x      += this.speedX;
    this.y      += this.speedY;
    this.alpha  -= this.fade;
    this.rotate += this.rotateSpeed;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle   = this.color;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotate);
    this.drawHeart(ctx, 0, 0, this.size);
    ctx.fill();
    ctx.restore();
  }
}

function spawnHearts(x, y, count = 5) {
  for (let i = 0; i < count; i++) {
    const offsetX = (Math.random() - 0.5) * 30;
    const offsetY = (Math.random() - 0.5) * 30;
    particles.push(new HeartParticle(x + offsetX, y + offsetY));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.alpha > 0);
  particles.forEach(p => { p.update(); p.draw(ctx); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Eventos de clique e toque em todo o documento
// (exceto nos controles do player para não atrapalhar)
document.addEventListener("click", (e) => {
  spawnHearts(e.clientX, e.clientY);
});
document.addEventListener("touchstart", (e) => {
  Array.from(e.touches).forEach(t => spawnHearts(t.clientX, t.clientY));
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   BOTÃO "O PRÓXIMO CAPÍTULO" + CONFETES
   ══════════════════════════════════════════════════════════ */
document.getElementById("btnNextChapter").addEventListener("click", () => {
  // Lança os confetes 🎉
  const colors = ["#F9A8D4", "#BE185D", "#9D174D", "#FBCFE8", "#F472B6", "#fff"];

  confetti({
    particleCount: 160,
    spread:        80,
    startVelocity: 45,
    origin:        { y: 0.7 },
    colors,
  });
  // Segunda rajada levemente diferente
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle:         60,
      spread:        55,
      origin:        { x: 0, y: 0.65 },
      colors,
    });
    confetti({
      particleCount: 80,
      angle:         120,
      spread:        55,
      origin:        { x: 1, y: 0.65 },
      colors,
    });
  }, 300);

  // Revela o card surpresa
  const card = document.getElementById("surpriseCard");
  card.classList.remove("hidden");
  card.scrollIntoView({ behavior: "smooth", block: "center" });

  // Esconde o botão depois de clicar (fica mais poético)
  document.getElementById("btnNextChapter").style.opacity = "0";
  document.getElementById("btnNextChapter").style.pointerEvents = "none";
});

/* ── Footer: ano atual ──────────────────────────────────── */
document.getElementById("footerYear").textContent = new Date().getFullYear();
