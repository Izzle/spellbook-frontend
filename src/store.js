// Used for testing the frontend while we build out the backend
const STORE = {
   
   classes: [
        {
            id: 1,
            name: 'Bard'
        },
        {
            id: 2,
            name: 'Cleric'
        },
        {
            id: 3,              
            name: 'Druid'
        },
        {
            id: 4,
            name: 'Paladin'
        },
        {
            id: 5,
            name: 'Sorcerer'
        },
        {
            id: 6,
            name: 'Wizard'
        },
        {
            id: 7,
            name: 'Warlock'
        }
   ],

   spells: [
       {
           id: 1,
           name: 'Fireball',
           classes: [2, 5, 6, 7], // references the IDs of classes that can use this spell
           level: 3, // level 0 is Cantrip!
           school: 'Evocation',
           range: '150 feet',
           castingTime: '1 action',
           components: 'V, S, M (A tiny ball of bat guano and sulfur',
           duration: 'Instantaneous',
           description: `A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.`,
           higherLevels: `When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`
       },
       {},
       {},
       {},
       {}
   ],
   spellbooks: [
       {
           id: 1,
           name: 'Deck 1',
           spellsInBook: [1, 3, 4],
           customLayout: {  // not going to do this right now, just trying to figure out my data
               exists: false,
               layout: []
           }
       },
       {
            id: 2,
            name: 'Deck 2',
            spellsInBook: [2, 4],
            customLayout: {  // not going to do this right now, just trying to figure out my data
                exists: false,
                layout: []
             }
       },
       {
            id: 3,
            ownerId: 214114141, // techinically when I made user accounts, they should be able to save their own spellbooks
            name: 'Spellbook 3',
            spellsInBook: [2, 4],
            customLayout: {  // not going to do this right now, just trying to figure out my data
                exists: false,
                layout: []
            }
       }
   ]
}
