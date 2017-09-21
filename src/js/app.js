
    class Canvas {
        constructor() {
// Get canvas
            this.canvas = document.getElementById("canvas");
            this.ctx = canvas.getContext('2d');

// Canvas buttons
            this.loadBtn = document.getElementById('load');
            this.deleteBtn = document.getElementById('delete');

// Size ranges
            this.lineWidth = document.getElementById('line-width');
            this.lineHeight = document.getElementById('line-height');

// Get src for image
            this.src = document.getElementById('image-url');

// Local storage buttons
            this.loadToLocalStorageBtn = document.getElementById('load-in-ls');
            this.loadFromLocalStorageBtn = document.getElementById('load-from-ls');
            this.clearLocalStorageBtn = document.getElementById('clear-ls');

// Colors controller
            this.red = document.getElementById('red');
            this.green = document.getElementById('green');
            this.blue = document.getElementById('blue');
            this.alpha = document.getElementById('alpha');

// Digital colors controllers
            this.redDig = document.getElementById('digital-red');
            this.greenDig = document.getElementById('digital-green');
            this.blueDig = document.getElementById('digital-blue');
            this.alphaDig = document.getElementById('digital-alpha');

            this.ranges = document.querySelectorAll('.range');

// Clear canvas
            this.deleteBtn.addEventListener('click', () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            });

// Local Storage Listeners
            this.loadToLocalStorageBtn.addEventListener('click', () => {
                if (!this.src.value) {
                    alert('Input is empty, paste url, after try to save it')
                }
                localStorage.setItem('img-src', this.src.value);
            });

            this.loadFromLocalStorageBtn.addEventListener('click', () => {
                const srcFromLs = localStorage.getItem('img-src');
                if (!srcFromLs) {
                    alert('Local storage is empty');
                }
                this.createImage(srcFromLs, this.lineWidth.value, this.lineHeight.value);
            });

            this.clearLocalStorageBtn.addEventListener('click', () => {
                localStorage.clear();
                alert('Local storage has been cleared')
            });

// Load image
            this.loadBtn.addEventListener('click', () => {
                this.createImage(this.src.value, this.lineWidth.value, this.lineHeight.value);
            });

// Size listeners
            this.lineHeight.addEventListener('change', () => {
                this.createPicture(this.lineWidth.value, this.lineHeight.value);
            });
            this.lineWidth.addEventListener('change', () => {
                this.createPicture(this.lineWidth.value, this.lineHeight.value);
            });

            // Add listeners, rewrite picture if you change size
            this.ranges.forEach((input) => {
                input.addEventListener('change', () => {
                    this.createPicture(this.lineWidth.value, this.lineHeight.value);
                })
            });

// Range listeners
            this.red.addEventListener('change', () => {
                this.redDig.value = this.red.value;
            });
            this.green.addEventListener('change', () => {
                this.greenDig.value = this.green.value;
            });
            this.blue.addEventListener('change', () => {
                this.blueDig.value = this.blue.value;
            });
            this.alpha.addEventListener('change', () => {
                this.alphaDig.value = this.alpha.value;
            });

// Digital controller listeners
            this.redDig.addEventListener('change', () => {
                this.red.value = this.redDig.value;
            });
            this.greenDig.addEventListener('change', () => {
                this.green.value = this.greenDig.value;
            });
            this.blueDig.addEventListener('change', () => {
                this.blue.value = this.blueDig.value;
            });
            this.alphaDig.addEventListener('change', () => {
                this.alpha.value = this.alphaDig.value;
            });
        }

// Create image
        createImage(src, width, height) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const img = new Image();
            img.addEventListener("load", () => {
                this.ctx.drawImage(img, 0, 0, width, height)
            }, false);
            img.src = src;
        }

// Create picture
        createPicture(w, h) {
            if(!!w && !!h){
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fillStyle = `rgba( ${this.red.value}, ${this.green.value}, ${this.blue.value}, ${this.alpha.value})`;
                this.ctx.fillRect(0, 0, w, h);
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fillStyle = `rgba( ${this.red.value}, ${this.green.value}, ${this.blue.value}, ${this.alpha.value})`;
                this.ctx.fillRect(0, 0, 500, 500);
            }
        }
    }
    const picture = new Canvas();
    picture.createPicture();
