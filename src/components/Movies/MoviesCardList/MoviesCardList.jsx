import React from "react";

import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import useRenderMovies from "../../../hooks/useRenderMovies";

function MoviesCardList({
  movies,
  onSaveMovie,
  onDeleteMovie,
  isSaved,
  savedMovies,
  isLoading,
  text
}) {
  const location = useLocation();

  const { amountOfMovies, handleShowMoreBtnClick, isShowMoreBtnVisible } =
  useRenderMovies({ movies });

  // Определение начального количества в зависимости от размера окна браузера
  // const getInitialItemCount = () => {
  //   if (window.innerWidth <= 320) { 
  //     return 5; 
  //   } else if (window.innerWidth <= 768) { 
  //     return 8; 
  //   } else { 
  //     return movies.length; 
  //   }
  // };

  // const [shownItemsCount, setShownItemsCount] = useState(getInitialItemCount());

  // useEffect(() => {
  //   // Функция, вызываемая при изменении размера окна
  //   const handleResize = () => {
  //     setShownItemsCount(getInitialItemCount());
  //   };

  //   window.addEventListener("resize", handleResize);
  
  //   // Обязательно удаляем обработчик события при размонтировании компонента
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const showMore = () => {
  //   setShownItemsCount(shownItemsCount + 5);
  // };


  return (
    <section className="movies-list" aria-label="Секция с фильмами">
            {isLoading && <Preloader />}
      {movies.length === 0 && !isLoading && (
        <h2 className='movies-list__empty-text'>{text}</h2>
      )}
      <ul className='movies-list__container'>
        {movies.map(
          (movie, i) =>
            i < amountOfMovies && (
              <MoviesCard
                key={movie.id ?? movie._id}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                isSaved={isSaved}
                savedMovies={savedMovies}
              />
            )
        )}
      </ul>
      {isShowMoreBtnVisible && location.pathname === "/movies" && (
        <button
          className='movies-list__show-more-btn'
          onClick={handleShowMoreBtnClick}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
