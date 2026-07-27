function identity<T>(value:T):T{

    return value;
}

console.log(identity<number>(100));

console.log(identity<string>("Bhavana"));