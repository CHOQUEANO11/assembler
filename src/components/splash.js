import React from 'react';
import { Link } from 'react-router-dom';
// import Img from '../resources/img/seo/assembler.jpeg';

export default () => (
  <section style={{ backgroundColor: 'blue', opacity: 0.6 }} className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Assembléia de Deus
        </h1>
        <h2 className="subtitle">
          Templo Alameda Ananindeua
        </h2>
        <Link to="/home" className="button">Vamos começar</Link>
      </div>
    </div>
  </section>
);
