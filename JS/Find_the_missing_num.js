function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    const expectedSum = ((upperBound + lowerBound) * (upperBound - lowerBound + 1)) / 2;
    let actualSum = 0;
    
    for (let i = 0; i < arrayOfIntegers.length; i++) {
      actualSum += arrayOfIntegers[i];
    }
    
    const missingNumber = expectedSum - actualSum;
    console.log(missingNumber);
  }