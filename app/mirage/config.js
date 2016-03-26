export default function () {
  let pokemons = [{
    type: 'pokemons',
    id: 3,
    attributes: {
      name: 'Ololo',
      abilities: 'Fire',
      national_id: 12,
      types: [
        {
          name: 'pokemon',
          resource_uri: "/api/v1/type/1/"
        }
      ],
      attack: 100,
      defense: 26,
      hp: 234,
      sp_atk: 231,
      sp_def: 198,
      speed: 300,
      weight: 56,
      total: 954
    }
  }, {
    type: 'pokemons',
    id: 1,
    attributes: {
      name: 'Charmanderka',
      abilities: 'Fire',
      national_id: 12,
      types: [
        {
          name: 'pokemon',
          resource_uri: "/api/v1/type/1/"
        },
        {
          name: 'pikachu',
          resource_uri: "/api/v1/type/2/"
        },
        {
          name: 'charma',
          resource_uri: "/api/v1/type/10/"
        },
        {
          name: 'fara',
          resource_uri: "/api/v1/type/11/"
        }
      ],
      attack: 100,
      defense: 26,
      hp: 234,
      sp_atk: 231,
      sp_def: 198,
      speed: 300,
      weight: 56,
      total: 954
    }
  }, {
    type: 'pokemons',
    id: 2,
    attributes: {
      name: 'Pika',
      abilities: 'Fire',
      national_id: 12,
      types: [
        {
          name: 'pokemon',
          resource_uri: "/api/v1/type/1/"
        }
      ],
      attack: 100,
      defense: 26,
      hp: 234,
      sp_atk: 231,
      sp_def: 198,
      speed: 300,
      weight: 56,
      total: 954
    }
  }];

  let types = [
    {
      type: 'types',
      id: 1,
      name: "pokemon",
      resource_uri: "/api/v1/type/1/"
    }];
  this.get('/pokemons', function (db, request) {
    if (request.queryParams.type !== undefined) {
      let filteredPokemons = pokemons.filter(function (i) {
        return i.attributes.type.toLowerCase().indexOf(request.queryParams.type.toLowerCase()) !== -1;
      });
      return {data: filteredPokemons};
    } else {
      return {data: pokemons};
    }

  });

  this.get('/types', function (db, request) {
    return {data: types};
  });

  this.get('/pokemons/:id', function (db, request) {
    let id = request.params.id;
    let value = pokemons.filter(function (i) {
      return i.id != id;
    });
    return {data: value[0]};
  });
}
