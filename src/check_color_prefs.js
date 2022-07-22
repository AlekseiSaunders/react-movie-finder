if (
  localStorage.getItem('color-mode') === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localStorage.getItem('color-mode'))
) {
  document.documentElement.setAttribute('color-mode', 'dark');
}
