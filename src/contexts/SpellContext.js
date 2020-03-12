import React from 'react';

export default React.createContext({
    hasError: null,
    spellbooks: [],
    spells: [],
    setError: () => {},
    setSpellBookList: () => {},
    setSpells: () => {},
    addSpell: () => {}
});

// REFACTOR CONTEXT SOON