class Atividade{
    _idade = 0
    constructor (nome){
    this.nome = nome
    }

    setarIdade(novaIdade){
        if(typeof novaIdade =='number'){
            this.idade = novaIdade
        }
    }
    get idade(){
            return this._idade
        }
        set idade(x){
        if(typeof x =='number'){
            this._idade = x
        
}
        }
    }

let c1 = new Atividade("josemir");
let c2 = new Atividade("rafael");
let c3 = new Atividade("silmara");
let c4 = new Atividade("murilo");
c1.idade = 5 
c2.idade = 10
c3.idade = 23
c4.idade = 12

console.log(`${c1.nome} tem ${c1.idade} anos de idade`)
console.log(`${c2.nome} tem ${c2.idade} anos de idade`)
console.log(`${c3.nome} tem ${c3.idade} anos de idade`)
console.log(`${c4.nome} tem ${c4.idade} anos de idade`)
