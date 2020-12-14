function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.slice(7, value.length - 1);
}

function getFirstChar(value) {
  return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.slice(1, (str.length - 1));
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  const result = `┌${'─'.repeat(width - 2)}┐\n${`│${' '.repeat(width - 2)}│\n`.repeat(height - 2)}└${'─'.repeat(width - 2)}┘\n`;
  return result;
}

function encodeToRot13(str) {
  const part = [...str.split('')];
  const parts = [];
  for (let i = 0; i < part.length; i += 1) {
    if ((part[i].charCodeAt() > 96 && part[i].charCodeAt() < 123)
    || (part[i].charCodeAt() > 64 && part[i].charCodeAt() < 91)) {
      if ((part[i].charCodeAt() > 109 && part[i].charCodeAt() < 123)
      || (part[i].charCodeAt() > 77 && part[i].charCodeAt() < 91)) {
        parts.push(String.fromCharCode(part[i].charCodeAt() - 13));
      } else {
        parts.push(String.fromCharCode(part[i].charCodeAt() + 13));
      }
    } else {
      parts.push(part[i]);
    }
  }
  return parts.join('');
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
  let cardvalue;
  let card;
  let maste;
  let valuemaste;

  if (value.length > 2) {
    card = '10';
    valuemaste = value.charAt(2);
  } else {
    card = value.charAt(0);
    valuemaste = value.charAt(1);
  }

  switch (card) {
    case 'A': cardvalue = 0; break;
    case '2': cardvalue = 1; break;
    case '3': cardvalue = 2; break;
    case '4': cardvalue = 3; break;
    case '5': cardvalue = 4; break;
    case '6': cardvalue = 5; break;
    case '7': cardvalue = 6; break;
    case '8': cardvalue = 7; break;
    case '9': cardvalue = 8; break;
    case '10': cardvalue = 9; break;
    case 'J': cardvalue = 10; break;
    case 'Q': cardvalue = 11; break;
    case 'K': cardvalue = 12; break;
    default: break;
  }

  switch (valuemaste) {
    case '♣': maste = 0; break;
    case '♦': maste = 1; break;
    case '♥': maste = 2; break;
    case '♠': maste = 3; break;
    default: break;
  }

  return (13 * maste) + cardvalue;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
