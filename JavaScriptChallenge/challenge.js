/*

Congratulations you have completed the Javascript module :sunglasses:. 

You have covered some of the core fundamentals of Javascript and also how to start thinking about breaking problems down programmatically. 

To give you a head start with this thinking and to get you to practice writing Javascript we have some challenges below we would like you to complete. 


1. We would like this project to be pushed to GitHub.
2. We will review the challenge when the course starts.
3. If you get stuck, thats okay. Reach out to a coach on Slack.

---

## :computer: Challenges 

1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

```js
isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true
```

2. Write a function that takes a number of days and converts it into an age.

```js
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18
```

3. Write a function that takes three numbers and returns the largest of the three numbers.

```js
getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6
```

4. Write a function that takes an array of names and returns the last name from the array of names.

```js
getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
getLastName(["Ash","Stu"]); // returns "Stu"
```


5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

```js
allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false
```

*/


function isNumberPositive(number) {
if (number > 0 ) {
    console.log('True') 
} else if (number < 0) { 
    console.log('False') 
} else {
    console.log('unrecogniosed command')
} 

}


function convertDaysToAge(days) {

    let Age = Math.round(days/365); // decided to round up the age to the nearest integer to avoid the float output
    console.log(Age); 
}


function getLargestNumber(a,b,c) {

    if (a > (b && c)) {

        console.log(a);

    } else if (b > (a && c)) {

        console.log(b);

    } else if (c > (a && b)) {

        console.log(c)
    } else {
        console.log('none of these numbers is the greatest')
    }

}


function getLastName(array) {
const lastName = array[array.length - 1] // -1 as arrays have first index value of 0 


for (i = 0; i < array.length; i++) {
if (i = lastName) {
    console.log(i);
} else {
    
}
}

}


function allNumbersPositive(numbers) {

    for(i = 0; i < numbers.length; i++) {

        
        if (numbers[i] > 0 && i == [numbers.length -1]){
            console.log(true)
           
        } else if (numbers[i] < 0) {
            
            console.log(false)
            break;

        } else {

        }

       
    }

   
};

// implementation

isNumberPositive(1);
convertDaysToAge(23721)
getLargestNumber(34,21,1)
getLastName(['Tim', 'Alex', 'Pete', 'Luke']);
allNumbersPositive([1,2,3,4,5,6,7]);







