const patients = [

  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },

  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },

  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },

]

let patientsNames = []

for(let objeto of patients) {
  patientsNames.push(objeto.name)
}


let patientsAges = []

for(let objeto1 of patients) {
  patientsAges.push(objeto1.age)
}


let patientsWeight = []

for(let objeto2 of patients) {
  patientsWeight.push(objeto2.weight)
}


let patientsHeight = []

for(let objeto3 of patients) {
  patientsHeight.push(objeto3.height)
}

for (let index = 0 ; index < patients.length ; index++) {
  alert(`O paciente  ${patientsNames[index]} tem ${patientsAges[index]} anos, pesa ${patientsWeight[index]} e mede ${patientsHeight[index]}`)
}