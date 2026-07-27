interface Length{

    length:number;
}

function display<T extends Length>(item:T){

    console.log(item.length);
}

display("Hello");

display([1,2,3,4]);