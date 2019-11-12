/**
 * 工厂模式
 */
class Car {
  constructor(options) {
    this.size = options.size || 'small'
    this.color = options.color || 'red'
  }
}

class Truck {
  constructor(options) {
    this.size = options.size || 'big'
    this.color = options.color || 'black'
  }
}

class VehicleFactory {
  constructor () {
    this.vehicleClass = Car
  }

  createVehicle(options) {
    if (options.vehicleType === 'car') {
      this.vehicleClass = Car
    } else {
      this.vehicleClass = Truck
    }

    return new this.vehicleClass(options)
  }
}

const vehicle = new VehicleFactory()
const myCar = vehicle.createVehicle({
  vehicleType: 'car',
  size: 'middle'
})
