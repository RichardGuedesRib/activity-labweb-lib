import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const UpdateLivro = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState({});
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
      await axios.put(`http://localhost:8081/livro/${id}`, livro);
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

    axios
      .get("http://localhost:8081/livro/" + id)
      .then((res) => {
        //console.log("Valor do parametro"+id);
        console.log(res.data);
        setLivro(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Formulário para Editar o Livro</h1>
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
                value={livro.titulo}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Autor:</label>
              <select className="form-control" onChange={handleChange} id="fk_autor" name="fk_autor">
                <option
                  selected
                  value={autores.find((item) => item.nome === livro.autor)?.id}
                >
                  {livro.autor}
                </option>
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
                <option
                  selected
                  value={
                    editoras.find((item) => item.descricao === livro.editora)
                      ?.id
                  }
                >
                  {livro.editora}
                </option>
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
              <select className="form-control" onChange={handleChange} id="fk_categoria" name="fk_categoria">
                <option
                  selected
                  value={
                    categorias.find(
                      (item) => item.descricao === livro.categoria
                    )?.id
                  }
                >
                  {livro.categoria}
                </option>
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
              Alterar
            </button>
            <br />
            <Link to="/livro">Listar Livros</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateLivro;
