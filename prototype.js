/** 
 * 原型模式
 * 1.Object.create()
 * 2.prototype
 * 3.es6 extends
*/
const a = {
  name: 'a',
  print: function () {
    console.log(this.name)
  }
}

/* Object.create() */
const b = Object.create(a)
b.title = 'title'

// Object.defineProperties()
const b = Object.create(a, {
  title: {
    value: 'title'
  }
})

console.log(b.title) // 'title'
console.log(b.name) // 'a'

/* prototype */
function b() {
  this.title = 'title'
}
b.prototype = a

/* ES6 */
class a {
  constructor() {
    this.name = 'a'
  }
}

class b extends a {
  constructor() {
    super()
    this.title = 'title'
  }
}

const test = new b()
console.log(test.title) // 'title'
console.log(test.name) // 'a'

/* prototype */
const b = (function () {
  let brige = function () { };
  return function (proto) {
    brige.prototype = proto
    return new brige()
  }
})()

b(a).name // 'a'