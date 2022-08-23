"use strict";

function isWeekend(date) {
  const dayOfWeek = new Date(date).getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
};

class Person {
  constructor(firstName, lastName, age, birthDayDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = new Date(birthDayDate);
  }
  showCelebrate() {
    console.log("Happy Birthday, let’s celebrate");
  }
};
  
class Employee extends Person {
  #salary = 0;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    return this.#salary * 12;
  }
  checkCelebrate() {
    let nowYear = new Date().getFullYear();
    this.birthDayDate.setFullYear(nowYear);
    let birthDayInNowYear = this.birthDayDate;
  
    if (isWeekend(birthDayInNowYear) === true) {
      console.log(super.showCelebrate());
    } else {
      console.log("Happy Birthday, but I need to work");
    }
  }
};

const person = new Person("Rita", "Vinokurova", 28, "1994-05-28");
console.log (person);
person.showCelebrate();
  
const management = new Employee("Anna", "Karenina", 31, "1991-02-07", 15000, "accountant");
console.log(management);
console.log(`Аccountant's annual salary: ` + management.getYearSalary());
management.checkCelebrate();