function createConnectedLines() {
  const container = document.querySelector(".binary-rain");

  if (!container) {
    console.warn("Contenedor para efecto de líneas no encontrado");
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    // Obtener el tamaño del contenedor padre
    const parentRect = container.getBoundingClientRect();
    canvas.width = parentRect.width;
    canvas.height = parentRect.height;
  }

  // Ajustar canvas inicial y al redimensionar
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const nodes = [];
  const nodeCount = 50;
  const connectionDistance = 150;

  class Node {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = Math.random() - 0.5;
      this.vy = Math.random() - 0.5;
      this.radius = 2.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Rebotar en los bordes
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100, 149, 237, 0.7)";
      ctx.fill();
    }
  }

  // Crear nodos
  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.update();
      node.draw();

      for (let j = i + 1; j < nodes.length; j++) {
        const otherNode = nodes[j];
        const dx = node.x - otherNode.x;
        const dy = node.y - otherNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.strokeStyle = `rgba(100, 149, 237, ${
            1 - distance / connectionDistance
          })`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  // Iniciar animación después de un breve retraso
  setTimeout(animate, 100);
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Intentar múltiples veces por si acaso
  setTimeout(createConnectedLines, 100);
  setTimeout(createConnectedLines, 500);
  setTimeout(createConnectedLines, 1000);
});
