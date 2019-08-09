export default {
	name: 'Elder Owen',
	level_required: "0",
	gold_cost: "0",
	gem_cost: "0",
	title: 'Town Hall',
	blueprint_unlocks: [],
	description: "Investing in the Town Hall will allow more players to join the city.",
	bonus: '---',
	prerequisite: '---',
	levels: [
		{ time: '---', investments: { gold: 100, gems: 2 }, cost: 1000, effect: '---' },
		{ time: '15 mins', investments: { gold: 200, gems: 4 }, cost: 4000, effect: 'City Population Limit: 5' },
	]
}
