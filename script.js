// პირადი ინფორმაცია/ ასაკის გამოთვლა

let birth = 1999;
let currentYear = 2025;

let age = currentYear - birth;
console.log(currentYear - birth);

// prompt/ფასდაკლებები
let yourAge = Number(prompt("Enter your age"));
let movieType = prompt("Enter movie type(regular or 3D)");
let timeOfDay = prompt("Enter time of day(matinee or evening)");

let Discount = prompt("any ticket discount?(yes or no)");
let price = 0;
// ასაკი და ფასდაკლება
if (age < 10) {
  price = 5;
} else if (age >= 10 && age < 65) {
  price = 15;
} else {
  price = 10;
}

// 3D
if (movieType === "3D") {
  price += 5;
}
// evening
if (timeOfDay === "evening") {
  price += 5;
}

// ფასდაკლება
if (Discount === "yes") {
  price -= 5;
}
console.log("ბილეთის ფასი თქვენთვის არის:" + price + "ლარი");

// ქვიზის სექცია
let question;
let answer;

let topic = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);
if (topic === "1") {
  question = "რა არის typeof(5)?";
  answer = prompt(question);
  if (answer === "number") {
    alert("სწორია");
  } else {
    alert("სამწუხაროდ ვერ გამოიცანით");
  }
} else if (topic === "2") {
  question = "შეიძლება თუ არა let-ის რედეკლალირება?";
  answer = prompt(question);
  if (answer === "yes") {
    alert("სწორია");
  } else {
    alert("სამწუხაროდ ვერ გამოიცანით");
  }
} else if (topic === "3") {
  question = "რას აბრუნებს console.log(Math.floor(2.1))";
  answer = prompt(question);
  if (answer === "ორი") {
    alert("სწორია");
  } else {
    alert("სამწუხაროდ ვერ გამოიცანით");
  }
}
