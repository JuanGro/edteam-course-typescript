type Authenticated = {
  userId: string;
  jwt: string;
  role: string;
  level?: number;
};

const isAuthenticated = (
  userId: string,
  jwt: string,
  role: string = 'admin', // Default param
  level?: number // Optional param
) => {
  return {
    userId,
    jwt,
    role,
    level: level ?? 10, // ?? Nullish coalescing operator is to avoid that the '0' number will be handled as 'false'
  };
};

const result1 = isAuthenticated("1", "lorem", "customer");
console.log(result1);
const result2 = isAuthenticated("1", "lorem");
console.log(result2);

type Arguments = number | string | boolean;

const arguments2 = (...args: Arguments[]): Arguments[] => {
  return args;
}
const result3 = arguments2(1, 'hello', false);
console.log(result3);