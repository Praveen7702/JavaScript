const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (input) => {
  const reversedSentence = reverseWordsInSentence(input);
  console.log('Reversed Sentence:', reversedSentence);

  rl.close();
});

function reverseWordsInSentence(sentence) {
  const words = sentence.split(' '); 
  const reversedWords = [];

  for (const word of words) {
    const reversedWord = reverseWord(word);
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}