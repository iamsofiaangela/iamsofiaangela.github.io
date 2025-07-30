const roles = ["UI Designer", "Web Developer", "Creative Freelancer"];
let i = 0;
let char = 0;
let isDeleting = false;
let currentText = '';
let typingElement = document.getElementById('typing');

function typeEffect() {
  const fullText = roles[i];

  if (isDeleting) {
    currentText = fullText.substring(0, char--);
  } else {
    currentText = fullText.substring(0, char++);
  }

  typingElement.innerHTML = currentText;

  if (!isDeleting && char === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && char === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
