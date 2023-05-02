function handleCallback(callback) {
    try {
      if (typeof callback === 'function') {
        callback();
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("error thrown");
    }
  }