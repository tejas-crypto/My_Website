function live() {
  const d = new Date();
  let h = d.getHours();
  const noon = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  h = h.toString().padStart(2, 0);
  const m = d.getMinutes().toString().padStart(2, 0);
  const s = d.getSeconds().toString().padStart(2, 0);
  const time = `${h}:${m}:${s} ${noon}`;
  document.getElementById("clock").textContent = time;
}
live();
setInterval(live, 1000);
