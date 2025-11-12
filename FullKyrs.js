export class FullKyrs {
    #title;
    #price;
    #active;

    constructor(title, price, active) {
        this.#title = title;
        this.#price = price;
        this.#active = active;
    }

    get title() { return this.#title; }
    get price() { return this.#price; }
    get active() { return this.#active; }

    set title(value) { this.#title = value; }

    set price(value) {
        if (value < 0) {
            console.error("Цена не может быть отрицательной");
            return;
        }
        this.#price = value;
    }

    set active(value) { this.#active = value; }

    show() {
        console.log(`Курс: ${this.#title}, Цена: ${this.#price}, Активен: ${this.#active}`);
    }

    delete() {
        this.#title = null;
        this.#price = null;
        this.#active = null;
    }

    copy() {
        return this;
    }

   #discount(percent) {
    this.#price = this.#price - (this.#price * (percent / 100));
    }

    static clone(course) {
        return new FullKyrs(course.title, course.price, course.active);
    }
}
