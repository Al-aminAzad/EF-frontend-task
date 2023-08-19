const roundInput = document.getElementById('search-input');
const pcItem = document.getElementById('pc');
const playstation = document.getElementById('playstation');
const xbox = document.getElementById('xbox');
const nintendo = document.getElementById('nintendo')
const navbar = document.querySelector('.navbar');
const childBlock = document.getElementById('childMenu');
roundInput.addEventListener('focus', () => {
  navbar.style.display = 'none';
});

roundInput.addEventListener('blur', () => {
  navbar.style.display = 'flex';
});
function toggleChildBlock(isVisible) {
  if (isVisible) {
    childBlock.style.display = 'none';
  } else {
    childBlock.style.display = 'flex';
  }
}
let pcBlockVisible = false;
let playstationVisible = false;
let xboxVisible = false;
let nintendoVisible = false;


pcItem.addEventListener('click', () => {
  toggleChildBlock(pcBlockVisible);
  pcBlockVisible = !pcBlockVisible;
});
playstation.addEventListener('click', () => {
  toggleChildBlock(playstationVisible);
  playstationVisible = !playstationVisible;
});

xbox.addEventListener('click', () => {
  toggleChildBlock(xboxVisible);
  xboxVisible = !xboxVisible;
});

nintendo.addEventListener('click', () => {
  toggleChildBlock(nintendoVisible);
  nintendoVisible = !nintendoVisible;
});





