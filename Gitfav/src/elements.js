import { GithubUser } from "./GithubUser.js"
export class Favorites {
  constructor (root) {
    this.load()
    this.tbody = document.querySelector('tbody')
    this.button = document.getElementsByClassName('remove')
    this.update()
    this.onAdd()
  }

  deleteAll () {
    const tr = this.tbody.querySelectorAll('tr')
    tr.forEach(tr => {
      tr.remove()
    })
  }

  onAdd () {
    const button = document.getElementById('favorite')
    button.onclick = () => {
    const {value} = document.getElementById('input-favorite')
    this.add(value)
    this.save()
    console.log(this.entries)
    }
 
  }

  async add (user) {
    try {
      const userExist = this.entries.find(entry => entry.login === user)
      if (userExist) {
        throw new Error ('Usuário já cadastrado!')
      }

      const userName = await GithubUser.search(user)
      
      if (userName.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [userName,...this.entries]
      console.log(this.entries)
      this.update()
      this.save()
    }
     catch (error) 
    {
      alert(error.message)
    }
  }
  
  load () {
    this.entries = JSON.parse(localStorage.getItem('@git-fav:')) || []
  }

  save () {
    localStorage.setItem('@git-fav:',JSON.stringify(this.entries))
  }

  update () {
    this.deleteAll()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.remove').addEventListener('click',() => {
        const isOK = confirm('Tem certeza que deseja apagar este usuário?')
        if (isOK) {
          this.delete(user)
        }
      })
      this.tbody.append(row)
    })
  }

  createRow () {
    const tr = document.createElement('tr')
    tr.innerHTML = 
        `
        <tr>
            <td class="user">
              <img src="https://github.com/msfjr000.png" alt="Imagem de Maro">
              <a href="https://github.com/msfjr000" target="_blank">
                <p>Mário Sérgio</p>
                <span>/msfjr000</span>
              </a>
            </td>
            <td class="repositories">123</td>
            <td class="followers">1234</td>
            <td><button class="remove">Remover</button></td>
          </tr>
        `
        return tr
  }
  delete(user) {
    const filteredEntries = this.entries.filter((entry) => 
    entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}
