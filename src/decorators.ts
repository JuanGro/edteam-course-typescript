function Decorator(target: any) {
  target.prototype.email = "lorem@ipsum.com";
}

interface User {
  name: string;
  age: number;
  email: string;
}

@Decorator
class User {
  name: string;
  age: number;

  constructor() {
    this.name = "";
    this.age = 0;
  }
}

const user3 = new User();
console.log(user3);
