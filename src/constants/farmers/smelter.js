export default {
  name: "Brohm",
  level_required: "0",
  gold_cost: "0",
  gem_cost: "0",
  title: "Smelter",
  blueprint_unlocks: [],
  description: "Investing in this industry will speed up steel production.",
  bonus: "---",
  prerequisite: "Iron Mine Lv. 7",
  levels: [
    { level: 1, time: '---', investments: { gold: 300, gems: 6 }, cost: 3000, effect: 'Steel Production: 0.75/min' }
  ],
  resource: "steel",
}
