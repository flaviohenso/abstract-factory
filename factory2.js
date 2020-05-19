
let registeredUserFactories = {}

registeredUserFactories['Cliente'] = class Cliente {
    constructor(props) {
        this.name = props.name,
            this.cpf = props.cpf
    }
}

registeredUserFactories['Vendedor'] = class Vendedor {
    constructor(props) {
        this.name = props.name,
            this.codigo = props.codigo
    }
}

registeredUserFactories['Fornecedor'] = class Fornecedor {
    constructor(props) {
        this.name = props.name,
            this.cnpj = props.cnpj
    }
}

class UserFactory {
    constructor(type, props) {
        return new registeredUserFactories[type](props)
    }
}

console.log(registeredUserFactories)
const usuario = new UserFactory('Fornecedor', { name: 'flavio', codigo: 1233 })

console.log(usuario)
