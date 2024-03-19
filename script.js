const userInput = document.getElementById('text-input');
const result = document.getElementById('result');
const palindromeButton = document.getElementById('check-btn');

const validatePalindrome = input => {
  const origUserInput = input;
  if (input === '') {
    alert('Please input a value');
    return;
  }

  result.replaceChildren();

  const toLowerCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMessage = `${origUserInput} ${toLowerCase === [...toLowerCase].reverse().join('') ? 'is' : 'is not'} a palindrome.`;
  
  const paragraphTag = document.createElement('p');
  paragraphTag.className = 'user-input';
  paragraphTag.innerHTML = resultMessage;
  result.appendChild(paragraphTag);

  reuslt.classList.remove('hidden');
};

palindromeButton.addEventListener('click', () => {
  validatePalindrome(userInput.value);
  userInput.value = '';
});
