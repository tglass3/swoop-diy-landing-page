// Check JS is Connected
console.log('👍 JS Connected');

const beegees = ['bg0', 'bg1', 'bg2'];
const limit = beegees.length;
const randNum = Math.floor(Math.random()*limit);

const body = document.querySelector('body');

body.classList.add(beegees[randNum]);

// get all the card
document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {
      
      // toggle class on card
      item.classList.toggle('flipped');
    })
  
})