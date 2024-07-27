// Task 11_1


function delayedFunction(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

delayedFunction("Arbitrary text", 2000);