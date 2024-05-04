import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container container-home">
      <header className="header-home">
        <span className="title-home">Entrega de Projeto</span>
        <span className="subtitle-home">
          Integração de Backend Node.js com Frontend React.js
        </span>
      </header>

      <section className="section-buttons">

       <Link to="/categoria" className="button-decorate">
        <span className="button-navigate">
          <span className="button-navigate-icon">
            <span class="material-symbols-outlined" style={{ fontSize: 100 }}>
              category
            </span>
          </span>
          <span className="button-navigate-text">Categoria</span>
        </span>
        </Link>

        <Link to="/editora" className="button-decorate">
        <span className="button-navigate">
          <span className="button-navigate-icon">
            {" "}
            <span class="material-symbols-outlined" style={{ fontSize: 100 }}>
             photo_prints
            </span>
          </span>
          <span className="button-navigate-text">Editora</span>
        </span>
        </Link>

        <Link to="/autor" className="button-decorate">
        <span className="button-navigate">
          <span className="button-navigate-icon">
            {" "}
            <span class="material-symbols-outlined" style={{ fontSize: 100 }}>
              group
            </span>
          </span>
          <span className="button-navigate-text">Autor</span>
        </span>
        </Link>

        <Link to="/livro" className="button-decorate">
        <span className="button-navigate">
          <span className="button-navigate-icon">
            {" "}
            <span class="material-symbols-outlined" style={{ fontSize: 100 }}>
              menu_book
            </span>
          </span>
          <span className="button-navigate-text">Livro</span>
        </span>
        </Link>


      </section>
    </section>
  );
}
