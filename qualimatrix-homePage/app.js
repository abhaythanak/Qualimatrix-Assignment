// custom cursor
let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(e){
    cursor.style.left = e.x+"px"
    cursor.style.top = e.y+"px"
})

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