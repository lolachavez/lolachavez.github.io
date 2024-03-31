const bubbleContainer = document.getElementById('bubble-container');

document.addEventListener('click', createBubble);

function createBubble(e) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.floor(Math.random() * 50) + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  const x = e.clientX - size / 2;
  const y = e.clientY - size / 2;
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 3000);
}
