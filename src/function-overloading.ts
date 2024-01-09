type Args = number | string | boolean;

function exampleFunction(variable: number): number;
function exampleFunction(variable: string): string;
function exampleFunction(variable: Args): Args {
  return variable;
}

const result = exampleFunction("one");
console.log(result);
