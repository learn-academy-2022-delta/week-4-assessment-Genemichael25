// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('oneLess', () => {
    it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(oneLess(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(oneLess(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))})
  })
        
// ReferenceError: oneLess is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare the function oneLess
// Set parameter as array
// Use .shift to remove the first item in the array
// Need to shuffle remaining elements

// Realized slice would work better as .shift would give me the value it was removing
// Had to research how to shuffle the array , found the Fisher-Yates shuffle algorithm


const oneLess = (array) => {
   let newArray = array.slice(1)
    for(let i = newArray.length - 1; i > 0; i--){
        let randomIndex= Math.floor(Math.random() * (i + 1))
        let temp = newArray[i]
        newArray[i] = newArray[randomIndex]
        newArray[randomIndex] = temp;
            } 
        return newArray
}
// console.log(oneLess(colors1))
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe ("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]  
    expect(minMax(nums1)).toEqual([-8, 90]) 
    expect(minMax(nums2)).toEqual([5, 109]) 
    })
})

// // ReferenceError: minMax is not defined

// // b) Create the function that makes the test pass.

// Pseudocode:
// Declare the function minMax
// Set parameter as array
// Use Math.min and .max and set as new arrays
    // Will need the spread operator to use that method on the array
// Join the arrays by using .concat 

const minMax = (array) => {
   let min = [Math.min(...array)]
   let max = [Math.max(...array)]
      return min.concat(max)
    
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("combo", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1] 
    expect(combo(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]) 
    })
})

// // ReferenceError: combo is not defined

// // b) Create the function that makes the test pass.

// Pseudocode:
// Declare the function combo
// Set the parameters as array1 and array2
// Use .concat to join the arrays
    // Will include duplicates
// Use .filter to remove duplicate values

// Found new Set method when researching how to filter for duplicates

// const combo = (array1, array2) => {
//     let comboArray = array1.concat(array2)
//         return comboArray.filter((value,index) => 
                // comboArray.indexOf(value) === index)
// }

// console.log(combo(testArray1,testArray2))

const combo = (array1, array2) => {
    return [...new Set([...array1, ...array2])]

}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total