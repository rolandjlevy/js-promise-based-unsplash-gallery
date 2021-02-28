const gallery = document.querySelector('.gallery');
let counter = 1;
const maxImages = 15;
const baseUrl = 'https://source.unsplash.com/random';
import Image from './Image.js';

while (counter++ <= maxImages) {
  const img = new Image(counter, baseUrl);
  gallery.appendChild(img.add());
}