// let person: object;
// person = { name: "Phúc" }

// person = "Eric" // TypeString không thể gán vào Type Object được


// cách 2:

let pro2: {
    firstName: string
    lastName: string
    age: number
    jobTitle: string
}

pro2 = {
    firstName: "tran",
    lastName: "phuc",
    age: 23,
    jobTitle: "dev"
}

// shorter:
let pro3: {
    firstName: string
    lastName: string
    age: number
    jobTitle: string
} = {
    firstName: "tran",
    lastName: "phuc",
    age: 23,
    jobTitle: "dev"
}