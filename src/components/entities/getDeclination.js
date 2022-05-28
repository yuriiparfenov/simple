export default function getDeclination(word, caseOfWord) {
  let newWord = ``;

  if (word[word.length - 1] === `а`) {
    switch (caseOfWord) {
      case `Родительный`:
        newWord = word.slice(0, (word.length - 1)) + `ы`;
        break;
      case `Дательный`:
        newWord = word.slice(0, (word.length - 1)) + `е`;
        break;
      case `Винительный`:
        newWord = word.slice(0, (word.length - 1)) + `у`;
        break;
      case `Творительный`:
        newWord = word.slice(0, (word.length - 1)) + `ой`;
        break;
      case `Предложный`:
        newWord = `о/об ` + word.slice(0, (word.length - 1)) + `е`;
        break;
      default: return word;
    }
  }

  if (word[word.length - 1] === `я`) {
    switch (caseOfWord) {
      case `Родительный`:
        newWord = word.slice(0, (word.length - 1)) + `и`;
        break;
      case `Дательный`:
        newWord = word.slice(0, (word.length - 1)) + `е`;
        break;
      case `Винительный`:
        newWord = word.slice(0, (word.length - 1)) + `ю`;
        break;
      case `Творительный`:
        newWord = word.slice(0, (word.length - 1)) + `ей`;
        break;
      case `Предложный`:
        newWord = `о/об ` + word.slice(0, (word.length - 1)) + `е`;
        break;
      default: return word;
    }
  }

  if (word[word.length - 1] === `о`) {
    switch (caseOfWord) {
      case `Родительный`:
        newWord = word.slice(0, (word.length - 1)) + `а`;
        break;
      case `Дательный`:
        newWord = word.slice(0, (word.length - 1)) + `у`;
        break;
      case `Винительный`:
        newWord = word.slice(0, (word.length - 1)) + `о`;
        break;
      case `Творительный`:
        newWord = word.slice(0, (word.length - 1)) + `ом`;
        break;
      case `Предложный`:
        newWord = `о/об ` + word.slice(0, (word.length - 1)) + `е`;
        break;
      default: return word;
    }
  }

  if (word[word.length - 1] === `е`) {
    switch (caseOfWord) {
      case `Родительный`:
        newWord = word.slice(0, (word.length - 1)) + `я`;
        break;
      case `Дательный`:
        newWord = word.slice(0, (word.length - 1)) + `ю`;
        break;
      case `Винительный`:
        newWord = word.slice(0, (word.length - 1)) + `е`;
        break;
      case `Творительный`:
        newWord = word.slice(0, (word.length - 1)) + `ем`;
        break;
      case `Предложный`:
        newWord = `о/об ` + word.slice(0, (word.length - 1)) + `и`;
        break;
      default: return word;
    }
  }

  if (word[word.length - 1] === `ь`) {
    switch (caseOfWord) {
      case `Родительный`:
        newWord = word.slice(0, (word.length - 1)) + `и`;
        break;
      case `Дательный`:
        newWord = word.slice(0, (word.length - 1)) + `и`;
        break;
      case `Винительный`:
        newWord = word.slice(0, (word.length - 1)) + `ь`;
        break;
      case `Творительный`:
        newWord = word.slice(0, (word.length - 1)) + `ю`;
        break;
      case `Предложный`:
        newWord = `о/об ` + word.slice(0, (word.length - 1)) + `и`;
        break;
      default: return word;
    }
  }
  return newWord;
};


