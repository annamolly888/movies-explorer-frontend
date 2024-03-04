import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio section' aria-label='Секция с портфолио'>
      <nav className='portfolio__container'>
        <h3 className='portfolio__heading'>Портфолио</h3>
        <ul>
          <li className='portfolio__link'>
            <Link
              className='portfolio__text'
              to='https://github.com/annamolly888/how-to-learn'
              target='blank'
              rel='noopener noreferrer'
            >
              Статичный сайт <div className='portfolio__arrow'></div>
            </Link>
          </li>
          <li className='portfolio__link'>
            <Link
              className='portfolio__text'
              to='https://github.com/annamolly888/russian-travel'
              target='blank'
              rel='noopener noreferrer'
            >
              Адаптивный сайт <div className='portfolio__arrow'></div>
            </Link>
          </li>
          <li className='portfolio__link'>
            <Link
              className='portfolio__text'
              to='https://github.com/annamolly888/react-mesto-api-full-gha'
              target='blank'
              rel='noopener noreferrer'
            >
              Одностраничное приложение <div className='portfolio__arrow'></div>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;