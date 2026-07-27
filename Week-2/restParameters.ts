function sum(...numbers:number[]):number{

    let total=0;

    for(let n of numbers){
        total+=n;
    }

    return total;
}

console.log(sum(10,20,30));