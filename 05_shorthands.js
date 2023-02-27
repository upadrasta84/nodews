
const myage=37
const myname='Karthik'

const myData = {
    age: myage,
    myname, //this is shorthand. since there is a myname variable defined, it will be used as the value
    location: 'Pune'
}

console.log(myData)

const {age, location, rating} = myData //now we can use age and location variables directly without prefixing it with 'myData.'

console.log(age)
console.log(location)
console.log(rating) //since rating is undefined in myData, we will get undefined for this

//we can also have a different variable name for the properties:

const {age:karthiksAge = 40, rating2 = 5} = myData //now we can use age and location variables directly without prefixing it with 'myData.'

console.log(karthiksAge) //the defaults will be used only if no matching value is found. so karthisAge will be 37 and rating2 will be 5
console.log(rating2)

//we can destructure the myData variable in the function arguments list directly like below:

const myFunc = (label, {age, location}) => { //here age and location will automatically be assigned myData.age and myData.location values
    console.log(label, age, location)
}

myFunc('mytest', myData) 
