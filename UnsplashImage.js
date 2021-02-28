export default class UnsplashImage {
  constructor(container, baseUrl, counter) {
    this.url = `${baseUrl}?${counter}`;
    this.container = container;
    this.loadImage()
    .then(img => {
      const li = document.createElement('li');
      li.appendChild(img);
      this.container.appendChild(li);
    })
    .catch(error => console.error(error));
  }
  loadImage() {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.addEventListener('load', (e) => {
        resolve(img);
      });
      img.addEventListener('animationend', (e) => {
        img.classList.add('init');
      });
      img.addEventListener('error', (e) => {
        reject(new Error(`Failed to load image's URL: ${this.url}`));
      });
      img.src = this.url;
    });
  }
}