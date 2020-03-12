import React, { Component } from 'react';


const SpellBookListContext = React.createContext({
    error: null,
    spellbooks: [],
    spells: [],
    setError: () => {},
    clearError: () => {},
    setSpellBookList: () => {},
    setSpells: () => {},
    addSpell: () => {}
});

export default SpellBookListContext;

export class SpellProvider extends Component {
    state = { 
        error: null,
        spellbooks: [],
        spells: [],
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
            setError: this.setError,
            clearError: this.clearError,
            setSpellBookList: this.setSpellBookList,
            setSpells: this.setSpells,
            addSpell: this.addSpell
          };

        return (
            <SpellBookListContext.Provider value={contextValue}>
                {this.props.children}
            </SpellBookListContext.Provider>
        );
      }
}