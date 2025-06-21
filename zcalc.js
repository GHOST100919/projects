const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    console.log(button.textContent)

    if (value === '=') {
      currentInput = eval(currentInput);
    } else if (value === 'C') {
      currentInput = '';
    } else if (value === 'Delete') {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput += value;
    }

    display.textContent = currentInput || '0';
  });
});
