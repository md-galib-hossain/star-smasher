type ButtonConfig = {
  buttonText: string;
  buttonStyle: Record<string, string>;
};

const buttonConfig: ButtonConfig = {
  buttonText: 'Start Game',
  buttonStyle: {
    color: '#FFFFFF',
    backgroundColor: '#A953FF',
    position: 'absolute',
    top: '75%',
    left: '50%',
    width: '70%',
    height: '48px',
    borderRadius: '8px',
    fontSize: '24px',
    transform: 'translateX(-50%)',
    border: 'none',
    cursor: 'pointer',
    display: 'none' // Initially hidden
  }
};

const button = document.createElement('button');
button.textContent = buttonConfig.buttonText;
Object.assign(button.style, buttonConfig.buttonStyle);
document.body.appendChild(button);

// Handle button click events
button.addEventListener('click', () => {
  const action = button.textContent === 'Start Game' ? 'start' : 'restart';
  window.postMessage({ action }, '*');
});

// Show button with updated text
export function showButton(text: string) {
  button.textContent = text;
  button.style.display = 'block';
}

// Hide button
export function hideButton() {
  button.style.display = 'none';
}

// Listen for messages from scenes
window.addEventListener('message', (event) => {
  if (event.data.action === 'showStartButton') {
    showButton('Start Game');
  } else if (event.data.action === 'showRestartButton') {
    showButton('Restart');
  } else if (['start', 'restart'].includes(event.data.action)) {
    hideButton();
  }
});
