import React, { Component } from 'react';


const SpellBookListContext = React.createContext({
    error: null,
    spellbookList: [],
    setError: () => {},
    clearError: () => {},
    setSpellBookList: () => {},
});

export default SpellBookListContext;

export class SpellBookListProvider extends Component {
    state = { 
        error: null,
        spellbookList: []
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
    
      setSpellBookList = ( spellbookList ) => {
        this.setState({
          spellbookList
        });
      }
    
      render() {
        const contextValue = {
            spellbookList: this.state.spellbookList,
            setError: this.setError,
            clearError: this.clearError,
            setSpellBookList: this.setSpellBookList,
          };

        return (
            <SpellBookListContext.Provider value={contextValue}>
                {this.props.children}
            </SpellBookListContext.Provider>
        );
      }
}