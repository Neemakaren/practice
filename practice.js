const arr = [1, 2, 3, 4, 5 ]

// const forEachResult = arr.forEach((a) => {
//     return a * 2
// })
arr.forEach((a, i) => {
    arr[i] = a + 1
})
// console.log(arr)
const mapResult = arr.map((a) => {
    return a * 2
})

// console.log(forEachResult, mapResult, arr)
// console.log(mapResult, arr)

// document.getElementById('products').addEventListener('click', (event) => {
//     console.log(event)

//     if (event.target.tagName === 'LI') {
//         window.location.href += '#' + event.target.id
//     }  
// })

let array = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13],
    [14, 15,[16, 17, 18]]
]

let flattened = [].concat(...array)
// console.log(flattened)

// console.log(array.flat())

function customFlat(arr, depth = 1) {
    let result = []
    array.forEach((ar) => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...customFlat(ar, depth - 1))
        }else result.push(ar)
    })
    return result
}
// console.log(customFlat(array, 2))

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
           console.log(i); 
        }, i * 1000);
    }
}

a()