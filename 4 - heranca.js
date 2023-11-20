class Atividade{
    idade = 0
    constructor(name){
        this.name = name
    }
}
 class Aluno extends Aula3{
    constructor (name, id){
        super(name)
        this.id = id

    }
    }

    let c1 = new Atividade("josemir", 69);
let c2 = new Atividade("rafael", 9);
let c3 = new Atividade("silmara", 5);
let c4 = new Atividade("murilo", 7);
console.log(`${c1.name} tem ${c1.idade} e matricual ${c1.id}`)