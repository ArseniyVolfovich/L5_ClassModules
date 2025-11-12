import { FullKyrs } from './FullKyrs.js';

export class ProbniyKyrs extends FullKyrs {
    #days;

    constructor(title, price, active, days) {
        super(title, price, active);
        this.#days = days;
    }

    get days() { 
        return this.#days; 
    }
    set days(value) { 
        this.#days = value; 
    }

    show() {
        console.log(`Пробный курс: ${this.title}, Цена: ${this.price}, Активен: ${this.active}, Длительность: ${this.#days} дней`);
    }

    delete() {
        super.delete();
        this.#days = null;
    }

    copy() {
        return this;
    }

    static clone(trial) {
        return new ProbniyKyrs(trial.title, trial.price, trial.active, trial.days);
    }
}
