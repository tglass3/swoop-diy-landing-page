// Check JS is Connected
console.log('👍 JS Connected');

const beegees = ['bg0', 'bg1', 'bg2'];
const limitB = beegees.length;
const randNumB = Math.floor(Math.random()*limitB);
const swoops = ['img/swoop.png',
                'img/swoop+2.webp',
                'img/swoop3.webp'];
const limitS = swoops.length;
const randNumS = Math.floor(Math.random()*limitS);

const body = document.querySelector('body');
const frontImg = document.querySelector('.front img');

body.classList.add(beegees[randNumB]);

frontImg.src = swoops[randNumS];


// get all the card
document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {
      
      // toggle class on card
      item.classList.toggle('flipped');
    })
  
})