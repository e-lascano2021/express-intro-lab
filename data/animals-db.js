const animals = [
  {text: 'Horses', local: true},
  {text: 'Ants', local: true},
  {text: 'Jaguars', local: false},
  {text: 'Armadillos', local: true},
  {text: 'Lepords', local: false},
  {text: 'Bears', local: true},
  {text: 'Giraffes', local: false},
  {text: 'Bees', local: true},
  {text: 'Cats', local: true},
  {text: 'Cheatahs', local: false},
  {text: 'Dogs', local: true},
  {text: 'Chinchillas', local: false},
  {text: 'Kangaroos', local: false},
  {text: 'Butterflies', local: true},
  {text: 'Lions', local: false},
  {text: 'Monkeys', local: false},
]

const find = (conditions, callback) => {
  try {

    if (!(conditions instanceof Object)) {
      throw new TypeError('Please, pass in an Object')
    }

    if(Object.keys(conditions).length === 0) return callback(null, animals)

  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}