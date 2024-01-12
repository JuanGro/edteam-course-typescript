const Ping: any = "";

interface UserI {
  name: string;
  age: number;
}

const user4: UserI = {
  name: "",
  age: 20,
};

interface Ping<T, U, V> {
  host: T;
  location: U;
  user: V;
}

const Network: Ping<number, string, UserI> = {
  host: 127,
  location: "",
  user: user4,
};
