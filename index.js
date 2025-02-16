const changeProposal = (arr) => {
  const result = [];

  for (const item of arr) {
      const { word, divisibility } = item;
      let transformedWord = '';

      for (let i = 0; i < word.length; i++) {
          if (divisibility === 'чётный' && i % 2 === 0) {
              transformedWord += word[i+1].toUpperCase();
          } else if (divisibility === 'нечётный' && i % 2 !== 0) {
              transformedWord += word[i-1].toUpperCase();
          } else {
              transformedWord += word[i];
          }
      }

      result.push(transformedWord);
  }

  return result;
};

console.log(changeProposal([
  { word: 'чётный текст', divisibility: 'чётный' },
  { word: 'нечётный текст', divisibility: 'нечётный' },
  { word: 'этот текст тоже должен быть с каждым большим чётным символом', divisibility: 'чётный' },
  { word: 'а у этого текста должен быть каждый нечётный большой символ', divisibility: 'нечётный' },
]));
