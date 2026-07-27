class Student{

    name:string;

    roll:number;

    constructor(name:string,roll:number){

        this.name=name;

        this.roll=roll;
    }

    display(){

        console.log(this.name);

        console.log(this.roll);
    }

}

const s1=new Student("Bhavana",101);

s1.display();