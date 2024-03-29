import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='search-form' aria-label='Секция с поиском фильмов'>
      <form className='search-form__container' onSubmit={handleSubmit}>
        <input placeholder='Фильм' type='text' className='search-form__input' />
        <button className='search-form__button' type='submit'></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;