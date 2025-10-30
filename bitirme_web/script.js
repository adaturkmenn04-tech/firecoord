// Basit hover animasyonu için ufak bir JS örneği:
document.querySelectorAll(".report-btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #ff6600, #ff3300)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "linear-gradient(45deg, #ff3300, #ffbb00)";
  });
});
