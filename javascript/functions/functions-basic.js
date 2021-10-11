// functies declareren

function functionName() {
    console.log("Text uitvoer");
}

// functie aanroepen

functionName();


function congratulate(name) {
    console.log("Gefeliciteerd " + name + "!");
}

congratulate();

congratulate("Joop");
congratulate(58);

function area(width, length) {
    return width * length;
}

const outcome = area("aap", 6);
console.log(outcome);

// function returning more parameters
function getAreaSizes(width, length, hight) {
    const temp = "raar";
    const area = width * length;
    const volume = width * length * hight;
    return [area, volume, temp];
}

const parameters = getAreaSizes(7, 5, 2.5);
console.log(parameters);
console.log(parameters[0]);
console.log(parameters[1]);

/*

console.log(
    "😸".charCodeAt(0)
); // prints 55357, WRONG!

console.log(
    "😸".codePointAt(0)
); // prints 128568, correct
*/

// regular vs Arrow functions
const areaAnonimus = function (width, length) {
    return (width * length);
}

// Arrow functions zijn standaard anonieme functies
const areaAnonimus2 = (width, length) => {
    return width * length;
}

const areaAnonimus3 = (width, length) => width * length;

