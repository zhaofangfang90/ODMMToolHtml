function greeter1(person){
	return "Hello, "+person;
}
let user1="Jane User";
document.body.innerHTML=greeter1(user1);

function greeter2(person:string){
	return "Hello, "+person;
}
let user2="Hello Moke!";
document.body.innerHTML=greeter2(user2);


interface Person{
	firstName:string,
	lastName:string;
}

function greeter(person:Person){
	return "Hello, "+person.firstName+" "+person.lastName;
}

let user={firstName:"Moke",lastName:"Wang"};
document.body.innerHTML=greeter(user);


//
class Student{
	fullName:string;
	constructor(public firstName,public middleInitial, public lastName){
		this.fullName=firstName+" "+middleInitial+" "+lastName;
	}
}

interface Person3{
	firstName:string;
	lastName:string;
}

function greeter3(person:Person3){
	return "Hello, "+person.firstName+" "+person.lastName;
}

let user3=new Student("Shuller","Mrs","User");
document.body.innerHTML=greeter3(user3);

let isDone:boolean=false;

let name1:string=`Shuller`;
let age:number=20;
let sentence:string=`
	Hello ,my name is ${name}.
	I'll be ${age+1} years old next month.
	`;
let list:number[]=[1,2,3];
let list1:Array<number>=[1,2,3];

let list2:number[]=[2,3,4];
let list3:Array<number>=[3,4,5];

let x:[string,number];
x=["Shuller",10];


enum Color {Red1,Green1,Blue1}
let c:Color=Color.Green1;

enum Color {Red2=1,Green2,Blue2}
let cc:Color=Color.Green2;

enum Color {Red3=1, Green3=2, Blue3=4}
let colorName=Color.Green3;


enum Color {Red4=1, Green4,Blue4}
let colorName1:string=Color[2];
alert(colorName1);

//any
let notSure:any=4;
notSure="my name is Shuller";
notSure=false;


let prettySure:Object=4;
prettySure.toFixed();

let llist:any[]=[1,true,"free"];
llist[1]=100;

function warnUser():void{
	alert("this is my warnning message");
}

let unusable:void=undefined;

let u:undefined=undefined;
let n:null=null;

function error(message:string):never{
	throw new Error(message);
}

function fail(){
	return error("something failed");
}

function infiniteLoop():never{
	while(true){

	}
}


let someValue:any="this is a string";
let strLength:number=(<string>someValue).length || let strLength1:number=(someValue as string).length;

function sumMatrix(matrix:number[][]){
	var sum=0;
	for(var i=0;i<matrix.length;i++){
		var currentRow=matrix[i];
		for(var i=0;i<currentRow.length;i++){
			sum+=currentRow[i];
		}
	}
	return sum;
}




for(var i=0;i<10;i++){
	(function(i){
		setTimeout(function(){
			console.log(i);
		},100*i);
	})(i);
}


function f(input:boolean){
	let a=100;
	if(input){
		let b=a+1;
	}
	return a;
}