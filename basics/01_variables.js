const accountID=456789
let name="amar"
var city="lucknow"
let email="amarg@gmail.com"
var password="1234"
var state; 
// now above state line. let we decalare a variables without any value .its form memory and and result is undefined

console.log(accountID);
console.table({accountID,name,city,email,password,state})
/*
do not use var for variable assign beacuse of issue in block space  and functional scope 

*/

// now i declare variable after calling so its shows error and in this case its send it in temporal dead zone
// let state;