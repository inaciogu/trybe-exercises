function higherNumberIndex(numbers) {
    let higher = 0;
    for (let index in numbers) {
        if (numbers[higher] < numbers[index]) {
            higher = index;
        }
    }
    return higher;
 }

console.log(higherNumberIndex([2, 3, 6, 7, 10, 1]));