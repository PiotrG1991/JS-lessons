const data = [
    {
        name: "pawel",
        city: "krakow",
        age: 38,
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: 'dominika',
        city: 'wiskitki',
        age: 26,
        hobbies: ['python', 'js', 'games'],

    },
    {
        name: 'robert',
        city: 'warszawa',
        age: 22,
        hobbies: ['django', 'python', 'games']
    },
    {
        name: 'pamela',
        city: 'warszawa',
        age: 27,
        hobbies: ['travel', 'books', 'sport']
    },
    {
        name: "yuki",
        city: "warsaw",
        age: 27,
        hobbies: ["language study", "fishing", "books"]
    },
    {
        name: "blazej",
        city: "szczecin",
        age: 35,
        hobbies: ["games", "football", "js"]
    },
    {
        name: "michal",
        city: "krosniewice",
        age: 31,
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: "wiktor",
        city: "lodz",
        age: 20,
        hobbies: ["python", 'work-out', 'html']
    },
    {
        name: "adam",
        city: "poznan",
        age: 24,
        hobby: ["squash", "fantasy books", "video games"]
    },
    {
        name: "marcin",
        city: "warszawa",
        age: 28,
        hobbies: ["BJJ", "motorcycle", "gym"]
    },
    {

        name: 'daniel',
        city: 'wroclaw',
        age: 24,
        hobbies: ['js', 'python', 'Bible']
    },
    {
        name: "zofia",
        city: "warszawa",
        age: 27,
        hobbies: ["cars", "flowers", "drugs"]
    },
    {
        name: "piotr",
        city: "suchowola",
        age: 32,
        hobbies: ["python", "travels", "games"]
    },
    {
        name: "jakub",
        city: "warsaw",
        age: 34,
        hobbies: ["bjj", "dogs", "kids"]
    },
    {
        name: 'bartosz',
        city: 'siedlce',
        age: 20,
        hobbies: ['money', 'cars', 'games'],
    }
];

//console.log(data.length);
//console.log(data[0])
//console.log(data.at(-1))

//console.log(data[0].name);
//console.log(data[0]["name"]);

//const key = "name";
//console.log(data[0][key]);

//console.log(data[0].hobbies[2]);
//console.log(data[0].hobbies.at(-1));

//Policz średnią wieku:

//function getAvgAge(people){
//    let sum = 0;

//    for (let i = 0; i < people.length; i++){
//        sum += people[i].age;
//    }
//    return sum / people.length;
//}

//function getAvgAge(people){
//    return people
//        .map((person) => person.age)
//        .reduce((acc, ce) => acc + ce) / people.length//
//}

//const getAvgAge = (people) => people
//        .map((person) => person.age)
//        .reduce((acc, ce) => acc + ce) / people.length

//const getAvgAge = (people) => people
//        .reduce((acc, ce) => acc + ce.age, 0) / people.length


//const result = getAvgAge(data);
//console.log(result)

// policz średnią ludzi spoza warszawy

//function getAvgAge2(items){
//    let sum = 0;
//    let counter = 0;
//
//    for (const item of items){
//        if (item.city !== 'warszawa'){
//            sum += item.age;
//            counter++;
//        }
//    }
//    return sum/counter;
//}
//

//const getAvgAge2 = (items) => {
//    const people = items.filter((item) => item.city !== 'warszawa');
//    return people
//        .map((person) => person.age)
//        .reduce((acc, ce) => acc + ce) / people.length;
//}

//const result = getAvgAge2(data)
//console.log(result)


// sprawdz czy istnieje chociaż jeden stary człowiek < 35 lat
//function isOldPeople(items){
//    for (const item of items){
//        if (item.age > 35){
//            return true;
//        }
//    }
//    return false;
//}

//const isOldPeople = (items) =>{
//    const people = items.filter((item) => item.age > 35);
 //   return people
//        .map((person) => person.age);
//}

//const result = isOldPeople(data);
//console.log(result);


// czy wszyscy to młodzi ludzie, 40 < lat

//const isYangPeople = (items) => {
//    for (const item of items){
//        if (item.age >= 40){
//            return true
 //       }
//    }
//    return false
//}
//
//console.log(isYangPeople(data));

//const isYangPeople = (items) => items.every((item) => item.age <= 40);
//const isYangPeople = (items) => !items.some((item) => item.age > 40);
//console.log(isYangPeople(data));

// policz ile jest niepowtarzalnych hobbies

//const countUniqueHobbies = function (people) {
//    const hobbies = [];
//
//    for (const person of people){
//        for (const hobby of person.hobbies ?? []){
//            if (!hobbies.includes(hobby)){
//                hobbies.push(hobby);
//            }
//        }
//    }
//    return hobbies.length;
//};

//const countUniqueHobbies =(people) =>
    //new Set(people.flatMap((person) => person.hobbies ?? [])).size;

//console.log(countUniqueHobbies(data));

// zwróć tablicę imion osób z warszawy

//const getNames = function (items){
//    const names = [];
//    for (let i = 0; i<items.length; i++){
//        if (items[i].city.toLowerCase() === "warszawa"){
//            names.push(items[i].name);
//        }
//    }
//    return names
//}

//

console.log(getNames(data));