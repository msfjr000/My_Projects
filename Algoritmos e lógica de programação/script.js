let countpre = 0;
let count = 1;
let items = [];
let itemsqnt;
let continuar = true;
while 
(continuar) 
{
  
  let choice = Number(prompt(
    `Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `));
  
    switch (choice) {

      case 1: 
      let itemsqnt = Number(prompt('Quantos itens serão cadastrados?'))
        countpre  = countpre + itemsqnt
        for (count ; count <= countpre ; count++ ) {
          items.push(prompt(`Qual item será o ${count} cadastrado?`))
        };
        alert('Itens cadastrados!')
      break;

      case 2:
      let choice1 = prompt('Você deseja visualizar somente um item ou todos?') 
        if 
          (choice1.toLowerCase() == "todos") 

        {
          alert(items)
        }
        else if 
          (
          choice1.toLowerCase() == "somente um" || 
          choice1.toLowerCase() == "só um" ||
          choice1.toLowerCase() == "so um" ||
          choice1.toLowerCase() == "um" ||
          choice1 == 1
          ) 

        {
          let choice2 = Number(prompt('Qual item deseja visualizar?'))
          alert(items[choice2-1])
        }
      break;

      case 3:
      alert('Raleu viu mofio raleu')
      continuar = false
      break;
    default: 
    alert('Ai ta certo')
    }
}