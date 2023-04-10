import Player from './player.js';

window.onload = () => {
  loading.style.display = 'none';
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  player.draw(ctx);
};