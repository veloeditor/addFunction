//arrow function to add two numbers together

const addNumbers = (x, y) => {
    console.log(x + y)
}

addNumbers(4, 7)

const multFunction = (x, y) => {
    console.log(x * y)
}

multFunction(4, 8)
    
    //Create a second function called "calculate" that takes three arguments: two numbers and a functions

    const calculate = (x, y, funky) => {
        funky(x, y) 
    }

    calculate(30, 4, multFunction)

    //Here the reason we add a function inside is to allow us to execute different type of math functions like add, subtract, etc. 
