// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.


// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина 
// у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу 
// Людина для виведення інформації про власника


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
}

class Automobile {
    person;

    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    getInfo(person) {
        if (person.age >= 18) {
            console.log(`Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nNumber: ${this.number}`);
            person.getInfo();
        } else {
            console.log(`Sorry, the age of this person is less than 18`);
        }
    }
}


let pers1 = new Person('Malia', 18);
let pers2 = new Person('Tom', 21);
let pers3 = new Person('Kim', 15);

let car1 = new Automobile('BMW', 'X5', 2022, 'AK2003AK');
let car2 = new Automobile('Porsche', 'Panamera', 2021, 'AA1111AA');
let car3 = new Automobile('Honda', 'Accord', 2020, 'BH1718HH');

car1.getInfo(pers1);
car2.getInfo(pers2);
car3.getInfo(pers3);