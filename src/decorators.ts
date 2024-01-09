function Decorator(target: Object) {
  console.log("Im a decorator");
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
