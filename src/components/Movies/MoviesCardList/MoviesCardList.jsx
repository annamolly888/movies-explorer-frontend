import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesList, savedMoviesList } from "../../../utils/constants";

function MoviesCardList() {
  const location = useLocation();

  // Определение начального количества в зависимости от размера окна браузера
  const getInitialItemCount = () => {
    if (window.innerWidth <= 320) { 
      return 5; 
    } else if (window.innerWidth <= 768) { 
      return 8; 
    } else { 
      return moviesList.length; 
    }
  };

  const [shownItemsCount, setShownItemsCount] = useState(getInitialItemCount());

  useEffect(() => {
    // Функция, вызываемая при изменении размера окна
    const handleResize = () => {
      setShownItemsCount(getInitialItemCount());
    };

    window.addEventListener("resize", handleResize);
  
    // Обязательно удаляем обработчик события при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMore = () => {
    setShownItemsCount(shownItemsCount + 5);
  };


  return (
    <section className="movies-list" aria-label="Секция с фильмами">
      {location.pathname === "/movies" ? (
        <>
          <ul className="movies-list__container">
            {moviesList.slice(0, shownItemsCount).map((movie, i) => (
              <MoviesCard key={i} movie={movie} />
            ))}
          </ul>
          <button onClick={showMore} className="movies-list__show-more-btn">
            Ещё
          </button>
        </>
      ) : (
        <ul className="movies-list__container">
          {savedMoviesList.map((movie, i) => (
            <MoviesCard key={i} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
