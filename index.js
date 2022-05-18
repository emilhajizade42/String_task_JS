function showRepatedSymbols(str) {
  let symbols = [];
  let symbolsCount = [];
  let strArrCopy = [];
  // string to array to use arr methods (eslinde sadece forEach)
  for (let i = 0; i < str.length; i++) {
    strArrCopy.push(str[i]);
  }
  console.log(strArrCopy);
  // if char not in array ? add : else find index and  increase
  strArrCopy.forEach((char) => {
    if (symbols.includes(char)) {
      symbolsCount[symbols.indexOf(char)]++;
    } else {
      symbols.push(char);
      symbolsCount.push(1);
    }
  });
  symbols.forEach((item, i) => {
    console.log(item + " den : " + symbolsCount[i] + " - eded var");
  });
}

showRepatedSymbols("salam  necesiz? %@11");
