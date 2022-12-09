import './App.css';
import Menu from "./components/menu/Menu";
import FeedbackCard from './components/feedback-card/FeedbackCard';
import { propTypes } from 'react-bootstrap/esm/Image'; 
import { Routes, Route } from "react-router-dom"; 
import BasketComponent from "./pages/basket-component/basket-component"; 
import AboutComponent from "./pages/about-component/about-component"; 
import ListComponents from "./pages/list-component/list-components"; 

function App() {

  return (
    <section className="app">
      <header className="app-header">
          <Menu/>
      </header>

      <main>
      <Routes> 
        <Route path="/basket" element={<BasketComponent/>}/> 
        <Route path="/about" element={<AboutComponent/>}/> 
        <Route path="/" element={<ListComponents/>}/> 
      </Routes> 
      <section className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <FeedbackCard card={{id: 1, title: "Наталі", description: "Рекомендую всім! Найкраще агенство з нерухомості Івано-Франківської області!"}}
              otherval={"other"}/>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;