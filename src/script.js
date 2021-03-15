const container = document.querySelector('.container');
let counter = 1;
const maxImages = 25;
const baseUrl = 'https://source.unsplash.com/random';
import UnsplashImage from './UnsplashImage.js';

const promises = [];
while (counter++ <= maxImages) {
  const unsplashImage = new UnsplashImage(container, baseUrl, counter);
  promises.push(unsplashImage.loadImage);
}

Promise.all(promises).then(values => {
  values.forEach(promise => {
    console.log({promise});
  });
});