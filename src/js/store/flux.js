// flux.js 4:35PM
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            storecharacters: [], // Lista de personajes con detalles
            storecharacterswithUid: [],
            storecharacterswithProperties: [],
            singlecharacter: null
        },
        actions: {
            getCharactersWithUid: () => {
                fetch('https://www.swapi.tech/api/people')
                  .then((resp) => resp.json())
                  .then((data) => {
                    setStore({storecharacterswithUid: data.results});
                    console.log("Array de characters (getCharactersWithUid): ", data.results);
                  })
                  .catch((error) => console.log(error));
              },
              fetchCharactersWithProperties: () => {
                const fetchedCharacters = [];
                for (let index = 1; index <= 10; index++) {
                  fetch(`https://www.swapi.tech/api/people/${index}`)
                    .then((resp) => resp.json())
                    .then((data) => {
                      fetchedCharacters.push(data.result.properties);
                      if (fetchedCharacters.length === 9) {
                        setStore({storecharacterswithProperties: fetchedCharacters});
                        console.log("Fetched characters (fetchCharactersWithProperties): ", fetchedCharacters);
                      }
                    })
                    .catch((error) => console.log(error));
                }
              },
              getCharacter: (contactID) => {
                fetch(`https://www.swapi.tech/api/people/${contactID}`)
                .then((resp) => resp.json())
                .then((data) => {
                  setStore({singlecharacter: data.result.properties})
                  console.log("este es el character con el contactid numero: ", contactID, " y estas son sus propiedades:  ", data.result.properties)
                })
                .catch((error) => console.log(error));
              }
        }
    };
};

export default getState;
