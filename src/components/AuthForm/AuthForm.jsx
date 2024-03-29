import React from "react";
import "./AuthForm.css";
import { Link } from "react-router-dom";

function AuthForm({ children, title, isLoggedText, authPath, authWay }) {
  return (
    <main className='auth'>
      <div className='auth__container'>
        <Link to='/' className='auth__logo'></Link>
        <h1 className='auth__heading'>{title}</h1>
        {children}
        <p className='auth__is-logged-text'>
          {isLoggedText}
          <Link to={authPath} className='auth__link'>
            {authWay}
          </Link>
        </p>
      </div>
    </main>
  );
}

export default AuthForm;