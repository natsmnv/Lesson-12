// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, 
// але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо 
// метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. 
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
// Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє 
// відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, 
// а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , 
// то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) 
// і показати використання цих методів.

class Student {
    yearNow = 2023;
    visit = new Array(25);
    pres = 0;
    abs = 0;
    constructor(firstName, lastName, yearOfBirth, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.grades = grades;
    }

    getAge() {
        return this.yearNow - this.yearOfBirth;
    }

    getAverageOfGrades() {
        let sum = this.grades.reduce((accum, currentValue) => {
            return accum + currentValue;
        }, 0);

        return sum / this.grades.length;
    }

    present() {
        if (this.visit.length <= 25) {
            for (let i = 0; i < this.visit.length; i++) {
                if (this.visit[i] === undefined) {
                    this.visit[i] = true;
                    this.pres++;
                    break;
                }
            }
        }
    }

    absent() {
        if (this.visit.length <= 25) {
            for (let i = 0; i < this.visit.length; i++) {
                if (this.visit[i] === undefined) {
                    this.visit[i] = false;
                    this.abs++;
                    break;
                }
            }
        }
    }

    summary(obj) {
        let presence = this.pres / (this.pres + this.abs);
        
        if (obj.getAverageOfGrades() > 90 && presence > 0.9) {
            console.log(`Well done!`);
        } else if (obj.getAverageOfGrades() > 90 || presence > 0.9) {
            console.log(`Good, but could be better!`);
        } else {
            console.log(`Rediska!`);
        }
    }
}


let student1 = new Student('Malia', 'Nickolson', 2006, [85, 90, 92, 98, 90]);
console.log(student1.getAge());
console.log(student1.getAverageOfGrades());

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1.visit);
student1.absent();
console.log(student1.visit);

student1.summary(student1);


let student2 = new Student('Elena', 'Usova', 1999, [72, 90, 85, 62, 78, 90]);
console.log(student2.getAge());
console.log(student2.getAverageOfGrades());

student2.present();
student2.absent();
student2.present();
student2.present();
student2.absent();
console.log(student2.visit);

student2.summary(student2);


let student3 = new Student('Polina', 'Parfileva', 2002, [90, 95, 92, 97]);
console.log(student3.getAge());
console.log(student3.getAverageOfGrades());

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
console.log(student3.visit);

student3.summary(student3);