/**
 * 单例模式:保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 */
class singleton {
  constructor() {
    this.create()
  }

  create() {
    console.log('singleton')
  }
}

const createSingleton = {
  instance: null,
  create: function () {
    if (!this.instance) {
      this.instance = new singleton()
    }
  }
}

createSingleton.create()