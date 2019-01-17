import observer from './observer.js'

class Vue {
	constructor(options) {
		if (!options) {
			console.error('options should be an object')
			return false
		}

    this.$options = options
    this._data = options.data
    
    this._proxyData(this._data)

    observer(this._data)
  }

  _proxyData(data) {
  	if (!data) {
  		return false
  	}

    const vm = this

  	for (var key of Object.keys(data)) {
  		// new Proxy(vm, {
    //     get(target, key, receiver) {
    //       console.log(`getting ${key}!`)
    //       return vm._data[key]
    //     },
    //     set(target, key, value, receiver) {
    //       console.log(`setting ${key}!`)
    //       return vm._data[key] = value
    //     }
    //   })
      
      Object.defineProperty(vm, key, {
          configurable: false,
          enumerable: true,
          get: function proxyGetter() {
              return vm._data[key]
          },
          set: function proxySetter(newVal) {
              vm._data[key] = newVal
          }
      })
		}
  }
}
 
export default Vue