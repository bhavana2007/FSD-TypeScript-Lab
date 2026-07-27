function greet(name: string = "Guest", age?: number) {
    console.log(name);

    if(age){
        console.log(age);
    }
}

greet("Bhavana",20);
greet();