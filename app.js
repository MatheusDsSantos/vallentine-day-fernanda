/* ============================================================
   app.js — Nossa História ♥
   Cada linha escrita com amor. 💕
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   ✏️  DATA DE INÍCIO DO RELACIONAMENTO
   ══════════════════════════════════════════════════════════ */
const START_DATE = new Date(2023, 1, 14, 19, 30, 0);
// (ano, mês-1, dia, hora, minuto, segundo)

/* ══════════════════════════════════════════════════════════
   ✏️  MOMENTOS DA LINHA DO TEMPO
   Cada momento tem a própria música que toca no refrão
   quando a foto é aberta. Ajuste "chorusStart" (segundos)
   conforme quiser — é exatamente onde o refrão começa.
   Foto: coloque o arquivo em /assets/ e aponte o caminho.
   ══════════════════════════════════════════════════════════ */
const TIMELINE_MOMENTS = [
  {
    // ── Momento 1 ──────────────────────────────────────────
    date:        "2022",
    location:    "Parque de Içara",
    title:       "O Nosso Primeiro Encontro",
    text:        "Aquele dia ficou guardado para sempre no meu coração, era toda timida e mal tinha coragem de me abraçar, me apaixonei facilmente por você.",
    photo:       "assets/primeiro_encontro.jpg",
    photoPosition: "center center",
    emoji:       "🌸",
    side:        "left",
    // ── Música ─────────────────────────────────────────────
    youtubeId:   "NmSkiFSX3vE", // Nuvens — TakaB ft. Anny THN
    chorusStart: 55,            // ✏️  segundo onde o refrão começa
    songTitle:   "Nuvens",
    songArtist:  "TakaB ft. Anny THN",
  },
  {
    // ── Momento 2 ──────────────────────────────────────────
    date:        "2022 - 2026",
    location:    "shopping das nações",
    title:       "Nossos passeios no shopping",
    text:        "Eu amo esses passeios contigo, é divertido, leve, e a gente sempre acaba rindo de algo bobo. São momentos simples, mas que eu guardo com muito carinho.",
    photo:       "assets/nossos_PasseiosNoShopping.jpg",
    photoPosition: "center 35%",
    emoji:       "🍷",
    side:        "right",
    // ── Música ─────────────────────────────────────────────
    youtubeId:   "P2llSm9tZvA", // Vanilla Days — LNGSHOT
    chorusStart: 62,            // ✏️  ajuste conforme o refrão
    songTitle:   "Vanilla Days",
    songArtist:  "LNGSHOT",
  },
  {
    // ── Momento 3 ──────────────────────────────────────────
    date:        " 2023",
    location:    "Praia de Torres, SC",
    title:       "Nossa Primeira Viagem mais longe",
    text:        "A luz do sol nunca esteve tão linda quanto naquele dia, ou era apenas você me iluminando.",
    photo:       "assets/nossa_viagem_pra_torresSC.jpg",
    photoPosition: "center center",
    emoji:       "🌅",
    side:        "left",
    // ── Música ─────────────────────────────────────────────
    youtubeId:   "iJCOc0goVds", // Ipanema — Nikmouu ft. VMZ
    chorusStart: 45,            // ✏️  ajuste conforme o refrão
    songTitle:   "Ipanema",
    songArtist:  "Nikmouu ft. VMZ",
  },
  {
    // ── Momento 4 ──────────────────────────────────────────
    date:        "2024",
    location:    "Formatura do Ensino Médio",
    title:       "Sua formatura do ensino médio",
    text:        "Eu me senti orgulhoso de você naquele dia, e não era só por causa de você estar tão linda a ponto de eu ficar tímido ao ficar junto.",
    photo:       "assets/suaFormaturaEnsinoMedio.jpg",
    photoPosition: "center center",
    emoji:       "🎄",
    side:        "right",
    // ── Música ─────────────────────────────────────────────
    youtubeId:   "pvA_0k8hIvw", // Deslumbrante — Spártaco ft. Cristiano Araújo
    chorusStart: 68,            // ✏️  ajuste conforme o refrão
    songTitle:   "Deslumbrante",
    songArtist:  "Spártaco ft. Cristiano Araújo",
  },
  {
    // ── Momento 5 ──────────────────────────────────────────
    date:        "2025",
    location:    "A mais bela da festa",
    title:       "Festa de formatura da nicoli",
    text:        "Essa foto me impressiona pois consigo ver a princesa que eu tenho ao meu lado, e o quanto eu sou sortudo por ter você comigo.",
    photo:       "assets/AquiEstamosLindos_naFormatura-2.jpg",
    photoPosition: "center center",
    emoji:       "🥂",
    side:        "left",
    // ── Música ─────────────────────────────────────────────
    youtubeId:   "fdJrSjMgPFE", // Let the World Burn — Chris Grey
    chorusStart: 52,            // ✏️  ajuste conforme o refrão
    songTitle:   "Let the World Burn",
    songArtist:  "Chris Grey",
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
console.log(asciiHeart, "color:#BE185D;font-size:13px;font-family:monospace;");

/* ══════════════════════════════════════════════════════════
   CONTADOR EM TEMPO REAL
   ══════════════════════════════════════════════════════════ */
function updateCounter() {
  const now  = new Date();
  const diff = now - START_DATE;

  const totalSecs  = Math.floor(diff / 1000);
  const secs       = totalSecs % 60;
  const totalMins  = Math.floor(totalSecs / 60);
  const mins       = totalMins % 60;
  const totalHours = Math.floor(totalMins / 60);
  const hours      = totalHours % 24;

  let years  = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth()    - START_DATE.getMonth();
  if (months < 0) { years--; months += 12; }

  const base = new Date(START_DATE);
  base.setFullYear(base.getFullYear() + years);
  base.setMonth(base.getMonth() + months);
  const days = Math.floor((now - base) / 86400000);

  const fmt    = n => String(n).padStart(2, "0");
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
   PLAYER DE MÚSICA — YouTube IFrame API
   ══════════════════════════════════════════════════════════ */
let ytPlayer        = null;
let ytReady         = false;   // true assim que onPlayerReady dispara
let isPlaying       = false;
let progressTimer   = null;
let currentMoment   = null;    // momento cuja música está tocando
let pendingMoment   = null;    // guardado se player ainda não estava pronto

// Chamado automaticamente pela API do YouTube quando carrega
window.onYouTubeIframeAPIReady = function () {
  // Inicializa com o primeiro vídeo (sem autoplay) para garantir
  // que o player cria o iframe corretamente antes do primeiro clique
  const firstId = TIMELINE_MOMENTS[0]?.youtubeId || "NmSkiFSX3vE";

  ytPlayer = new YT.Player("ytPlayer", {
    height:  "1",
    width:   "1",
    videoId: firstId,
    playerVars: {
      autoplay:       0,
      controls:       0,
      disablekb:      1,
      fs:             0,
      modestbranding: 1,
      rel:            0,
      // NÃO passa origin — em file:// retorna "null" e quebra a API
    },
    events: {
      onReady:       onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError:       onPlayerError,
    },
  });
};

function onPlayerReady() {
  // Player pronto — aguarda o primeiro clique em uma foto
  ytReady = true;
  document.getElementById("songTitle").textContent  = "Clique em uma foto";
  document.getElementById("songArtist").textContent = "para tocar a música ♥";
  ytPlayer.setVolume(70);

  if (pendingMoment) {
    const moment = pendingMoment;
    pendingMoment = null;
    playMomentSong(moment);
  }
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
    if (event.data === YT.PlayerState.ENDED ||
        event.data === YT.PlayerState.PAUSED) {
      stopProgressUpdate();
    }
  }
}

function onPlayerError() {
  isPlaying = false;
  document.getElementById("vinyl").classList.remove("playing");
  document.getElementById("iconPlay").classList.remove("hidden");
  document.getElementById("iconPause").classList.add("hidden");
  document.getElementById("songTitle").textContent = "Música indisponível";
  document.getElementById("songArtist").textContent = "verifique o link do YouTube";
  stopProgressUpdate();
}

// Carrega a música do momento no refrão e toca
function playMomentSong(moment) {
  if (!moment?.youtubeId) return;
  if (!ytPlayer || !ytReady) {
    pendingMoment = moment;
    document.getElementById("songTitle").textContent  = moment.songTitle;
    document.getElementById("songArtist").textContent = "preparando a música...";
    return;
  }

  currentMoment = moment;

  document.getElementById("songTitle").textContent  = moment.songTitle;
  document.getElementById("songArtist").textContent = moment.songArtist;
  document.getElementById("progressFill").style.width = "0%";

  ytPlayer.loadVideoById({
    videoId:      moment.youtubeId,
    startSeconds: moment.chorusStart,
  });
}

function startProgressUpdate() {
  stopProgressUpdate();
  progressTimer = setInterval(() => {
    if (!ytPlayer || typeof ytPlayer.getCurrentTime !== "function") return;
    const cur      = ytPlayer.getCurrentTime();
    const duration = ytPlayer.getDuration();
    if (duration > 0) {
      document.getElementById("progressFill").style.width =
        ((cur / duration) * 100) + "%";
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

// Volume
document.getElementById("volumeSlider").addEventListener("input", e => {
  if (ytPlayer) ytPlayer.setVolume(Number(e.target.value));
});

// Seek na barra de progresso
document.getElementById("progressBg").addEventListener("click", e => {
  if (!ytPlayer) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const pct  = (e.clientX - rect.left) / rect.width;
  ytPlayer.seekTo(ytPlayer.getDuration() * pct, true);
});

// Botão "Por que essa música?"
document.getElementById("btnWhySong").addEventListener("click", () => {
  const card = document.getElementById("whySongCard");
  // Atualiza o texto com a info do momento atual
  if (currentMoment) {
    document.getElementById("whySongText").textContent =
      currentMoment.whySong ||
      `"${currentMoment.songTitle}" toca toda vez que eu penso nesse momento com você. 💕`;
  }
  card.classList.toggle("hidden");
});
document.getElementById("closeWhyCard").addEventListener("click", () => {
  document.getElementById("whySongCard").classList.add("hidden");
});

/* ══════════════════════════════════════════════════════════
   LINHA DO TEMPO — renderização + Intersection Observer
   ══════════════════════════════════════════════════════════ */
function buildTimeline() {
  const container = document.getElementById("timelineCards");
  if (!container) return;

  TIMELINE_MOMENTS.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = `timeline-card ${m.side}`;

    // Foto clicável (ou placeholder com emoji)
    const photoHTML = m.photo
      ? `<div
           class="card-photo-frame card-photo-clickable"
           data-index="${i}"
           style="--photo-url: url('${m.photo}')"
           title="Clique para ouvir a música ♥"
         >
           <img
             src="${m.photo}"
             alt="${m.title}"
             class="card-photo"
             style="object-position: ${m.photoPosition || "center center"}"
             loading="lazy"
           />
         </div>`
      : `<div
           class="card-photo-placeholder card-photo-clickable"
           data-index="${i}"
           title="Clique para ouvir a música ♥"
         >${m.emoji}</div>`;

    card.innerHTML = `
      <div class="card-inner">
        ${photoHTML}
        <div class="card-body">
          <p class="card-tag">${m.date} · ${m.location}</p>
          <h3 class="card-title">${m.title}</h3>
          <p class="card-text">${m.text}</p>
          <button class="card-play-hint" data-index="${i}">
            ♪ ${m.songTitle} <span class="card-play-artist">— ${m.songArtist}</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Clique em qualquer foto ou botão da música → abre lightbox + toca refrão
  container.addEventListener("click", e => {
    const target = e.target.closest("[data-index]");
    if (!target) return;
    const idx = Number(target.dataset.index);
    openLightbox(TIMELINE_MOMENTS[idx], idx);
  });

  // Intersection Observer — fade-in dos cards ao rolar
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".timeline-card").forEach(el => observer.observe(el));
}
buildTimeline();

/* ══════════════════════════════════════════════════════════
   LIGHTBOX — abre a foto e toca a música no refrão
   ══════════════════════════════════════════════════════════ */
const lightbox      = document.getElementById("lightbox");
const lbPhoto       = document.getElementById("lbPhoto");
const lbPlaceholder = document.getElementById("lbPlaceholder");
const lbTitle       = document.getElementById("lbTitle");
const lbDate        = document.getElementById("lbDate");
const lbSong        = document.getElementById("lbSong");
const lbClose       = document.getElementById("lbClose");

function openLightbox(moment, idx) {
  // Foto ou emoji
  if (moment.photo) {
    lbPhoto.src = moment.photo;
    lbPhoto.classList.remove("hidden");
    lbPlaceholder.classList.add("hidden");
  } else {
    lbPlaceholder.textContent = moment.emoji;
    lbPlaceholder.classList.remove("hidden");
    lbPhoto.classList.add("hidden");
  }

  lbTitle.textContent = moment.title;
  lbDate.textContent  = `${moment.date} · ${moment.location}`;
  lbSong.textContent  = `♪ ${moment.songTitle} — ${moment.songArtist}`;

  lightbox.classList.remove("hidden");
  lightbox.classList.add("lb-visible");
  document.body.style.overflow = "hidden";

  // Toca a música no refrão
  playMomentSong(moment);

  // Fecha o balão "por que essa música?" se estiver aberto
  document.getElementById("whySongCard").classList.add("hidden");
}

function closeLightbox() {
  lightbox.classList.remove("lb-visible");
  setTimeout(() => lightbox.classList.add("hidden"), 300);
  document.body.style.overflow = "";
  if (ytPlayer && isPlaying) ytPlayer.pauseVideo();
}

lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
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
    this.x          = x;
    this.y          = y;
    this.size       = Math.random() * 16 + 8;
    this.speedY     = -(Math.random() * 2 + 1.5);
    this.speedX     = (Math.random() - 0.5) * 1.5;
    this.alpha      = 1;
    this.fade       = Math.random() * 0.018 + 0.012;
    this.rotate     = Math.random() * Math.PI * 2;
    this.rotateSpeed= (Math.random() - 0.5) * 0.06;
    const hue       = Math.floor(Math.random() * 30) + 320;
    this.color      = `hsl(${hue},80%,60%)`;
  }
  drawHeart(ctx, x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y - s * 0.3);
    ctx.bezierCurveTo(x, y - s, x + s, y - s, x + s, y - s * 0.3);
    ctx.bezierCurveTo(x + s, y + s * 0.1, x, y + s * 0.6, x, y + s * 0.8);
    ctx.bezierCurveTo(x, y + s * 0.6, x - s, y + s * 0.1, x - s, y - s * 0.3);
    ctx.bezierCurveTo(x - s, y - s, x, y - s, x, y - s * 0.3);
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
    particles.push(new HeartParticle(
      x + (Math.random() - 0.5) * 30,
      y + (Math.random() - 0.5) * 30
    ));
  }
}

(function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.alpha > 0);
  particles.forEach(p => { p.update(); p.draw(ctx); });
  requestAnimationFrame(animateParticles);
})();

document.addEventListener("click", e => spawnHearts(e.clientX, e.clientY));
document.addEventListener("touchstart", e => {
  Array.from(e.touches).forEach(t => spawnHearts(t.clientX, t.clientY));
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   BOTÃO "O PRÓXIMO CAPÍTULO" + CONFETES
   ══════════════════════════════════════════════════════════ */
document.getElementById("btnNextChapter").addEventListener("click", () => {
  const colors = ["#F9A8D4","#BE185D","#9D174D","#FBCFE8","#F472B6","#fff"];

  confetti({ particleCount: 160, spread: 80, startVelocity: 45,
             origin: { y: 0.7 }, colors });
  setTimeout(() => {
    confetti({ particleCount: 80, angle:  60, spread: 55,
               origin: { x: 0, y: 0.65 }, colors });
    confetti({ particleCount: 80, angle: 120, spread: 55,
               origin: { x: 1, y: 0.65 }, colors });
  }, 300);

  const card = document.getElementById("surpriseCard");
  card.classList.remove("hidden");
  card.scrollIntoView({ behavior: "smooth", block: "center" });

  const btn = document.getElementById("btnNextChapter");
  btn.style.opacity       = "0";
  btn.style.pointerEvents = "none";
});

/* ── Footer: ano atual ────────────────────────────────────── */
document.getElementById("footerYear").textContent = new Date().getFullYear();
