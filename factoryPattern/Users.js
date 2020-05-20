class Cliente {
    constructor(props) {
        this.name = props.name
        this.cpf = props.cpf
    }
}

class Vendedor {
    constructor(props) {
        this.name = props.name
        this.codigo = props.codigo
    }
}

class Fornecedor {
    constructor(props) {
        this.name = props.name
        this.cnpj = props.cnpj
    }
}

module.exports = { Cliente, Vendedor, Fornecedor }
