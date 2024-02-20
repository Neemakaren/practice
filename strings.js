function cut(str, start, end) {
    const newStr = str.substring(start, end)
    return newStr
}


// console.log(cut('awaken', 1, 3))

// const str = '    Hello    World'

// console.log(str.trim());

function truncate(str, target) {
    if (str.length > target){
        return str.slice(0, target - 1) + '...'
    }else return str
}

// console.log(truncate( 'subscribe to me', 5));

function palindrome(str) {
    return str < 0 ? false : str === +toString().split('').reverse().join('')
}

// console.log(palindrome('120'))


// function hammingDistance(str1, str2) {
//     if (str1.length !== str2.length) {
//         throw new Error('strings must be of same length')
//     }
//     let distance = 0;

//     for(let i = 0;i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             distance++
//         }
//     }

//     return distance
// }


function hammingDistance(str1, str2) {

    str1 = str1.toString(2)
    str2 = str2.toString(2)

    if (str1.length < str2.length) {
        while(str1.length !== str2.length) str1 = '0' + str1
    }else {
        while(str1.length !== str2.length) str2 = '0' + str2
    }
    
    let distance = 0;

    for(let i = 0;i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            distance++
        }
    }

    return distance
}

// console.log(hammingDistance('hello', 'hel'));
// console.log(hammingDistance(1, 4));

// let num = 2

// console.log(num.toString(2));

// function isAnagram(str1, str2) {
//     str1 = str1.split('').sort().join('')
//     str2 = str2.split('').sort().join('')
//     return str1 === str2
// }

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1 
    }

    for(const key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }

    return true
}

console.log(isAnagram('anagram', 'nagara'));

console.log(isAnagram())