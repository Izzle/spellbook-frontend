import config from '../config';

const SpellApiService = {
  // To GET all spells from /api/spells
  getAllSpells() {
      return fetch(`${config.API_ENDPOINT}/spells`, {
          headers: { // If I add an AUTH token you'd put it in the headers
          },
      })
        .then(res => {
            return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
        })
  },
  // To GET a specific spell at /spells/:id
  getSpellById(spellId) {
    return fetch(`${config.API_ENDPOINT}/spells/${spellId}`, {
      headers: {
      },
  })
    .then(res => {
        return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
    })
  },
  // To GET all spellbooks at /spellbooks
  getAllSpellBooks() {
    return fetch(`${config.API_ENDPOINT}/spellbooks`, {
      headers: { // If I add an AUTH token you'd put it in the headers
      },
    })
      .then(res => {
          return (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json();
      })
  },
  // To GET a specific spellbook at /spellbooks/:id
  getSpellBookById(spellbookId) {
    return fetch(`${config.API_ENDPOINT}/spellbooks/${spellbookId}`, {
      headers: {
      },
  })
    .then(res => {
        return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
    })
  },
  // To GET all spells in a specific spellbook at /spellbooks/:id/spells
  getAllSpellsInSpellbookById(spellbookId) {
    return fetch(`${config.API_ENDPOINT}/spellbooks/${spellbookId}/spells`, {
      headers: {
      },
  })
    .then(res => {
        return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
    })
  },
  // To POST a new spell to /spells
  postSpell(newSpell) {
    return fetch(`${config.API_ENDPOINT}/spells`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newSpell)
    })
    .then(res => {
      return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
    })
  }
};

export default SpellApiService;