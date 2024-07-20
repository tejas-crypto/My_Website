let startTime;
let elapsed = 0;
let running = false;
let updateInterval;

const timeElement = document.getElementById("time");

function startStopwatch() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsed;
    requestAnimationFrame(updateTime);
  }
}

function stopStopwatch() {
  running = false;
  elapsed = Date.now() - startTime;
  cancelAnimationFrame(updateInterval);
}

function resetStopwatch() {
  running = false;
  elapsed = 0;
  startTime = null;
  cancelAnimationFrame(updateInterval);
  timeElement.textContent = "00:00:00";
}

function updateTime() {
  if (!running) return;

  const now = Date.now();
  elapsed = now - startTime;

  const seconds = Math.floor((elapsed / 1000) % 60);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  timeElement.textContent = formattedTime;

  updateInterval = requestAnimationFrame(updateTime);
}
