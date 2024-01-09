function throwNever(): never {
    throw new Error('error');
}

function throwVoid(number: any): void {
    if(number) {
        console.log('Ok');
    } else {
        throw new Error('error');
    }
}

throwVoid(false);
throwNever();