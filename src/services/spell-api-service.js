import config from '../config';

const SpellApiService = {
  getAllSpells() {
      return fetch(`${config.API_ENDPOINT}/spells`, {
          headers: {
          },
      })
        .then(res => {
            return (!res.ok)
                        ? res.json().then(e => Promise.reject(e))
                        : res.json();
        })
  },
  getSpell(spellId) {},
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