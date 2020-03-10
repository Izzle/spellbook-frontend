// Used for testing the frontend while we build out the backend
const STORE = {
   
   classes: [
        {
            id: 1,
            class_class_name: 'Bard'
        },
        {
            id: 2,
            class_name: 'Cleric'
        },
        {
            id: 3,              
            class_name: 'Druid'
        },
        {
            id: 4,
            class_name: 'Paladin'
        },
        {
            id: 5,
            class_name: 'Sorcerer'
        },
        {
            id: 6,
            class_name: 'Wizard'
        },
        {
            id: 7,
            class_name: 'Warlock'
        }
   ],

   spells: [
       {
           id: 1,
           spell_name: 'Fireball',
           classes: [2, 5, 6, 7], // references the IDs of classes that can use this spell
           level: 3, // level 0 is Cantrip!
           school: 'Evocation',
           range: '150 feet',
           castingTime: '1 action',
           components: 'V, S, M (A tiny ball of bat guano and sulfur)',
           duration: 'Instantaneous',
           description: `A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.`,
           higherLevels: `When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`
       },
       {
            id: 2,
            spell_name: 'Frostbolt',
            classes: [1, 2, 5, 6], // references the IDs of classes that can use this spell
            level: 4, // level 0 is Cantrip!
            school: 'Frost Spec lol',
            range: '120 feet',
            castingTime: '1 action',
            components: 'V, M (A tiny ball of ice)',
            duration: 'Instantaneous',
            description: `A cold iceball flies towards your enemy`,
            higherLevels: `When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd.`
       },
       {
        id: 3,
        spell_name: 'Heal',
        classes: [1, 2, 3, 4], // references the IDs of classes that can use this spell
        level: 0, // level 0 is Cantrip!
        school: 'Restoration?',
        range: '220 feet',
        castingTime: '1 action',
        components: 'V',
        duration: 'Channelled',
        description: `A heal to keep the rabble alive`,
        higherLevels: `When you cast this spell using a spell slot of 5th level or higher, the heal increases by 1d4 for each slot level above 5rd.`
       }
   ],
   spellbooks: [
    {
      id: 1,
      spellbook_name: 'Deck 1: Arcane!',
      spellsInBook: [1, 3, 4],
      classes_selected: [5], // this is OPTIONAL, if a user selects classes for their deck - we'll only show cards for that class when building
      customLayout: {  // not going to do this right now, just trying to figure out my data
        exists: false,
        layout: []
      }
    },
    {
      id: 2,
      spellbook_name: 'Deck 2: Whatever',
      spellsInBook: [2, 4],
      classes_selected: [1, 4], // this is OPTIONAL, if a user selects classes for their deck - we'll only show cards for that class when building
      customLayout: {  // not going to do this right now, just trying to figure out my data
        exists: false,
        layout: []
      }
    },
    {
      id: 3,
      spellbook_name: 'Spellbook 3',
      classes_selected: [6, 7], // this is OPTIONAL, if a user selects classes for their deck - we'll only show cards for that class when building
      customLayout: {  // not going to do this right now, just trying to figure out my data
        exists: false,
        layout: []
      }
    }
  ]
}

export default STORE;