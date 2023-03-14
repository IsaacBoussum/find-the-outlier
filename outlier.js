let thisArr = [2, 4, 5, 6, 8, 10]

function findOutlier(arr) {
    let oddCount = 0
    let evenCount = 0
    let lastOdd = ""
    let lastEven = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            evenCount++
            lastEven = arr[i]
        } else {
            oddCount++
            lastOdd = arr[i]
        }

        if (evenCount > 1 && oddCount === 1){
            return lastOdd
        } else if(oddCount > 1 && evenCount === 1){
            return lastEven
        }
    }
}

console.log(findOutlier(thisArr))