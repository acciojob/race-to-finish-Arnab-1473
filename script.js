window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4+1),Math.random() * 4000+1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4+1),Math.random() * 4000+1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4+1),Math.random() * 4000+1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4+1),Math.random() * 4000+1000)),
    new Promise((resolve) => setTimeout(() => resolve(Math.random() * 4+1),Math.random() * 4000+1000)),
];

Promise.any(promises).then(result => {
    document.getElementById("output").innerHTML = `The first promise resolved with the result : ${result}`;
});