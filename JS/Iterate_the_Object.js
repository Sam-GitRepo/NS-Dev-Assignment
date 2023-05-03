function solve(obj) {
    // Iterate through the values using for...of loop
    for (let value of Object.values(obj)) {
      console.log(value);
    }
    
    // Iterate through the key-value pairs using for...in loop
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }