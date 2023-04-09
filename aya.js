
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelector('.frame').onclick = () => {
  const details = document.querySelector('#details');
  if (details.style.display === 'none') {
    document.querySelectorAll('#details').forEach(show => {
      show.style.display = 'none';
    });
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
};
