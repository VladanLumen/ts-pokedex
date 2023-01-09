import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./OnePokemon.css";

type OnePokemonProps = {
  name: string;
  order: number;
  weight: number;
  height: number;
  moves: {
    17: {
      move: {
        name: string;
      };
    };
  };
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
};

const OnePokemon = () => {
  const [onePoke, setOnePokemon] = useState<OnePokemonProps>();
  const { id } = useParams();

  const getPokemonData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setOnePokemon(res.data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);
  console.log(onePoke);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="onePoke">
        <div>
          <img
            src={onePoke?.sprites.other.home.front_default}
            style={{ width: "15rem" }}
          />
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <h4>Base info</h4>
          <h2>Name: {onePoke?.name}</h2>
          <p>Height: {onePoke?.height}</p>
          <p>Weight: {onePoke?.weight}</p>
          <p>
            Special move: <strong> {onePoke?.moves[17].move.name}</strong>
          </p>
        </div>
      </div>
      <Link to="/">
        <Button>GO BACK</Button>
      </Link>
    </div>
  );
};

export default OnePokemon;
