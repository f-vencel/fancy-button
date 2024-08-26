const button = document.querySelector('.button.animateChar');
const button_text = document.querySelectorAll('.button.animateChar .char');

function buttonHover(isEnter) {
   button_text.forEach(letter => {
      letter.classList.remove(isEnter ? 'out' : 'in');
      setTimeout(() => letter.classList.add(!isEnter ? 'out' : 'in'), 0)
   });
}

button.onmouseenter = () => buttonHover(true);
button.onmouseleave = () => buttonHover(false);


