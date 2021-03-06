import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(ques1.png)"}}>
        <Header />

        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
