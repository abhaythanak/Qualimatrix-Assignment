  // JavaScript code to loop the typewriter effect
  const textElement = document.querySelector('.text');

  function resetAnimation() {
    textElement.style.animation = 'none';
    void textElement.offsetWidth; // Trigger reflow
    textElement.style.animation = null;
  }

  textElement.addEventListener('animationiteration', () => {
    resetAnimation();
  });