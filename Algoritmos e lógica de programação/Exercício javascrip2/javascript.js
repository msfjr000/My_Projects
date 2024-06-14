let list = [
  {
    name: "maro",
    score1: 9,
    score2: 3
  },
  {
    name: "almir",
    score1: 10,
    score2: 10
  },
  {
    name: "João",
    score1: 3,
    score2: 6
  }
]

for (students of list) {
  function calculate () {
    let name = students.name
    let average = (students.score1 + students.score2) / 2
    if (average > 7) {
      return`A média do(a) aluno(a) ${name} é: ${average}\nparabéns ${name}! você foi aprovado(a) no concurso`
    } else {
      return `A média do(a) aluno(a) ${name} é: ${average}\nNão foi dessa vez, ${name}! Tente novamente!`
    }
  }
  alert(calculate())
}