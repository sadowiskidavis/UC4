import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog:Dog = new Dog("sales",10)
const myOwl:Owl = new Owl("sapeca",5)
const myCrododile:Crocodile = new Crocodile("eminem", 100)
console.log(myDog.name)
console.log(myDog.weight)

console.log(myOwl.name)
console.log(myOwl.weight)

myOwl.eat()
myOwl.fly()

console.log(myCrododile.name)
console.log(myCrododile.weight)

myCrododile.eat()
myCrododile.swim()

const array = [myCrododile,myDog,myOwl]
for(let i = 0; i < array.length; i++){
    array[i].eat()
}




