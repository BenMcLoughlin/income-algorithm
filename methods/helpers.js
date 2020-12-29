
// const streams = [
//      {owner: 'user1', streamType: "income"},
//      {owner: 'user1', streamType: "income"},
//      {owner: 'user1', streamType: "income"},
//      {owner: 'user1', streamType: "income"},
//      {owner: 'user2', streamType: "income"},
//      {owner: 'user2', streamType: "income"},
//      {owner: 'user2', streamType: "savings"},
//      {owner: 'user2', streamType: "savings"},
// ]

// const query = { streamType: "income", owner: "user1" };

module.exports = helpers = {
     filterArray(arr, query) {
         return arr.filter(d => {
             return Object.entries(query).map(([k,v]) => d[k] === v).every(b => b)
         })
     }
}

// console.log(helpers.filterArray(streams, {streamType: "income", owner: 'user1'}))