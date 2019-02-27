var list1 = [1,2,3,4,5];

var sum = list1.reduce(
        (accumulator,currentValue) => accumulator + currentValue
    );
console.log(sum);