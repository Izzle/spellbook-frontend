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
                        : res.json()
        })
  },
  getSpell(spellId) {},
  postSpell(newSpell) {
    
  }
};

export default SpellApiService;