const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

for (let patient of patients) {
 let soma = patient.weight / patient.height 
 alert(`O paciente ${patient.name} tem um IMC de ${soma.toFixed(1)}`)
}