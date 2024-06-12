// 1.
// Select all classes of '.ol'.
const olButtons = document.querySelectorAll('.ol');

// Loop and line-through.
olButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.target.style.textDecoration = 'line-through';
  });
});

// 2.
// Select all classes of '.ul'.
const ulButtons = document.querySelectorAll('.ul');

// Loop and opaque-iffy.
ulButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.target.style.opacity = 0.5;
  });
});

// 3.
// Select all classes of '.images'.
const images = document.querySelectorAll('.images');

// Loop and ghost.
images.forEach(function(image) {
  image.addEventListener('click', function(event) {
    event.target.style.opacity = 0;
  });
});


// 4.
// Select id '#destroy-all'.
const meteor = document.querySelector('#destroy-all');

meteor.addEventListener('click', () => {
  // Loop and line-through.
  olButtons.forEach((button) => {
    button.style.textDecoration = 'line-through';
  });
  // Loop and opaque-iffy.
  ulButtons.forEach((button) => {
    button.style.opacity = 0.5;
  });
  // Loop and ghost.
  images.forEach((image) => {
    image.style.opacity = 0;
  });
});
