export function click12 () {
  
  const buttonToggle = document.getElementById('iconToggle')
  document.documentElement.classList.toggle('darkMode')

  if (buttonToggle.classList.contains('ph-sun-dim')) {
    buttonToggle.classList.remove('ph-sun-dim')
    buttonToggle.classList.add('ph-moon-stars')

  } else if (buttonToggle.classList.contains('ph-moon-stars')) {
    buttonToggle.classList.remove('ph-moon-stars')
    buttonToggle.classList.add('ph-sun-dim')
  }
}