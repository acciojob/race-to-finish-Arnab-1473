const promises = [
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000))
  ];
  
  // Wait for the first promise to resolve and print its result to the output div
  Promise.any(promises)
    .then((result) => {
      document.getElementById("output").innerHTML = `The first promise resolved with result: ${result}`;
    })
    .catch((error) => {
      document.getElementById("output").innerHTML = `Error: ${error}`;
    });