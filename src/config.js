export default {
    API_ENDPOINT: 'https://lit-island-86321.herokuapp.com/api' || process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api', // this works until I figure out how to get my env vars to work on Zeit
    TOKEN_KEY: 'spellbook-client-auth-token'
}