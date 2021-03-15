export default class UnsplashImage {
  constructor(container, baseUrl, counter) {
    this.url = `${baseUrl}?${counter}`;
    this.loadImage().then(img => {
      img.setAttribute('data-url', this.img.url);
      console.log({img})
      const li = document.createElement('li');
      li.appendChild(img);
      container.appendChild(li);
    })
    .catch(error => console.error(error));
  }
  loadImage() {
    return new Promise((resolve, reject) => {
      this.img = new Image();
      this.img.addEventListener('load', (e) => {
        resolve(this.img);
      });
      this.img.addEventListener('click', (e) => {
        const url = e.target.dataset.url;
        console.log(e.target.dataset)
        window.open(url, '_blank');
      });
      this.img.addEventListener('animationend', (e) => this.img.classList.add('init'));
      this.img.addEventListener('error', (e) => {
        reject(new Error(`Failed to load image's URL: ${this.url}`));
      });
      this.img.src = this.url;
    });
  }
}