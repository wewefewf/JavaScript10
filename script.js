let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5 
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7 
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4 
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]


let p1 = prompt('Какая компания?').trim().toLowerCase();
let filteredCars = cars.filter((item) => item.company.toLowerCase() === p1);

let which_car = prompt('Какая машина? У нас есть ' + filteredCars.reduce((a,b) => a.model + ' ' + b.model));
let findedCar = filteredCars.find(car => car.model === which_car)

let toBuy = confirm(JSON.stringify(findedCar))

if (toBuy) {
    let price = prompt('Надо заплатить' + findedCar.price)
}