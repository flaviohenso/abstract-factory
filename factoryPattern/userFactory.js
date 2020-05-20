const { Cliente, Vendedor, Fornecedor } = require('./Users')


let registeredUserFactories = {}

registeredUserFactories['Cliente'] = Cliente

registeredUserFactories['Vendedor'] = Vendedor 

registeredUserFactories['Fornecedor'] = Fornecedor

class UserFactory {
    constructor(type, props) {
        return new registeredUserFactories[type](props)
    }
}

console.log(registeredUserFactories)
const usuario = new UserFactory('Fornecedor', { name: 'flavio', cnpj: 1233 })

console.log(usuario)
console.log(usuario instanceof Vendedor)
