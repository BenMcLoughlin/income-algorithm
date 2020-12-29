module.exports = state = {
  caclc_reducer: {
       user1: {
            cppPayment: 0, 
       },
       user2: {
            cppPayment: 0, 
       }

  },
  ui_reducer: {
    users: ["user1", "user2"],
    selectedUser: "user1",
    isMarried: true,
    selectedAccount: "income",
    chartStartYear: 2007,
    chartEndYear: 2102,
  },
  stream_reducer: {
    user1Income_9087087: {
      cppEligible: true,
      in: {
        1: {
          start: 2008,
          value: 47000,
          end: 2022,
        },
        2: {
          start: 2023,
          value: 57000,
          end: 2042,
        },
        3: {
          start: 2042,
          value: 67000,
          end: 2052,
        },
      },
      streamType: "income",
      name: "Wal Mart Income",
      owner: "user1",
      id: "user1Income_9087087",
    },
    user2Income_098907: {
      cppEligible: true,
      in: {
        1: {
          start: 2008,
          value: 27000,
          end: 2022,
        },
        2: {
          start: 2023,
          value: 47000,
          end: 2042,
        },
        3: {
          start: 2042,
          value: 67000,
          end: 2052,
        },
      },
      streamType: "income",
      name: "Counselling",
      owner: "user2",
      id: "user2Income_098907",
    },
  },
  user_reducer: {
    numberOfChildren: 1,
    user1: {
      birthYear: 1988,
      cppStartAge: 65,
      firstName: "Ben",
      lifeSpane: 95,
      startWork: 2007,
    },
    user2: {
      birthYear: 1989,
      cppStartAge: 65,
      firstName: "Kelsey",
      lifeSpane: 95,
      startWork: 2008,
    },
  },
};
