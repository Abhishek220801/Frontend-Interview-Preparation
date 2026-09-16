function add(a) {
    return function (b) {
        if(b) return add(a+b)  // if b has no params conclude ans
        return a;              // keep going if more params are there
    }
}

console.log(add(5)(2)(9)())