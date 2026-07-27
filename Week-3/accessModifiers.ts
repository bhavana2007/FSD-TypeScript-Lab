class Person{

    public name:string;

    private salary:number;

    protected age:number;

    constructor(name:string,salary:number,age:number){

        this.name=name;

        this.salary=salary;

        this.age=age;
    }

    display(){

        console.log(this.name);

        console.log(this.salary);

        console.log(this.age);
    }

}

const p=new Person("Bhavana",50000,20);

p.display();