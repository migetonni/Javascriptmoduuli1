'use strict'
 document.querySelector('#kohde')

let names = ['Frank', 'Scott', 'Jasmine', 'Don'];




if (names !== 0)   {
    names.push("Bob")
}




for (let name of names)
{
    console.log(name);


}
function greet() {
    let kysely = prompt("Kerro nimesi")
    document.querySelector('#kohde').innerHTML = "Moikka" + kysely
    console.log(names)
    return


}

greet();