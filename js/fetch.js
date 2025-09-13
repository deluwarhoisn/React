const person = {
    name:"hero alom",
    age:40,
    friends:["bd","cn","rahan"],
    family:{
        fathername:"kolimulla",
        mothername:"jorina"
    }
}

const keys = Object.keys(person);
const values = Object.values(person);

const products = [
 {name:"rwdmi",brand:"xiomi",price:400,color:"black"},
 {name:"walton",brand:"walton",price:400,color:"black"},
 {name:"vivo",brand:"india",price:400,color:"black"},
 {name:"iphon",brand:"apple",price:400,color:"black"},
 {name:"sympony",brand:"bangladesh",price:400,color:"black"},

]

const newData ={
  name:"walton",
  brand:"walton",
  price:3000,
  color:"green"
}

const newArray = [...products,newData]
console.log(newArray)