class UserExample {
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

const userExample = new UserExample('lorem', 'lorem@ipsum.com', 18);
userExample.setName('ipsum')
console.log(userExample);