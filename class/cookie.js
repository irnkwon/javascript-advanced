"use strict";

// Define the Cookie class
class Cookie {
    constructor(name, flavor) {
        this.name = name; // Instance property
        this.flavor = flavor; // Instance property
    }

    // Instance method
    describe() {
        return `This is a ${this.flavor} cookie named ${this.name}.`;
    }

    // Static property
    static bakery = "Cookie Co.";

    // Static method
    static getBakery() {
        return `Cookies are baked at ${this.bakery}.`;
    }
}

// Creating instances of the Cookie class
const chocolateChip = new Cookie("Chocolate Chip", "chocolatey");
const oatmealRaisin = new Cookie("Oatmeal Raisin", "oatmeal and raisin");

// Accessing instance properties and invoking instance methods
console.log(chocolateChip.name); // Chocolate Chip
console.log(oatmealRaisin.flavor); // oatmeal and raisin
console.log(chocolateChip.describe()); // This is a chocolatey cookie named Chocolate Chip.

// Accessing static property and invoking static method
console.log(Cookie.bakery); // Cookie Co.
console.log(Cookie.getBakery()); // Cookies are baked at Cookie Co.