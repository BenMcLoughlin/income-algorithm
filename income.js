const helpers = require('./methods/helpers')
const forcast = require("./methods/forcast");
const state = require("./data/mockState")

/*

const income = (state) => {
     state.selectStreams()
     .buildForcast()
     .calculate(get(calculate.cpp, calculate.oas, maxSavings))
     .mapForcast(get(afterTaxIncomeDetails))
     .buildChartArray()
     .calculate(get(targetNestEgg, targetWithdrawals))
     .set("calculationResults")
}
*/


const addToProptotype = (target, ...prototypes) => {
     const allProtoTypes = prototypes.reduce((a, prototype) => ({...a, ...prototype}), {})
     return Object.assign(Object.create(allProtoTypes), target)
}

const income = state => {

     const _state = addToProptotype(state, helpers, forcast)

     _state.selectStreams({ stream_reducer: { streamType: "income" } });

     return _state
}

income(state)