export interface Pokemon {
    id: number;
    price:number;
    name: string;
    sprites: {
      front_default: string;
      other: {
        home: {
          front_default: string;
        };
      };
    };
    types: {
      type: {
        name: string;
      };
    }[];
  }

  export interface Pokemons {
    id: number;
    name: string;
    url: string;
  }