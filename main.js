//1
const sum = (() => {
    let currentSum = 0;
    return (num)=> currentSum += num;
})();
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
console.log(sum(20))

//2
function addNumber(){
    let currentSum = 0;
    return function(number){
        return currentSum += number;
    }
}

const sum2 = addNumber();
console.log(sum2(3))
console.log(sum2(5))
console.log(sum2(20))
console.log(sum2(30))

//3
let currentSum = 0;
function addNum(){
    return function(number){
        return currentSum += number;
    }
}
const sum3 = addNum();
console.log(sum3(2))
console.log(sum3(5))
console.log(sum3(5))