import { ProbniyKyrs } from './ProbniyKyrs.js';

const course1 = new ProbniyKyrs("Базовые варды на саппах", 50, true, 7);
const course2 = new ProbniyKyrs("Полный курс по Dota 2", 100, true, 5);

course1.show();
course2.show();

const trial = ProbniyKyrs.clone(course2);
console.log("Копия курса:");
trial.show();

console.log("course2 === trial ?", course2 === trial);

course1.delete();
course2.delete();
