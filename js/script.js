'use strict';

const closeBtn = document.querySelectorAll('.remove-button');
console.log(closeBtn);

closeBtn.forEach( (btn) => btn.onclick = () => {
  btn.parentNode.remove();
})