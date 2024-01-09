interface User {
    name: string;
    email: string;
    age: number;
}

interface Person extends User {
    phone: string;
}

const user: User = {
    name: 'Lorem',
    email: 'lorem@ipsum.com',
    age: 30
};

const person: Person = {
    name: 'Lorem',
    email: 'lorem@ipsum.com',
    age: 30,
    phone: '123'
};

console.log(person.phone);