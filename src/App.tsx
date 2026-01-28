import './App.css'
import "./i18n";
import Header from './components/Header'
import Home from './components/Home';
import Links from './components/Links';
import Project from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
    <>
      < Links />
      <div>
        <Header />
        <Home />
        <Project />
        <Skills/>
      </div>
    </>
  )
}

export default App
