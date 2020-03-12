import React, { Component } from 'react';

const SpellContext = React.createContext({
    hasError: null,
    spellbooks: [],
    spells: [],
    setError: () => {},
    setSpellBookList: () => {},
    setSpells: () => {},
    addSpell: () => {}
});

export default SpellContext;

export class SpellProvider extends Component {
    state = { 
        error: null,
        spellbooks: [],
        spells: []
      };

      setError = ( error ) => {
        console.error(error);
        this.setState({
          error
        });
      }
    
      setSpellBookList = ( spellbooks ) => {
        this.setState({
          spellbooks
        });
      }
    
      setSpells = ( spells ) => {
        this.setState({
          spells
        });
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
            spellbooks: this.state.spellbooks,
            spells: this.state.spells,
            setSpellBookList: this.setSpellBookList,
            setSpells: this.setSpells
          };

        return (
            <SpellContext.Provider value={contextValue}>
                {this.props.children}
            </SpellContext.Provider>
        );
      }
}