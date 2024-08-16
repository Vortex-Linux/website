const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];
  
  let currentIndex = 0;
  
  function changeBackgroundImage() {
    const heroSection = document.getElementById('hero');
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
  
  // Initial background image setup
  document.addEventListener('DOMContentLoaded', changeBackgroundImage);
  