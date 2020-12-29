module.exports = forcast = {

  selectStreams(query) {
       const [key, value] = Object.entries(query)[0]
       if (typeof key === 'string') {
            const values = this.filterArray(Object.values(this[key]), value)
            this.releventStreams = Object.assign(Object.create(this), values)
            return this
       }
       return
  },
};
