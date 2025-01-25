function pattern(patternChar, numlines) {
  str = "";
  for (let i = 0; i < numlines; i++) {
    str = str + " " + patternChar;
    console.log(str);
  }
}
pattern("#", 4);
