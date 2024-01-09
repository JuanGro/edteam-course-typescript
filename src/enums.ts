type ValidStrings = 'world' | 'world!';

const saludo = (string: ValidStrings) => {
    console.log(`Hello ${string}`);
};

saludo('world!');