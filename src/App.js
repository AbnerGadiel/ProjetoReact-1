import './App.css';

import Card from './Components/Card';

function App() {
  const Biografia = "Aluno de Tecnologia...";
  return (
    <div>
      <header>
        <Card Nome= "Abner Gadiel"
        Biografia={Biografia}/>
        
      </header>
      <main>
        <section>
          <h1>Projetos</h1>
        </section>
      </main>
      <footer>
        <p>Desenvolvido por: Abner Gadiel - 2025</p>
      </footer>
    </div>
  );
}

export default App;
