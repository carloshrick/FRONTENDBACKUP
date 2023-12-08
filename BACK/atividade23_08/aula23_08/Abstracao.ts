// class Pessoa{

// nome:string;

// constructor(_nome:string){
// this.nome = _nome

// }


// static seApresentar(nome:string){console.log(`Ola meu nome é ${nome}`);
// }
// }

// class Funcionario extends Pessoa{
// cargo:string;

// constructor(_cargo:string, nome:string){
// super(nome);

// this.cargo = _cargo




// }

// }

// Pessoa.seApresentar('jao')



abstract class Animal{

nome:string;
altura:number;
comprimento:number;

constructor(_nome:string, _altura:number, _comprimento:number){

this.nome = _nome;
this.altura = _altura;
this.comprimento =_comprimento

}

static Respirar(){


console.log(`esta respirando!!!!`)

}


}




class Aves extends Animal{ 

especie:string;


constructor(nome:string,altura:number, comprimento:number, _especie:string){
super(nome, altura, comprimento)


this.especie = _especie;

}

}


let pardal = new Aves('farina',10,10,'pardal')

//abstrata não consegue declarar objeto

Animal.Respirar();

