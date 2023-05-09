function arrayProperties(arr1, arr2) {
    // Create a new array by concatenating arr2 followed by arr1
    const arr3 = arr2.concat(arr1);
  
    // Push arr2 to arr3 and print arr3 to the console
    arr3.push(arr2);
    console.log(arr3);
  
    // Pop the last item from arr3
    const poppedItem = arr3.pop();
  
    // Reverse arr3 and print it to the console
    const reversedArr3 = arr3.reverse();
    console.log(reversedArr3);
  
    // Find the last index of "orange" in arr3 and print it to the console
    const lastIndex = arr3.lastIndexOf("orange");
    console.log(lastIndex);
  
    // Slice the first three items of arr3 and print the length to the console
    const slicedArr3 = arr3.slice(0, 3);
    console.log(slicedArr3.length);
  
    // Join slicedArr3 with commas and print it to the console
    const joinedArr3 = slicedArr3.join(",");
    console.log(joinedArr3);
  }
  
  