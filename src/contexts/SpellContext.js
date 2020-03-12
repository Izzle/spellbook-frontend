import React, { Component } from 'react';

export const nullSpellbook = {
    placeholderKey: 'placeholder value' // NOT COMPLETE OBVIOUSLY LOL
};

const SpellContext = React.createContext({
    error: null,
    spellbook: nullSpellbook, // may need to become nullSpellbook
    spells: [],
    setError: () => {},
    clearError: () => {},
    setSpellBook: () => {},
    setSpells: () => {},
    addSpell: () => {}
});

export default SpellContext;

export class SpellProvider extends Component {
    state = { 
        error: null,
        spellbook: nullSpellbook, // may need to become nullSpellbook
        spells: []
      };

      setError = ( error ) => {
        console.error(error);
        this.setState({
          error
        });
      }

      clearError = () => {
        this.setState({ 
            error: null 
        });
      }
    
      setSpellBook = ( spellbook ) => {
        this.setState({
          spellbook
        });
      }
    
      setSpells = ( spells ) => {
        this.setState({
          spells
        });
      }

      clearSpellbook = () => {
          this.setSpellBook(nullSpellbook);
          this.setSpells([]);
      }

      addSpell = spell => {
        // Adds a spell to state / context
        this.setState([
          ...this.state.spells,
          spell
        ]);
      }
    

      render() {
        const contextValue = {
            spellbook: this.state.spellbook,
            spells: this.state.spells,
            setError: this.setError,
            clearError: this.clearError,
            setSpellBook: this.setSpellBook,
            setSpells: this.setSpells,
            addSpell: this.addSpell
          };

        return (
            <SpellContext.Provider value={contextValue}>
                {this.props.children}
            </SpellContext.Provider>
        );
      }
}