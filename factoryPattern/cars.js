function Car(props) {
    this.doors = props.doors || 4
    this.state = props.state || "Brand new"
    this.color = props.color || "silver"
}

function Truck(props) {
    this.state = props.state || "used"
    this.wheelsize = props.wheelsize || "large"
    this.color = props.color || "blue"
}

function VehicleFactory() { }

VehicleFactory.prototype.vehicleClass = Car

VehicleFactory.prototype.createVehicle = function (props) {
    switch (props.typeVehicle) {
        case "Car":
            this.vehicleClass = Car
            break
        case "Truck":
            this.vehicleClass = Truck
            break
    }

    return new this.vehicleClass(props)
}

const vehicleFactory = new VehicleFactory()
console.log(vehicleFactory)
const vehicle2 = vehicleFactory.createVehicle({
    typeVehicle: "Car",
    color: 5
})
console.log(vehicle2)

console.log(vehicle2 instanceof Car)