// type narrowing
function format(input: string | number) {
    if(typeof input === "string") {
        return input.toUpperCase(); // narrowed 'string'
    }
    return input.toFixed(2); // narrowed 'number'
}

// console.log(format("Gokul"));
// console.log(format(12.2345));

// type guard using in
interface Bird { fly: () => void, species: string }
interface Fish { swim: () => void }

function move(animal: Bird | Fish) {
    if("fly" in animal) {
        animal.fly(); // narrowed to 'Bird'
    } else {
        animal.swim(); // narrowed to 'Fish'
    }
}

// custom type guard
function isValidBird(bird: Bird): bird is Bird {
    return bird && typeof bird.species === "string";
}

const b1 = {fly: () => {}, species: "aerial"}
if(isValidBird(b1)) {
    console.log(b1.species); // narrowed to 'Bird'
}