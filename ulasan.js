function loadContent() {
  Promise.all([
    fetch('https://js.jayasteel.com/ulasan.html').then(res => res.text()),
    fetch('https://js.jayasteel.com/ulasan.css').then(res => res.text())
  ]).then(([html, css]) => {
    // Insert HTML
    document.getElementById('reviewCo').innerHTML = html;

    // Insert CSS dynamically
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }).catch(err => console.error('Error loading files:', err));
}

// Run function on load
document.addEventListener('DOMContentLoaded', loadContent);
