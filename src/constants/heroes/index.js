module.exports = [
  {
    class: "Fighter",
    subclass: "Soldier",
		prerequisite: "---",
		stats: [
			{ name: 'attack', amount: 10 },
			{ name: 'health', amount: 30 },
			{ name: 'defense', amount: 15 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 0,
			gems: 0
		},
		threatRating: 90,
		equipments: [
			{ slot: 1, allowed: ["Sword", "Mace", "Dagger"] },
			{ slot: 2, allowed: ["Heavy Armor"] },
			{ slot: 3, allowed: ["Gauntlets"] },
			{ slot: 4, allowed: ["Heavy Footwear"] },
			{ slot: 5, allowed: ["Potion"] },
			{ slot: 6, allowed: ["Shield"] },
		],
	}
]
