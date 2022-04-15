class Storage {
  constructor (item, defaultValue = '', type = 'local') {
    this.item = item
    this.type = type
    if (type === 'local') {
      localStorage.setItem(item, defaultValue)
    } else {
      sessionStorage.setItem(item, defaultValue)
    }
  }

  get () {
    if (this.type === 'local') return localStorage.getItem(this.item)
    return sessionStorage.getItem(this.item)
  }

  set (value) {
    if (this.type === 'local') {
      localStorage.setItem(this.item, value)
      return
    }
    sessionStorage.setItem(this.item, value)
  }

  clear () {
    if (this.type === 'local') {
      localStorage.setItem(this.item, '')
      return
    }
    sessionStorage.setItem(this.item, '')
  }

  isEmpty () {
    if (this.type === 'local') return (!localStorage.getItem(this.item))
    return (!sessionStorage.getItem(this.item))
  }
}

const names = new Storage('names')
const neighbors = new Storage('neighbors')
const cities = new Storage('cities', 'London', 'session')

neighbors.set('Vasya')
neighbors.set('Andrey')

names.set('Yaroslav')
names.clear()

alert(names.isEmpty())
alert(names.get())

alert(neighbors.isEmpty())
alert(neighbors.get())

alert(cities.isEmpty())
alert(cities.get())
