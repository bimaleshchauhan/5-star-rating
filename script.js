const stars = document.querySelectorAll('.star');

function rate(e) {
  const rating = e.target.getAttribute('data-rating');
  stars.forEach(star => {
    if (star.getAttribute('data-rating') <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function hoverRating(e) {
  const rating = e.target.getAttribute('data-rating');
  stars.forEach(star => {
    if (star.getAttribute('data-rating') <= rating) {
      star.classList.add('hover');
    } else {
      star.classList.remove('hover');
    }
  });
}

function leaveRating() {
    stars.forEach(star => {
       star.classList.remove('hover');
    })
}

stars.forEach(star => {
  star.addEventListener('click', rate);
  star.addEventListener('mouseover', hoverRating);
  star.addEventListener('mouseout', leaveRating);
});
