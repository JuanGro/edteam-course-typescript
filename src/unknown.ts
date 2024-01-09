let example: unknown;

// const example2 = example + 2; // Can´t be possible

if (typeof example === 'number') {
    console.log(typeof example);
} else {
    throw new Error(typeof example);
}