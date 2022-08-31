import React, { useEffect, useState } from "react";
import endpoint from "./endpoint";
import MovieRow from "./components/MovieRow/MovieRow";
import MovieInto from "./components/HomeIntro/MovieInto"
import './App.css';


export default () => {
  const [movieList, setMovieList] = useState([]);
  const [intoData, setIntoData] = useState(null)
  useEffect(() => {
    const loadAll = async () => {
      let list = await endpoint.getHomeList();
      setMovieList(list);
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length) - 1)
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await endpoint.getMovieInfo(chosen.id, 'tv');

      setIntoData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {intoData &&
        <MovieInto item={intoData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};