const container = document.querySelector('.container');
let counter = 1;
const maxImages = 25;
const baseUrl = 'https://source.unsplash.com/random';
import UnsplashImage from './UnsplashImage.js';

while (counter++ <= maxImages) {
  new UnsplashImage(container, baseUrl, counter);
}