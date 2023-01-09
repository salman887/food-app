import Footer from './components/Footer';
import FoodAndDrinks from './pages/FoodListing/FoodAndDrinks';
import HomeScreen from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from './pages/Filters';
import Offers from './pages/Offers';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeScreen />}/>
        <Route  path="/foodAndDrinks" element={<FoodAndDrinks />} />
        <Route  path="/filters" element={<Filters />} />
        <Route path="/offers" element={<Offers/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
