const initState = {
  characters: [
    {
      id: 1,
      name: 'Garett',
      initialClass: 'Fighter',
      summaryLore: "Prince of the Kingdom of Baltia and protagonist of Warsong.",
      tier2Classes: {
        class1: 'Knight',
        class2: 'Lord'
      },
      tier3Classes: {
        class1: 'Grand Knight',
        class2: 'Knight Master',
        class3: 'Magic Knight',
        class4: 'King'
      }
    },
    {
      id: 2,
      name: 'Calais',
      initialClass: 'Warlock',
      summaryLore: "Mage of Baltia. She is a magic using ally to main character in Warsong.",
      tier2Classes: {
        class1: 'Wizard',
        class2: 'Cleric'
      },
      tier3Classes: {
        class1: 'Arch Mage',
        class2: 'Magic Knight',
        class3: 'Saint',
        class4: 'High Priestess',
      },
      secretClass: {
        class: 'Ranger'
      }
    },
    {
      id: 3,
      name: 'Mina',
      initialClass: 'Cleric',
      summaryLore: "Cleric and love interest to the main character of Warsong.",
      tier2Classes: {
        class1: 'Warlock',
        class2: 'Priestess'
      },
      tier3Classes: {
        class1: 'Bishop',
        class2: 'Wizard',
        class3: 'Saint',
        class4: 'High Priestess'
      },
      tier4Classes: {
        class1: 'Arch Mage',
        class2: 'Magic Knight',
      },
      secretClass: {
        class: 'Ranger'
      }
    },
    {
      id: 4,
      name: 'Sabra',
      initialClass: 'Fighter',
      summaryLore: "A fighter who tried to protect the king at the beginning of the game Warsong. Becomes an ally to the main character.",
      tier2Classes: {
        class1: 'Knight',
        class2: 'Lord'
      },
      tier3Classes: {
        class1: 'Grand Knight',
        class2: 'Knight Master',
        class3: 'Dragon Knight',
        class4: 'Magic Knight'
      },
      secretClass: {
        class: 'Ranger'
      }
    },
    {
      id: 5,
      name: 'Tiberon',
      initialClass: 'Crocodile Knight',
      summaryLore: "Former pirate who became a knight under the King of Baltia. Becomes an ally to main character in game Warsong.",
      tier2Classes: {
        class1: 'Knight',
        class2: 'Serpent Knight'
      },
      tier3Classes: {
        class1: 'Knight Master',
      },
    },
    {
      id: 6,
      name: 'Thorne',
      initialClass: 'Fighter',
      summaryLore: "Personal Guard to Duke Carleon and becomes an ally to the main character in Warsong.",
      tier2Classes: {
        class1: 'Knight',
        class2: 'Lord'
      },
      tier3Classes: {
        class1: 'Knight Master',
        class2: 'Magic Knight',
      },
    },
    {
      id: 7,
      name: 'Bayard',
      initialClass: 'Fighter',
      summaryLore: "Commander of the Anzel Fortress. Becomes an ally to the main character in Warsong.",
      tier2Classes: {
        class1: 'Knight',
        class2: 'Lord'
      },
      tier3Classes: {
        class1: 'Knight Master',
        class2: 'Magic Knight',
      },
    },
    {
      id: 8,
      name: 'Carleon',
      initialClass: 'Fighter',
      summaryLore: "A ally to the kingdoms of Baltia and Alfador. Becomes ally of main character in Warsong.",
      tier2Classes: {
        class1: 'Knight',
        class2: 'Lord'
      },
      tier3Classes: {
        class1: 'Knight Master',
        class2: 'Magic Knight',
      },
    },
    {
      id: 9,
      name: 'Baldarov',
      initialClass: 'Sword Master',
      summaryLore: "Sword Master and bodyguard to the main character in Warsong.",
    },
    {
      id: 10,
      name: 'Lance',
      initialClass: 'Dragon Knight',
      summaryLore: "Once a strong enemy, later on he joins to the main character's side.",
    }
  ],

  items: [
    {
      id: 1,
      name: 'Knife',
      attack: 1,
      magic: 0,
      defense: 0,
      price: 60,
      src: 'Knife'
    },
    {
      id: 2,
      name: 'Hammer',
      attack: 3,
      magic: 0,
      defense: 0,
      price: 250,
      src: 'Hammer'
    },
    {
      id: 3,
      name: 'Great Sword',
      attack: 5,
      magic: 0,
      defense: 0,
      price: 500,
      src: 'GreatSword'
    },
    {
      id: 4,
      name: 'Wand',
      attack: 0,
      magic: 1,
      defense: 0,
      price: 80,
      src: 'Wand'
    },
    {
      id: 5,
      name: 'Large Rod',
      attack: 0,
      magic: 3,
      defense: 0,
      price: 600,
      src: 'LargeRod'
    },
    {
      id: 6,
      name: 'Helm',
      attack: 0,
      magic: 0,      
      defense: 1,
      price: 50,
      src: 'Helm'
    },
    {
      id: 7,
      name: 'Shield',
      attack: 0,
      magic: 0,      
      defense: 3,
      price: 300,
      src: 'Shield'
    }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;