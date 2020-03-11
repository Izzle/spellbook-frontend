import React from 'react';

export default React.createContext({
    hasError: null,
    spellbooks: [],
    spells: [],
    setSpellBookList: () => {},
    setSpells: () => {},
    addSpell: () => {}
});