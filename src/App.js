import { Routes , Route} from "react-router-dom";
import Splash from './pages/Splash';
import GameBoard from "./pages/GameBoard";
import Instructions from "./pages/Instructions";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element=<Splash/>
      />
      
      <Route
        path='/gameboard'
        element=<Layout><GameBoard/></Layout>
        
      />
      <Route
        path='/instructions'
        element=<Layout><Instructions/></Layout>
      />
    </Routes>
  );
}

export default App;
