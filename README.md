# Homework-3 (Password Generator)
## Links

[Repository](https://github.com/Aladd616/Password-Generator-ALL)

[Pages]( https://aladd616.github.io/Password-Generator-ALL/)

## Description

A webpage that shows a prompt and a series of confirm statements thats determine the parameters od a string labeled password that is produced when the generate password button is clicked

the length of this password is determined by the value charnum put in to the first prompt statement

a series of empty arrays, lowercase, uppercase, numbers, and special, are initialized in order to be replaced with arrays of characters if and when the confirms are clicked as true

these arrays, still empty or arrays of characters are combined using the concatenate operator to fill the empty array selection

this array is then randomly indexed to produce an array, "passwordarray", that is full of random characters from the selection array that is the length charnum

this array is then turned into a string using the join operator

this passwor din then printed to the webpage when the "generate password" button is clicked.