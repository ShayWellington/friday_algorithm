/*
1)
Take a string from the user as input and store it in a variable
(givenString).
2)
Reverse the given string and store it in another variable
(reversedString).
3)
Check if the above two strings are equivalent. If they are equivalent
display a message “Given string is a palindrome” otherwise display
a message “Given strings are not palindrome. You may also display
the values of both the strings givenString and reversedString.
*/

console.log('Algorithm 1')

var givenString = prompt('Please enter a word');

function reversedString (givenString) {
  return givenString.split('').reverse().join('')
}

document.getElementById('result').innerHTML = reversedString(givenString) + ' is the reverse of ' + givenString;

if (givenString === reversedString(givenString)) {
  document.getElementbyId('result').innerHTML = reversedString(givenString) + ' is a palendrom of ' + givenString;
} else {
  document.getElementById('result').innerHTML = reversedString(givenString) + ' is not a palendrome of ' + givenString;
});

/*
1)
Take a number from the user as input and store it in a variable (x).
2)
Check if the given number is even number or odd number and
display the relevant message to the user as output.
*/

console.log('Algorithm 2')

var x = parseInt(prompt('Please enter a number'));
console.log(x%2);

if (x%2) === 0) {
 document.getElementById('result').innerHTML = x + ' is an even number';
} else {
  document.getElementById('result').innerHTML = x + ' is an odd number';
});



/*
1)
Store the following sentence in a variable (givenSentence).
“
The good news is that everyone makes mistakes. All of the mistakes you make,
have been made by others who started off just like you.”
2)
Replace the word mistakes with bugs and store it in a variable (replacedSentence).
3)
Output the replacedSentence.
*/

console.log('Algorithm 3')

var givenSentence = 'The good news is that everyone makes mistakes. All of the mistakes you make,
  have been made by others who started off just like you.';

var replacedSentence = givenSentence.replace('mistakes','bugs');

document.getElementById('result').innerHTML = replacedSentence;

/*
1)
Create 4 buttons for add to, delete from, search in and sort an array.
2)
Create a text box to read a string value from the user.
3)
Store your favourite foods or cars or dogs in an array (you can
one choose from foods, cars and dogs). The array must contain 3
elements initially.
Example
: var fruits = {“Apple”, “Orange”, “Kiwi”};
4)
Write reusable code for each operation mentioned in 1) to add a
new element to the array, to delete an element from the array, to
search a given element in the array and to sort the elements in
descending order and display it to the user. For all the operations
provide meaningful messages whether succeeded or failed, and
what is the output if succeeded and reason why it failed if known
*/

console.log('Alogorith 4')

var dogs = ['retriever', 'collie', 'bermese'];
