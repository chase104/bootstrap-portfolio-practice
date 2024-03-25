// Add custom JavaScript here

function runTypingEffect() {
  const text = "I am Chase Van Halen.";
  const typingElement = document.querySelector("#typing-text");
  const typingDelay = 100;
  typeText(text, typingElement, typingDelay);
}

function typeText(text, element, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text[i];
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
