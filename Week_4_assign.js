
//Step 1 
//A
console.log('Step 1 A');
var ages= [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);
var subtractionResult = ages[ages.length-1] - ages[0];
console.log(subtractionResult);
//B
console.log('Step 1 B');
ages.push(47);
subtractionResult = ages[ages.length-1] - ages[0];
console.log(ages);
console.log(subtractionResult);
//C
console.log('Step 1 C');
var totalAges = 0;
for (let i= 0; i < ages.length; i++){
   
    totalAges += ages[i];
}
let averageAge = totalAges / ages.length;
console.log(averageAge);

//Step2 
//A
console.log('Step 2 A');
 var totalLetters = 0;
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for (let i= 0; i< names.length; i++){
   
    totalLetters += names[i].length; 
}
let average = totalLetters/ (names.length);
console.log(average);
//B
console.log('Step 2 B');
var concatNames = '';
for (let i= 0; i< names.length; i++){
    concatNames = `${concatNames} ${names[i]}`
}
console.log(concatNames);

//Step 3
//How do you access the last element of any array? using nameOfArrayHere([nameOfArrayHere.length-1] ;
console.log(names[names.length-1])
console.log('Step 3');

//Step 4
//How do you access the first element of any array? with nameOfArrayHere[0];
console.log('Step 4');
console.log(names[0])


//Step 5
console.log('Step 5');
var nameLengths = [];
for (let i= 0; i< names.length; i++){
    let temp = names[i].length;
    nameLengths.push(temp);
}
console.log(nameLengths);

//step 6
console.log('Step 6');
var sumOfNameLengths = 0;
for (let i= 0; i< nameLengths.length; i++){
    sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths);

//Step 7
console.log('Step 7');
function concatItself (word, n){
    let result = '';
    for (let i= 0; i < n; i++){
         result += word;
    }
    return result;
}
console.log(concatItself('hello', 3));

//Step 8 
console.log('Step 8');
function fullName (firstName, lastName){
    return firstName + ' ' + lastName; 
}
console.log(fullName('Jesus','Lozano'))

//Step 9
console.log('Step 9');
let tempArray = [50,50,4];
function ifGreaterthan100(array){
    let totalNums = 0
        for (let i= 0; i< array.length;i++){
            totalNums += array[i];
        }
        if (totalNums > 100){
            return true;
        }
        return false;
}
console.log(ifGreaterthan100(tempArray));
//step 10
console.log('Step 10')

function averageNums(array){
    let totalNums = 0
    for (let i= 0; i< array.length;i++){
        totalNums += array[i];
    }
    return totalNums/(array.length)
}
tempArray = [1,2,3,4,5];
console.log(averageNums(tempArray))

//Step 11 
console.log('Step 11');
function firstGreaterThanAverage(array1, array2){
    let totalNums1 = 0
    for (let i= 0; i< array1.length;i++){
        totalNums1 += array1[i];
    }
    let array1Average = totalNums1/(array1.length);

    let totalNums2 = 0;
    for (let i= 0; i< array2.length;i++){
        totalNums2 += array2[i];
    }
     let array2Average = totalNums2/(array2.length);
     if (array1Average > array2Average){
        return true;
     }
     else {
        return false;
     }
}
let tempArray1 = [7,8,9];
let tempArray2 = [4,5,6];
console.log(firstGreaterThanAverage(tempArray1, tempArray2));

//Step 12
console.log('Step 12');
function willBuyDrink(isHotOutSide, moneyInPocket){
    if ((isHotOutSide == true) && (moneyInPocket > 10.50)){
        return true;
    }
    else{
        return false
    }
}
let hot = true;
let money = 11;
console.log(willBuyDrink(hot,money));

//Step 13
console.log('Step 13')
function takeJacket(temp){
    if (temp < 65){
        return console.log('You should take a jacket it is cold outside');
    }
    else{
        return console.log('The weather is pretty warm no need for a jacket');
    }
}
takeJacket(80);
takeJacket(50);
