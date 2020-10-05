const image_url = ( name ) => `https://img.pokemondb.net/sprites/items/${name}.png`;

const db = {
  /* product skeleton:
      {
        id: 0,
        title: "",
        description:
          "",
        price: 0,
        image: image_url(''),
      },
  */
  products: [
    {
      id: 1,
      title: "Poké Ball",
      description:
        "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.",
      price: 200,
      image: image_url('poke-ball'),
    },
    {
      id: 2,
      title: "Great Ball",
      description:
        "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball",
      price: 600,
      image: image_url('great-ball'),
    },
    {
      id: 3,
      title: "Ultra Ball",
      description:
        "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.",
      price: 800,
      image: image_url('ultra-ball'),
    },
    {
      id: 4,
      title: "Potion",
      description:
        "Restores 20 HP.",
      price: 200,
      image: image_url('potion'),
    },
    {
      id: 5,
      title: "Super Potion",
      description:
        "Restores 60 HP.",
      price: 700,
      image: image_url('super-potion'),
    },
    {
      id: 6,
      title: "Hyper Potion",
      description:
        "Restores 120 HP.",
      price: 1500,
      image: image_url('hyper-potion'),
    },
    {
      id: 7,
      title: "Max Potion",
      description:
        "Fully restores HP.",
      price: 2500,
      image: image_url('max-potion'),
    },
    {
      id: 8,
      title: "Full Restore",
      description:
        "A medicine that fully restores the HP and heals any status problems of a single Pokémon.",
      price: 3000,
      image: image_url('full-restore'),
    },
    {
      id: 9,
      title: "Revive",
      description:
        "A medicine that revives a fainted Pokémon. It restores half the Pokémon's maximum HP.",
      price: 2000,
      image: image_url('revive'),
    },
    {
      id: 10,
      title: "Antidote",
      description:
        "A spray-type medicine. It lifts the effect of poison from one Pokémon.",
      price: 200,
      image: image_url('antidote'),
    },
    {
      id: 11,
      title: "Paralyze Heal",
      description:
        "A spray-type medicine. It eliminates paralysis from a single Pokémon.",
      price: 300,
      image: image_url('paralyze-heal'),
    },
    {
      id: 12,
      title: "Awakening",
      description:
        "A spray-type medicine. It awakens a Pokémon from the clutches of sleep.",
      price: 100,
      image: image_url('awakening'),
    },
    {
      id: 13,
      title: "Burn Heal",
      description:
        "A spray-type medicine. It heals a single Pokémon that is suffering from a burn.",
      price: 300,
      image: image_url('burn-heal'),
    },
    {
      id: 14,
      title: "Ice Heal",
      description:
        "A spray-type medicine. It defrosts a Pokémon that has been frozen solid.",
      price: 100,
      image: image_url('ice-heal'),
    },
    {
      id: 15,
      title: "Full Heal",
      description:
        "A spray-type medicine. It heals all the status problems of a single Pokémon.",
      price: 400,
      image: image_url('full-heal'),
    },
    {
      id: 16,
      title: "Escape Rope",
      description:
        "A long, durable rope. Use it to escape instantly from a cave or a dungeon.",
      price: 300,
      image: image_url('escape-rope'),
    },
    {
      id: 17,
      title: "Repel",
      description:
        "An item that prevents weak wild Pokémon from appearing for 100 steps after its use.",
      price: 400,
      image: image_url('repel'),
    },
    {
      id: 18,
      title: "Super Repel",
      description:
        "An item that prevents weak wild Pokémon from appearing for 200 steps after its use.",
      price: 700,
      image: image_url('super-repel'),
    },
    {
      id: 19,
      title: "Max Repel",
      description:
        "An item that prevents weak wild Pokémon from appearing for 250 steps after its use.",
      price: 900,
      image: image_url('max-repel'),
    },
    {
      id: 20,
      title: "Honey",
      description:
        "A sweet honey with a lush aroma that attracts wild Pokémon when it is used in grass, caves, or on special trees.",
      price: 300,
      image: image_url('honey'),
    },
    {
      id: 21,
      title: "Poké Doll",
      description:
        "A doll that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
      price: 1000,
      image: image_url('poke-doll'),
    },
    {
      id: 22,
      title: "Heal Ball",
      description:
        "A remedial Poké Ball that restores the caught Pokémon's HP and eliminates any status problem.",
      price: 300,
      image: image_url('heal-ball'),
    },
    {
      id: 23,
      title: "Net Ball",
      description:
        "A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon.",
      price: 1000,
      image: image_url('net-ball'),
    },
    {
      id: 24,
      title: "Nest Ball",
      description:
        "A somewhat different Poké Ball that works especially well on weaker Pokémon in the wild.",
      price: 1000,
      image: image_url('nest-ball'),
    },
    {
      id: 25,
      title: "Dive Ball",
      description:
        "A somewhat different Poké Ball that works especially well on Pokémon that live underwater.",
      price: 1000,
      image: image_url('dive-ball'),
    },
    {
      id: 26,
      title: "Dusk Ball",
      description:
        "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",
      price: 1000,
      image: image_url('dusk-ball'),
    },
    {
      id: 27,
      title: "Timer Ball",
      description:
        "A somewhat different Poké Ball that becomes progressively better the more turns there are in a battle.",
      price: 1000,
      image: image_url('timer-ball'),
    },
    {
      id: 28,
      title: "Quick Ball",
      description:
        "A somewhat different Poké Ball that provides a better catch rate if it is used at the start of a wild encounter.",
      price: 1000,
      image: image_url('quick-ball'),
    },
    {
      id: 29,
      title: "Repeat Ball",
      description:
        "A somewhat different Poké Ball that works especially well on Pokémon species that were previously caught.",
      price: 1000,
      image: image_url('repeat-ball'),
    },
    {
      id: 30,
      title: "Luxury Ball",
      description:
        "A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.",
      price: 1000,
      image: image_url('luxury-ball'),
    },
    {
      id: 31,
      title: "X Speed",
      description:
        "Raises Speed of a Pokémon in battle.",
      price: 350,
      image: image_url('x-speed'),
    },
    {
      id: 32,
      title: "X Attack",
      description:
        "Raises Attack of a Pokémon in battle.",
      price: 500,
      image: image_url('x-attack'),
    },
    {
      id: 33,
      title: "X Defense",
      description:
        "Raises Defense of a Pokémon in battle.",
      price: 500,
      image: image_url('x-defense'),
    },
    {
      id: 34,
      title: "Guard Spec.",
      description:
        "Prevents stat reduction for five turns.",
      price: 700,
      image: image_url('guard-spec'),
    },
    {
      id: 35,
      title: "Dire Hit",
      description:
        "Raises critical-hit ratio of a Pokémon in battle.",
      price: 650,
      image: image_url('dire-hit'),
    },
    {
      id: 36,
      title: "X Accuracy",
      description:
        "Raises Accuracy of a Pokémon in battle.",
      price: 950,
      image: image_url('x-accuracy'),
    },
    {
      id: 37,
      title: "X Sp. Atk",
      description:
        "Raises Special Attack of a Pokémon in battle.",
      price: 350,
      image: image_url('x-sp-atk'),
    },
    {
      id: 38,
      title: "X Sp. Def",
      description:
        "Raises Special Defense of a Pokémon in battle.",
      price: 350,
      image: image_url('x-sp-def'),
    },
    {
      id: 39,
      title: "Protein",
      description:
        "Increases Attack EVs by 10.",
      price: 10000,
      image: image_url('protein'),
    },
    {
      id: 40,
      title: "Iron",
      description:
        "Increases Defense EVs by 10.",
      price: 10000,
      image: image_url('iron'),
    },
    {
      id: 41,
      title: "Calcium",
      description:
        "Increases Special Attack EVs by 10.",
      price: 10000,
      image: image_url('calcium'),
    },
    {
      id: 42,
      title: "Zinc",
      description:
        "Increases Special Defense EVs by 10.",
      price: 10000,
      image: image_url('zinc'),
    },
    {
      id: 43,
      title: "Carbos",
      description:
        "Increases Speed EVs by 10.",
      price: 10000,
      image: image_url('carbos'),
    },
    {
      id: 44,
      title: "HP Up",
      description:
        "Increases HP EVs by 10.",
      price: 10000,
      image: image_url('hp-up'),
    },
    {
      id: 45,
      title: "Energy Powder",
      description:
        "Restores 60 HP but lowers Friendship.",
      price: 500,
      image: image_url('energy-powder'),
    },
    {
      id: 46,
      title: "Energy Root",
      description:
        "Restores 120 HP but lowers Friendship.",
      price: 800,
      image: image_url('energy-root'),
    },
    {
      id: 47,
      title: "Heal Powder",
      description:
        "Heals all status problems, but lowers Friendship.",
      price: 450,
      image: image_url('heal-powder'),
    },
    {
      id: 48,
      title: "Revival Herb",
      description:
        "Revives a Pokémon to max HP, but lowers Friendship.",
      price: 2800,
      image: image_url('revival-herb'),
    },
    {
      id: 49,
      title: "Fresh Water",
      description:
        "Restores 30 HP.",
      price: 200,
      image: image_url('fresh-water'),
    },
    {
      id: 50,
      title: "Soda Pop",
      description:
        "Restores 50 HP.",
      price: 300,
      image: image_url('soda-pop'),
    },
    {
      id: 51,
      title: "Lemonade",
      description:
        "Restores 70 HP.",
      price: 350,
      image: image_url('lemonade'),
    },
    {
      id: 52,
      title: "Lava Cookie",
      description:
        "Heals all major status conditions.",
      price: 200,
      image: image_url('lava-cookie'),
    },
    {
      id: 53,
      title: "Rage Candy Bar",
      description:
        "Heals all major status conditions.",
      price: 300,
      image: image_url('rage-candy-bar'),
    },
    {
      id: 54,
      title: "Moomoo Milk",
      description:
        "Milk with a very high nutrition content. It restores the HP of one Pokémon by 100 points.",
      price: 500,
      image: image_url('moomoo-milk'),
    },
    {
      id: 55,
      title: "Calm Mind (TM04)",
      description:
        "The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.",
      price: 10000,
      image: image_url('tm-psychic'),
    },
    {
      id: 56,
      title: "Bulk Up (TM08)",
      description:
        "The user tenses its muscles to bulk up its body, raising both its Attack and Defense stats.",
      price: 10000,
      image: image_url('tm-fighting'),
    },
    {
      id: 57,
      title: "Venoshock (TM09)",
      description:
        "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned.",
      price: 10000,
      image: image_url('tm-poison'),
    },
    {
      id: 58,
      title: "Blizzard (TM14)",
      description:
        "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
      price: 30000,
      image: image_url('tm-ice'),
    },
    {
      id: 59,
      title: "Hyper Beam (TM15)",
      description:
        "The target is attacked with a powerful beam. The user can't move on the next turn.",
      price: 50000,
      image: image_url('tm-normal'),
    },
    {
      id: 60,
      title: "Light Screen (TM16)",
      description:
        "A wondrous wall of light is put up to reduce damage from special attacks for five turns.",
      price: 10000,
      image: image_url('tm-psychic'),
    },
    {
      id: 61,
      title: "Protect (TM17)",
      description:
        "Enables the user to evade all attacks. Its chance of failing rises if it is used in succession.",
      price: 10000,
      image: image_url('tm-normal'),
    },
    {
      id: 62,
      title: "Roost (TM19)",
      description:
        "The user lands and rests its body. It restores the user's HP by up to half of its max HP.",
      price: 10000,
      image: image_url('tm-flying'),
    },
    {
      id: 63,
      title: "Safeguard (TM20)",
      description:
        "The user creates a protective field that prevents status conditions for five turns.",
      price: 10000,
      image: image_url('tm-normal'),
    },
    {
      id: 64,
      title: "Solar Beam (TM22)",
      description:
        "In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.",
      price: 10000,
      image: image_url('tm-grass'),
    },
    {
      id: 65,
      title: "Smack Down (TM23)",
      description:
        "The user throws a stone or similar projectile to attack an opponent. A flying Pokémon will fall to the ground when it's hit.",
      price: 10000,
      image: image_url('tm-rock'),
    },
    {
      id: 66,
      title: "Thunder (TM25)",
      description:
        "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.",
      price: 30000,
      image: image_url('tm-electric'),
    },
    {
      id: 67,
      title: "Double Team (TM32)",
      description:
        "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.",
      price: 10000,
      image: image_url('tm-normal'),
    },
    {
      id: 68,
      title: "Reflect (TM33)",
      description:
        "A wondrous wall of light is put up to reduce damage from physical attacks for five turns.",
      price: 10000,
      image: image_url('tm-psychic'),
    },
    {
      id: 69,
      title: "Sludge Wave (TM34)",
      description:
        "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those hit.",
      price: 10000,
      image: image_url('tm-poison'),
    },
    {
      id: 70,
      title: "Fire Blast (TM38)",
      description:
        "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.",
      price: 30000,
      image: image_url('tm-fire'),
    },
    {
      id: 71,
      title: "Aerial Ace (TM40)",
      description:
        "The user confounds the target with speed, then slashes. This attack never misses.",
      price: 10000,
      image: image_url('tm-flying'),
    },
    {
      id: 72,
      title: "Facade (TM42)",
      description:
        "This attack move doubles its power if the user is poisoned, burned, or paralyzed.",
      price: 10000,
      image: image_url('tm-normal'),
    },
    {
      id: 73,
      title: "Low Sweep (TM47)",
      description:
        "The user makes a swift attack on the target's legs, which lowers the target's Speed stat.",
      price: 10000,
      image: image_url('tm-fighting'),
    },
    {
      id: 74,
      title: "Steel Wing (TM51)",
      description:
        "The target is hit with wings of steel. This may also raise the user's Defense stat.",
      price: 10000,
      image: image_url('tm-steel'),
    },
    {
      id: 75,
      title: "Focus Blast (TM52)",
      description:
        "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.",
      price: 30000,
      image: image_url('tm-fighting'),
    },
    {
      id: 76,
      title: "Shadow Claw (TM65)",
      description:
        "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
      price: 10000,
      image: image_url('tm-ghost'),
    },
    {
      id: 77,
      title: "Payback (TM66)",
      description:
        "The user stores power, then attacks. If the user moves after the target, this attack's power will be doubled.",
      price: 10000,
      image: image_url('tm-dark'),
    },
    {
      id: 78,
      title: "Giga Impact (TM68)",
      description:
        "The user charges at the target using every bit of its power. The user can't move on the next turn.",
      price: 50000,
      image: image_url('tm-normal'),
    },
    {
      id: 79,
      title: "Rock Polish (TM69)",
      description:
        "The user polishes its body to reduce drag. This can sharply raise the Speed stat.",
      price: 10000,
      image: image_url('tm-rock'),
    },
    {
      id: 80,
      title: "Aurora Veil(TM70)",
      description:
        "This move reduces damage from physical and special moves for five turns. This can be used only in a hailstorm.",
      price: 30000,
      image: image_url('tm-ice'),
    },
    {
      id: 81,
      title: "Stone Edge (TM71)",
      description:
        "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
      price: 30000,
      image: image_url('tm-rock'),
    },
    {
      id: 82,
      title: "Swords Dance (TM75)",
      description:
        "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.",
      price: 10000,
      image: image_url('tm-normal'),
    },
    {
      id: 83,
      title: "Bulldoze (TM78)",
      description:
        "The user strikes everything around it by stomping down on the ground. This lowers the Speed stat of those hit.",
      price: 10000,
      image: image_url('tm-ground'),
    },
    {
      id: 84,
      title: "Dragon Tail (TM82)",
      description:
        "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      price: 10000,
      image: image_url('tm-dragon'),
    },
    {
      id: 85,
      title: "U-turn (TM89)",
      description:
        "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      price: 10000,
      image: image_url('tm-bug'),
    },
    {
      id: 86,
      title: "Adamant Orb",
      description:
        "Increases the power of Dragon- and Steel-type moves when held by Dialga.",
      price: 10000,
      image: image_url('adamant-orb'),
    },
    {
      id: 87,
      title: "Lustrous Orb",
      description:
        "Increases the power of Dragon- and Water-type moves when held by Palkia.",
      price: 10000,
      image: image_url('lustrous-orb'),
    },
    {
      id: 88,
      title: "Griseous Orb",
      description:
        "Increases the power of Dragon- and Ghost-type moves when held by Giratina, and changes it to Origin Forme.",
      price: 10000,
      image: image_url('griseous-orb'),
    },
    {
      id: 89,
      title: "Sky Plate",
      description:
        "	Increases power of Flying-type moves. Changes Arceus' type to Flying.",
      price: 10000,
      image: image_url('sky-plate'),
    },
    {
      id: 90,
      title: "Zap Plate",
      description:
        "Increases power of Electric-type moves. Changes Arceus' type to Electric.",
      price: 10000,
      image: image_url('zap-plate'),
    },
    {
      id: 91,
      title: "Stone Plate",
      description:
        "Increases power of Rock-type moves. Changes Arceus' type to Rock.",
      price: 10000,
      image: image_url('stone-plate'),
    },
    {
      id: 92,
      title: "Iron Plate",
      description:
        "Increases power of Steel-type moves. Changes Arceus' type to Steel.",
      price: 10000,
      image: image_url('iron-plate'),
    },
    {
      id: 93,
      title: "Fist Plate",
      description:
        "Increases power of Fighting-type moves. Changes Arceus' type to Fighting.",
      price: 10000,
      image: image_url('fist-plate'),
    },
    {
      id: 94,
      title: "Dread Plate",
      description:
        "Increases power of Dark-type moves. Changes Arceus' type to Dark.",
      price: 10000,
      image: image_url('dread-plate'),
    },
    {
      id: 95,
      title: "Splash Plate",
      description:
        "Increases power of Water-type moves. Changes Arceus' type to Water.",
      price: 10000,
      image: image_url('splash-plate'),
    },
    {
      id: 96,
      title: "Pixie Plate",
      description:
        "Increases power of Fairy-type moves. Changes Arceus' type to Fairy.",
      price: 10000,
      image: image_url('pixie-plate'),
    },
  ],
  /* coupons skeleton:
    {
      code: "",
      description:
        "",
      condition: 0,
      amount: 1,
    },
  */
  coupons: [
    {
      code: "P0KEM0N",
      description:
        "5% off your order",
      condition: 0,
      amount: 0.05,
    },
    {
      code: "TRA1NER",
      description:
        "10% off your order of ¥50000+",
      condition: 50000,
      amount: 0.1,
    },
    {
      code: "GYMLEADER",
      description:
        "20% off your order of ¥100000+",
      condition: 100000,
      amount: 0.2,
    },
    {
      code: "CHAMP10N",
      description:
        "35% off your order of ¥200000+",
      condition: 200000,
      amount: 0.35,
    },
  ]
};

export default db;