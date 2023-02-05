import Footer from './components/Footer';
import FoodAndDrinks from './pages/FoodListing/FoodAndDrinks';
import HomeScreen from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from './pages/Filters';
import Offers from './pages/Offers';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/foodAndDrinks" element={<FoodAndDrinks />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/filters" element={<Filters />} />
        <Route path="/offers" element={<Offers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
