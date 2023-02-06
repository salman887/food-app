import Footer from './components/Footer';
import FoodAndDrinks from './pages/FoodListing/FoodAndDrinks';
import HomeScreen from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from './pages/Filters';
import Offers from './pages/Offers';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
export const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJiYjMwNjg0ZDE4N2FlODEzMjQ5NWRmYTMzMmVjNjhhN2I5NWZkYWYwMWVkNDk1YzMyYzJlYmNmYWVmMTI1MzE2M2Y5NzAzYTFkODE0MTgyIn0.eyJhdWQiOiI4IiwianRpIjoiYmJiMzA2ODRkMTg3YWU4MTMyNDk1ZGZhMzMyZWM2OGE3Yjk1ZmRhZjAxZWQ0OTVjMzJjMmViY2ZhZWYxMjUzMTYzZjk3MDNhMWQ4MTQxODIiLCJpYXQiOjE2NzU3MTkzNDEsIm5iZiI6MTY3NTcxOTM0MSwiZXhwIjoxNzA3MjU1MzQxLCJzdWIiOiIyODA1NzQiLCJzY29wZXMiOltdfQ.hACK9s3y_6A6TMTl2GWFsVRNJRH-8gCQyDm-qUrE1Bq5Ju1uP3HVN1C8sZoW1rjMY898QtkbTvKCRW0V5zD5YDky5HYGrtQU_z_5cWRsOdnRBK0amwlttuKuRlX4DLuAj6kupk6ewkdVV91qhPgQXA19YBqiwAvOhv4BK3FKLSuBOJWimw3yCWHbUMlndKfE191f2Wq4L2DiSalIhXx9wohYNPyCjNhul1rrBHaGDypaE7WM7yd7vQiiSFXU-eQCfqkcMjb0_a3cFx6y1Jl-kBQsjuj7NNOubNVSJWTmjLeRAJvWWnOkVlbVsZ-jA38fx0uQ9hZDdXRpQuy_yJ1ucU4IWTo6hM85UDF1jylyU1lBaZwVs3w88xGykN1w2PlHFnEO9CAOd4I-9RLZiJAcdbt1w955fsqI8HfMU76z8R7vVscn4WHY4HCKkto0FiNu_1yFpWSy8VEmdh6JkvXyOK9TCfhr53utshPEMM0NmN-VSCKkZyGxmIuUuYtjq3wxcDWmArf0o8O9yDg0X8JNri3kExPfhvGN_qvHkAJx3BtRLsCogufPpAf1BAsMTLFnfAklSpfR-oqsrzqvivaW3nfgzOaDbj7owl-jNvvwn8mt92ShjxMuSTAtWnujfh6tzsN17UTcNVYxS7H-vISflGqdpqwsqiBb59f6-3Ncs2M`


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/foodAndDrinks/:id" element={<FoodAndDrinks />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/filters" element={<Filters />} />
        <Route path="/offers" element={<Offers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
