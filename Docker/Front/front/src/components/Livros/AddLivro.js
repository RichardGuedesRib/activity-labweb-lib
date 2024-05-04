import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddLivro = () => {
  const [livro, setLivro] = useState({
    nome: "",
  });
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [editoras, setEditoras] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/livro", livro);
      navigate("/livro");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getAutores = async () => {
      try {
        const res = await axios.get("http://localhost:8081/autor");
        setAutores(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getCategorias = async () => {
      try {
        const res = await axios.get("http://localhost:8081/categoria");
        setCategorias(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getEditoras = async () => {
      try {
        const res = await axios.get("http://localhost:8081/editora");
        setEditoras(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAutores();
    getCategorias();
    getEditoras();
  }, []);

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">
        Adicionando Livro
      </h2>
      <div className="row">
        <div className="col-md-12">
          <h3>Livro</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label"> Nome:</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Digite o Nome do Livro"
                name="titulo"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Autor:</label>
              <select className="form-control" onChange={handleChange} id="fk_autor" name="fk_autor" >
                <option disabled selected>Selecione um Autor</option>
                {autores.map((autor) => {
                  return (
                    <option value={autor.id} className="mb-3 mt-3">
                      {autor.nome}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Editora:</label>
              <select className="form-control" onChange={handleChange} id="fk_editora" name="fk_editora">
                <option disabled selected>Selecione uma Editora</option>
                {editoras.map((editora) => {
                  return (
                    <option value={editora.id} className="mb-3 mt-3">
                      {editora.descricao}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Categoria:</label>
              <select className="form-control" onChange={handleChange} id="fk_categoria" name="fk_categoria" >
                <option disabled selected>Selecione uma Categoria</option>
                {categorias.map((categoria) => {
                  return (
                    <option value={categoria.id} className="mb-3 mt-3">
                      {categoria.descricao}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Cadastrar
            </button>
            <br />
            <Link to="/autor">Listar Livros</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddLivro;
