import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Pokemon, Pokemons } from "./types";
import Header from "../component/Header/Header";
import { useCart } from "react-use-cart";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>("");

  const {addItem} = useCart()


  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  const sortedPokemon = pokemons.sort(function (a, b) {
    return a.id - b.id;
  });

  const filteredPokemons = sortedPokemon.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <div className="search-bar">
        <input
          type="text"
          placeholder="search for pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Container>
        <Row>
          {filteredPokemons.sort().map((item) => {
            return (
              <Card key={item.id}
                style={{
                  width: "15rem",
                  margin: "0.5rem",
                  textAlign: "center",
                  boxShadow: "1px 1px 1px 1px black",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.sprites.other.home.front_default}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Button onClick={() => addItem({...item, id: item.id.toString(), price: item.price})}>Add to favorite</Button>
                  <Link to={`/${item.id}`}>
                    <Button variant="info">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default App;





