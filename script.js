function toggleTheme() {
  document.body.classList.toggle('dark');

  const logo = document.getElementById('logo-img');
  if (document.body.classList.contains('dark')) {
    logo.src = 'logo-dark.png';
  } else {
    logo.src = 'logo-light.png';
  }
}
