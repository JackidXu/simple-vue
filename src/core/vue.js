import observer from './observer.js'

class Vue {
	constructor(options) {
		if (!options) {
			console.error('options should be an object')
			return false
		}

    this.$options = options
    this._proxyData(options.data)

    observer(options.data)
  }

  _proxyData(data) {
  	if (!data) {
  		return false
  	}

  	for (var key of Object.keys(data)) {
  		this[key] = data[key]
		}
  }
}

export default Vue