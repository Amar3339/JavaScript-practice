// how memory works in js
// primitive type === stack(copy of values,no original value change)

// non-primitive type ===heap (memory refrence ,if you change original value changes)
let a="amar"
let b =a
 b="hello"
console.log(b);/* here copy is change not original value */
console.log(a);


let userone={

    name:"amar",
    email:"amar@gmail.com"

}
usertwo=userone
usertwo.email="hello@gmail.com"
console.log(userone);
console.log(usertwo); /* change occur in main memory */


