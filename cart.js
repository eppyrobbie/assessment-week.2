///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const summedPrice = cart.reduce((a, c) => {
    return a + c.price
}, 0)

//console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax){
    return (cartTotal +(cartTotal*tax) - couponValue )
}

calcFinalPrice(11, 2, .06)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
age/ages - knowing the demographic you're reaching is important for menus. If there are families, you'll need kids menus etc. 
average income - types of ingredients to use and prices set for menu items.
how often they eat out a month - this is imporant to set expectations and how often they might visit.
male or female - could help determine menu items, ambiance of restaraunt and target audience


// in the assessment review, you said I didn't do this part ^ but I feel like I did. "Explain what data types each property should be and why you chose those data types." is what you said, but I chose the properties (ages, income, eating out, sex) and explained why
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let newCustomer = {
    age: 25, 
    income: 35000,
    eatingOut: 5,
    sex: 'male'
}