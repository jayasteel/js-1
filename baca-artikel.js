var container = document.getElementById("rea");

if (!container) return;

// UI tombol
container.innerHTML = `
<button id="btnPlay" title="Baca artikel">🔊</button>
<button id="btnPause" style="display:none" title="Jeda">⏸</button>
<button id="btnResume" style="display:none" title="Lanjut">▶️</button>
<button id="btnStop" style="display:none" title="Berhenti">⏹</button>

<style>
#rea button{padding:12px;font-size:18px;border:none;background:none;cursor:pointer}
</style>
`;

// Ambil tombol
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
var btnResume = document.getElementById("btnResume");
var btnStop = document.getElementById("btnStop");

// Cek support browser
if (!("speechSynthesis" in window)) {
  container.innerHTML = "Browser tidak mendukung fitur suara.";
}

// Fungsi ambil teks
function ambilTeks() {
  var judul = document.querySelector(".post-title");
  var isi = document.querySelector(".post-body");

  return (judul ? judul.innerText : "") + ". " + (isi ? isi.innerText : "");
}

// Event PLAY
btnPlay.onclick = function () {
  var teks = ambilTeks();
  var u = new SpeechSynthesisUtterance(teks);

  u.lang = "id-ID";

  speechSynthesis.speak(u);

  btnPlay.style.display = "none";
  btnPause.style.display = "inline-block";
  btnStop.style.display = "inline-block";

  // Reset saat selesai
  u.onend = function () {
    resetTombol();
  };
};

// PAUSE
btnPause.onclick = function () {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
    btnPause.style.display = "none";
    btnResume.style.display = "inline-block";
  }
};

// RESUME
btnResume.onclick = function () {
  speechSynthesis.resume();
  btnResume.style.display = "none";
  btnPause.style.display = "inline-block";
};

// STOP
btnStop.onclick = function () {
  speechSynthesis.cancel();
  resetTombol();
};

// Reset UI
function resetTombol() {
  btnPlay.style.display = "inline-block";
  btnPause.style.display = "none";
  btnResume.style.display = "none";
  btnStop.style.display = "none";
}
