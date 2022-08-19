// Write a function that will take a number and will check the number is positive or negative.


// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(num){
    let count=0;
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count==2){
        console.log(num, " is a prime number");
    }
    else{
        console.log(num, " is not a prime number");
    }
}

isPrime(2);
isPrime(9);

// Write a function named findArea() that will take base and height of a triangle and will return the area of triangle.

function findArea(base, height){
    const area = 0.5 * base * height;
    return area;
}

const areaOfTriangle = findArea(9, 10);
console.log(areaOfTriangle);

// Write a function named findArea() that will take height and width of a rectangle and will return the area of rectangle.


function findArea(height, width) {
    const area = height * width;
    return area;
}

const areaOfRectangle = findArea(11, 12);
console.log(areaOfRectangle);

// Write a function which will take an integer and will return the square of a number.

function squareNum(num){
    return num * num;
}
console.log(squareNum(6));

// Write a function that will taka an array and calculate the sum of odd numbers greater than 10 and less than 50.
function oddNumber(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if((arr[i] % 2 == 1) && (arr[i] > 10 && arr[i] < 50)){
            sum += arr[i];
        }
    }
    return sum;
}

const values = [9, 67, 13, 11, 40, 90, 29];
console.log(oddNumber(values))