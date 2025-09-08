function toggleTheme() {
  document.body.classList.toggle('dark');

  const logo = document.getElementById('logo-img');
  if (document.body.classList.contains('dark')) {
    logo.src = 'logo-dark.png';
  } else {
    logo.src = 'logo-light.png';
  }
}

const logoContainer = document.querySelector('.logo');
let tooltipTimeout;

logoContainer.addEventListener('mouseenter', () => {
  logoContainer.classList.add('show-tooltip');

  clearTimeout(tooltipTimeout); 
  tooltipTimeout = setTimeout(() => {
    logoContainer.classList.remove('show-tooltip');
  }, 2000); 
});

logoContainer.addEventListener('mouseleave', () => {
  clearTimeout(tooltipTimeout); 
  logoContainer.classList.remove('show-tooltip'); 
});
