import React from 'react';
import logo from './logo.svg';
import './App.css';
import LivroLista from './LivroLista';
import ControleLivro from './controle/ControleLivros';

function App() {
  const controleLivros = new ControleLivro();

  return (
    <div className="container mt-4">
      <LivroLista livros ={controleLivros.obterLivros()} />
    </div>
  );
}

export default App;
