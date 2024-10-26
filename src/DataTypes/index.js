// Primitive Types
const primitiveTypes = [
    {
        "type": "string",
        "description": "A sequence of characters used to represent text",
        "example": `let name = "Alice";
let greeting = 'Hello, world!';`
    },
    {
        "type": "number",
        "description": "Represents both integer and floating-point numbers",
        "example": `let age = 25;
let price = 19.99;`
    },
    {
        "type": "boolean",
        "description": "Represents a logical entity and can be true or false",
        "example": `let isAdult = true;
let hasLicense = false;`
    },
    {
        "type": "undefined",
        "description": "A variable that has been declared but not yet assigned a value",
        "example": `let score;
console.log(score); // Output: undefined`
    },
    {
        "type": "null",
        "description": "Represents the intentional absence of any object value",
        "example": `let car = null;`
    },
    {
        "type": "bigint",
        "description": "A numeric type that can represent integers with arbitrary precision",
        "example": `let bigNumber = BigInt(123456789012345678901234567890);
let anotherBigNumber = 123456789012345678901234567890n;`
    },
    {
        "type": "symbol",
        "description": "A unique and immutable primitive value that can be used as an object property key",
        "example": `const uniqueID = Symbol("id");
let user = {
    [uniqueID]: 12345,
    name: "Bob"
};`
    }
];

// Non-Primitive Types
const nonPrimitiveTypes = [
    {
        "type": "Object",
        "description": "A collection of key-value pairs, where keys are strings (or Symbols) and values can be any type.",
        "example": `let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};`
    },
    {
        "type": "Array",
        "description": "A special type of object used to store ordered lists of values. Arrays are indexed by numbers.",
        "example": `let fruits = ["apple", "banana", "cherry"];`
    },
    {
        "type": "Function",
        "description": "A block of code designed to perform a specific task. Functions are first-class objects.",
        "example": `function greet(name) {
    return \`Hello, \${name}!\`;
}`
    },
    {
        "type": "Date",
        "description": "A built-in object for handling dates and times.",
        "example": `let today = new Date();`
    },
    {
        "type": "RegExp",
        "description": "An object that represents a regular expression, which is used for pattern matching in strings.",
        "example": `let regex = /hello/i; // Matches 'hello' in a case-insensitive manner`
    },
    {
        "type": "Error",
        "description": "An object representing an error that occurred during the execution of a script.",
        "example": `let error = new Error("Something went wrong!");`
    }
];

function displayTypes(containerId, types) {
    const container = document.getElementById(containerId);
    types.forEach((item) => {
        const list = document.createElement("li");
        list.innerHTML = `
            <strong>${item.type}</strong>: ${item.description}
            <code>${item.example}</code>
        `;
        container.appendChild(list);
    });
}

displayTypes("primitive-Container", primitiveTypes);
displayTypes("nonPrimitive-Container", nonPrimitiveTypes);
