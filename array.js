let person = {
    name: 'Brock',
    value: 10
}

let arr = ['cherry', 'banana', 'mango', person]

// console.log(arr[3])

arr.push('orange')
arr.pop()
arr.unshift('pepino')
arr.shift()
// console.log(arr)

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

let i = 0;

// while(i < arr.length) {
//     console.log(arr[i])

//     i++
// }

let nums = [1, 2, 3, 4, 5, 6]

let num = [7, 8, 9, 4, 5, 6, 7]

//spread operator
const finalNums = [...nums, ...num]

// console.log(finalNums)

// Rest Operator

// function sum(...numbers) {
//     return numbers
// }

// console.log(sum(nums, num))
// let numbers = [7, 8, 9, 4, 5, 6, 7]

// const sum = numbers.reduce((prev, item) => {
//     return prev + item
// }, 2)

// console.log(sum)

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7,]

// const res = numbers.some((item) => {
//     return item > 3
// })

// console.log(res)

// const newArr = arr.slice(-2)
// console.log(newArr)

//fill
// const d = [2, 3, 4, 5, 6]
// d.fill(1)
// console.log(d)

let input = [56, 90, 23, 45, 32, 1, 5, 78, 100, 76, 100, 45]
let input2 = [10, 5, 10]

function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr))

    uniqueArr.sort((a, b) => {
        return b - a
    });

    if(uniqueArr.length >= 2) {
        return uniqueArr[1]
    }else {
        return -1
    }
}

// console.log(secondLargest(input2))

function secondLargestOptimized(arr) {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for (let i = 0;  i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        }else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
        
    }
    return secondLargest
}

// console.log(secondLargest(input))


