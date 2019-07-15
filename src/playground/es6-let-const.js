var nameVar = "Eugene"
nameVar = "Andrew"
console.log('nameVar', nameVar)

const Merry = "Jovial"
//Merry = "Wreak"
console.log(Merry)

const FullName = "Eugene Ermolov"

const FirstName = (x) => {
    return x.split(" ")[0]
}

const LastName = x => x.split(" ")[1]

console.log("First name ", FirstName(FullName))  
console.log("Last name ", LastName(FullName) )