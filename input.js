export default class InputHandler {
  constructor() {
    this.lastKey = '';
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
        case 'a':
          this.lastKey = 'PRESS left';
          break;
        case 'ArrowRight':
        case 'd':
          this.lastKey = 'PRESS right';
          break;
      }
    }); 
    window.addEventListener('keyup', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
        case 'a':
          this.lastKey = 'RELEASE left';
          break;
        case 'ArrowRight':
        case 'd':
          this.lastKey = 'PRESS right';
          break;
      }
    }); 
  }
};