const estudante ={
    nome: "Luiz",
    sobrenome:"Fernando",
    numero_de_matricula:18,
    nota_do_semestre:[10, 9, 8],
    módulo:1
};
console.table(estudante);
console.log("Nome:"+estudante.nome+"\n"+
"Nota do semestre:",estudante.nota_do_semestre[1]+"\n"+
"Módulo:",estudante.módulo);

const estudanteCopi = {
   ...estudante ,
   nome:"Astroved",
   
}
console.table(estudanteCopi)
estudanteCopi.nota_do_semestre.splice(3,0,9)
console.table(estudanteCopi)

estudanteCopi.módulo=2
console.table(estudanteCopi)

const estudanteLabenu = [estudante, estudanteCopi]
console.table(estudanteLabenu)

const rua = prompt("digite o nome da sua rua");
const numeroCasa = Number(prompt("digite o numero da casa"));
const bairro = prompt("digite o seu bairro");

const carrinho = {
    Nome: "Luiz",
    Forma_De_Pagamento:"Boleto",
    Endereço: "Rua: "+rua+" Numero: "+numeroCasa+" bairro: "+bairro
};
console.table(carrinho);

carrinho.compras=["carne","oleo","pão"];
console.table(carrinho);
carrinho.compras[0]= {
    item: "carne",
    quantidade: "3kg",
    preço: "R$:45,00.kg"
};

console.table(carrinho.compras[0]);
carrinho.compras[1]={
    item: "óleo",
    quantidade:"2.Lt",
    preço:"R$:8,40.Lt",
}
console.table(carrinho.compras[1]);

carrinho.compras[2]={
    item: "pão",
    quantidade:"8.Un",
    preço:"R$:0,80.Un"
}
console.table(carrinho.compras[2])

console.log("itens comprados:",carrinho.compras.length)

const carrinhoCop={
    ...carrinho,
    Nome:"Jane",
    Forma_De_Pagamento:"cartão presente"
}
console.table(carrinhoCop)









