module.exports = [
  {
    name: "Argon",
    title: "Aspiring Knight",
    prerequisite: "Merchant Lv.1",
    stats: [
      { name: "attack", amount: 30 },
      { name: "health", amount: 50 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: "0%" },
    ],
    skill: {
      name: "Aura of Courage",
      effect: "20% bonus Attack and Defense for the party.",
    },
    criticalHit: {
      chance: "5%",
      damage: "2x",
    },
    cost: {
      gold: 0,
      gems: 0,
    },
    threatRating: 90,
    ranks: [
      { rank: 1, coins: 5, reward: [] },
      {
        rank: 2,
        coins: 15,
        reward: ["+6 Health, +25 Attack, +40 Defense"],
        reward: { health: 6, attack: 25, defense: 40, skill: "---" },
      },
      {
        rank: 4,
        coins: 50,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Resolve",
            effect: "the effect here idk what it does",
          },
        },
      },
    ],
  },
]
