// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.


// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.


// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, 
// і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    arr = [];
    addPerson(person) {
        this.arr.push(person);
    }
}

class House {
    flats = [];
    constructor (maxFlat) {
        this.maxFlat = maxFlat;
    }

    addFlat(flat) {
        if (this.flats.length < this.maxFlat) {
            this.flats.push(flat);
        } else {
            console.log(`Sorry, there are a lot of flats. Choose another house.`);
        }
    } 
}


let pers1 = new Person('Daniel', 'male');
let pers2 = new Person('Mary', 'female');
let pers3 = new Person('Malia', 'female');
let pers4 = new Person('Mia', 'female');
let pers5 = new Person('Alex', 'male');
let pers6 = new Person('Nicole', 'female');


let flat1 = new Flat();
let flat2 = new Flat();
let flat3 = new Flat();
let flat4 = new Flat();
let flat5 = new Flat();


flat1.addPerson(pers1);
flat1.addPerson(pers2);

flat2.addPerson(pers3);
flat2.addPerson(pers6);

flat3.addPerson(pers4);

flat4.addPerson(pers5);

flat5.addPerson(pers6);


let house1 = new House(3);
let house2 = new House(3);


house1.addFlat(flat1);

console.log(house1);

house2.addFlat(flat2);
house2.addFlat(flat3);
house2.addFlat(flat4);

console.log(house2);

house2.addFlat(flat5);

console.log(house2);