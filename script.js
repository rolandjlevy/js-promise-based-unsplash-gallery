function addImage(n) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = `https://source.unsplash.com/random?${n}`
  li.appendChild(img)
  return li;
}

const gallery = document.querySelector('.gallery');

let counter = 1;

while (counter++ < 15) {
  const img = addImage(counter);
  gallery.appendChild(img);
}