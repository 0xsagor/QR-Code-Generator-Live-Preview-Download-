function generate() {
  const text = document.getElementById("text").value;
  if (!text) return;

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

  document.getElementById("qr").innerHTML = `<img src="${url}" alt="QR Code">`;
}
