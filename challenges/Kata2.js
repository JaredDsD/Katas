//Title: Alternate capitalization
//Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075


function capitalize(s) {
    let even = s.split('');
    let odd = s.split('');
  
    s.split('').reduce((_, char, i) => {
      if (i % 2 === 0) {
        even[i] = char.toUpperCase();
      } else {
        odd[i] = char.toUpperCase();
      }
    }, []);
  
    return [even.join(''), odd.join('')];
  }