const gallery = document.querySelector('.gallery');
let counter = 1;
const maxImages = 15;
const baseUrl = 'https://source.unsplash.com/random';

const addImage = (n) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = `${baseUrl}?${n}`;
  li.appendChild(img)
  return li;
}

while (counter++ <= maxImages) {
  const img = addImage(counter);
  gallery.appendChild(img);
}