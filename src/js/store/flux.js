// flux.js 
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            storecharacterswithUid: [],
            storecharacterswithProperties: [],
            singlecharacter: null,
            vehicleswithUid: [],
            vehicleswithProperties: [],
            vechicle: null,
            planetswithUid: [],
            planetswithProperties: [],
            planet: null,
            favorites: []
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
                      if (fetchedCharacters.length === 10) {
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
              },
              getVehiclesWithUid: async () => {
                try {
                  let response = await fetch('https://www.swapi.tech/api/vehicles')
                  let data = await response.json()
                  setStore({vehicleswithUid: data.results});
                  console.log("Array de vehicles (getVehicles): ", data.results);
                } catch (error) {
                  console.log("aqui esta el error: ", error)
                }
              },
              fetchVehiclesWithProperties: () => {
                const fetchedVehicles = [];
                const vehicleIds = [4, 6, 7, 8, 14, 16, 18, 20, 24]; // IDs específicos de los vehículos
                vehicleIds.forEach((id) => {
                  fetch(`https://www.swapi.tech/api/vehicles/${id}`)
                      .then((resp) => resp.json())
                      .then((data) => {
                          fetchedVehicles.push(data.result.properties);
                          if (fetchedVehicles.length === vehicleIds.length) {
                              setStore({ vehicleswithProperties: fetchedVehicles });
                              console.log("Fetched vehicles (fetchVehiclesWithProperties): ", data);
                          }
                      })
                      .catch((error) => console.log(error));
              });
            },
            getVehicle: (vehicleID) => {
              fetch(`https://www.swapi.tech/api/vehicles/${vehicleID}`)
              .then((resp) => resp.json())
              .then((data) => {
                setStore({vechicle: data.result.properties})
                console.log("este es el Vehicle con el vehicleID numero: ", vehicleID, " y estas son sus propiedades:  ", data.result.properties)
              })
              .catch((error) => console.log(error));
            },
            getPlanetsWithUid: async () => {
              try {
                let response = await fetch('https://www.swapi.tech/api/planets')
                let data = await response.json()
                setStore({planetswithUid: data.results});
                console.log("Array de planets (getPlanetsWithUid): ", data.results);
              } catch (error) {
                console.log("aqui esta el error: ", error)
              }
            },
            fetchPlanetsWithProperties: () => {
              const fetchedPlanets = [];
              for (let index = 1; index <= 10; index++) {
                fetch(`https://www.swapi.tech/api/planets/${index}`)
                  .then((resp) => resp.json())
                  .then((data) => {
                    fetchedPlanets.push(data.result.properties);
                    if (fetchedPlanets.length === 10) {
                    setStore({ planetswithProperties: fetchedPlanets });
                      console.log("Fetched planets (fetchPlanetsWithProperties): ", fetchedPlanets);
                    }
                  })
                  .catch((error) => console.log(error));
              }
            },
            updateFavorites: (objectname) => {
              const store = getStore();
              if(store.favorites.includes(objectname)) {
                setStore({favorites: store.favorites.filter(name => name !== objectname)})//Si incluye el nombre, lo elimina (filtra)
              } else {
                setStore({favorites: [...store.favorites, objectname]}) //Si no incluye el nombre, lo agrega
              }
            },
            getPlanet: (planetID) => {
              fetch(`https://www.swapi.tech/api/planets/${planetID}`)
              .then((resp) => resp.json())
              .then((data) => {
                setStore({planet: data.result.properties})
                console.log("este es el Planet con el planetID numero: ", planetID, " y estas son sus propiedades:  ", data.result.properties)
              })
              .catch((error) => console.log(error));
            },
            
        }
    };
};

export default getState;
