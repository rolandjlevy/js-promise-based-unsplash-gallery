export default class Image {
  constructor(num, baseUrl) {
    this.num = num;
    this.baseUrl = baseUrl;
  }
  add() {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `${this.baseUrl}?${this.num}`;
    li.appendChild(img);
    return li;
  }
}