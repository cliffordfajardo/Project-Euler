/*
Problem 1: Multples of 3 & 5
Info:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

Definitions:
Natural #:  A positive integer (whole #)
Multiple:  A # that can be divided by another # with no remainder. Ex: 4, 6 & 12 are multiples of 2   */


function multiple3or5_to(num) { // explain reason for naming
    var total = 0;
    while (num--) {
        if (num % 3 === 0 || num % 5 === 0) {
            total += num;
        }
    }
    return total;
}
multiple3or5_to(1000); //233168









/************************************* EXPLANATION OF SOLUTION ********************************
1. First, I started off by naming my function & parameter something that explains what I'm trying to do.

2. Since we want to find out the total of a number, at the end, it makes to declare a variable, total, which we will
   use to keep adding the multiples of 3 or 5, and make the inital value 0. I tried to leave the initial value of total
    undefined like this (var total;) , but undefined + a number equals NaN, so we need 0 to start.

3. Create a for-loop with the condition that states, "while my condition (1000--) is true, I'll keep looping".
   Once my loop hits 0 the while loop no longer executes.

4. After the loop has ended


**************************************** WHAT I LEARNED ***************************************
1.  A new use of the decrement operator with a while loop:
    I knew already that a while loop only runs when the condition of it is true. But I totally forgot that the value
    0 has a very special meaning in javascript, it can mean false also. So when my number is decremented all the way to
    down 0 it tells the while loop, "the condition is no longer true". Initially, I thought my (num--) would just
    decrement down infintely and cause an infinete loop producing negative numbers, but that's not the case.

    If I input 1000 as my parameter, my num is immediately reduced to 999, then goes through the loop. That is to say
    the decrement starts immediately. I had thought it started from 1000, but that's not the case. (Test w/for)



2.  The power of the modulo operator:
    Prior to this excercise I hadn't used the modulus for anything really.

    If I had done this without the modulo the code probably would have been longer & messier. Now, I see the power
    that one operator has in a language!


3. The return statement and what it really does:
   Before this excercise, I had cursory knowledge of what the return statement actually does.
   The return statement ends a function execution & immediately returns the value of a particular object specified.
*/