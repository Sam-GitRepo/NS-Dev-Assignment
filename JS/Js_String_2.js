function correctMistake(line, incorrectWord, toBeReplacedWithChar) {
    // write code here
    // return the output , do not use console.log here
  const regex = new RegExp(incorrectWord, "g");
  return line.replace(regex, toBeReplacedWithChar);

}