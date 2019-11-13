/**
 * 抽象工厂模式
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
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

class AbstactFactory {
  constructor() {
    this.types = new Map()
  }

  getInstance(type, options) {
    const vehicle = this.types.get(type)
    const myCar = new vehicle(options)
    console.log(myCar)
  }

  registerTypes(type, proto) {
    if(this.types.has(type)){
      return
    }

    this.types.set(type, proto)
  }
}

const vehicle = new AbstactFactory()
vehicle.registerTypes('car', Car)
vehicle.registerTypes('truck', Truck)

vehicle.getInstance('car', {
  size: 'middle'
})