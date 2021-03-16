export default class UnsplashImage {
  constructor(container, baseUrl, counter) {
    this.url = `${baseUrl}?${counter}`;
    this.loadImage().then(img => {
      const a = document.createElement('a');
      a.setAttribute('href', this.url);
      a.setAttribute('target', '_blank');
      a.appendChild(img);
      const li = document.createElement('li');
      li.appendChild(a);
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
        // const url = e.target.dataset.url;
        // window.open(url, '_blank');
        console.log(e);
      });
      this.img.addEventListener('animationend', (e) => {
        this.img.classList.add('init');
      });
      this.img.addEventListener('error', (e) => {
        reject(new Error(`Failed to load image's URL: ${this.url}`));
      });
      this.img.src = this.url;
    });
  }
}