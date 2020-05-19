class Employ { 
    constructor(name){
        this.name = name
    }

    say = () => `Eu sou o Employ ${this.name}`
}
class Vendor{
    constructor(name){
        this.name = name
    }

    say = () => `Eu sou o Vendor ${this.name}`
}

function EmployFactory() {
    this.create = (name) => new Employ(name)
}

function VendorFacotry() {
    this.create = (name) => new Vendor(name)
}

function run() {
    const employFactory = new EmployFactory()
    const vendorFactory = new VendorFacotry()

    const employ = employFactory.create('Flavio')
    const vendor = vendorFactory.create('Andreia')

    console.log(employ.say())
    console.log(vendor.say())
}

run()