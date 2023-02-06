import Footer from './components/Footer';
import FoodAndDrinks from './pages/FoodListing/FoodAndDrinks';
import HomeScreen from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from './pages/Filters';
import Offers from './pages/Offers';
import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
export const tokekn = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNjM2JiMDEwZDBiMGQ3YmZhMjJjZjMxNzE5MTlmMTI2NGY1MDY0NTZmMmVmZGIyNzMxNzllODhlZjc4OTFjOTljZjIzNWRiOWE0NWVmNGYyIn0.eyJhdWQiOiI4IiwianRpIjoiM2MzYmIwMTBkMGIwZDdiZmEyMmNmMzE3MTkxOWYxMjY0ZjUwNjQ1NmYyZWZkYjI3MzE3OWU4OGVmNzg5MWM5OWNmMjM1ZGI5YTQ1ZWY0ZjIiLCJpYXQiOjE2NzU3MTYyNjgsIm5iZiI6MTY3NTcxNjI2OCwiZXhwIjoxNzA3MjUyMjY4LCJzdWIiOiIyODA1NzQiLCJzY29wZXMiOltdfQ.wp9hvOqy8Y6Te2A7fIHZnNj-3akUJdM3OmYkOFwynhu5ipCuJ2vx0iIhLLeVieIvq2oR1zpXUkKTW3LHhnEhIgOqJSkpN8rBrHzW9uqKJLqqZ9xicmj473gQRYmJkZ7PcjCRS3V495iLq2p-08a4-7UDjF8g3ii1PoehTLWHZ403XSqeP694dFuN7y4vN0OKeD3UciuQzapFBtDwW9xnspqMQHP8Pw9S8E1lk4_ga-DftOTjHtvawXSWb8rjAofncJGqlcb19wZHZvJfoGaYqRDQDkFb7DGVjH_9c2Vi0ZeUIg7kCmY45EMwwd0nCajafV7-JK2KkB3z33M2YOTM8nLMFmBl9GJTjHHZgptwr7Fp2mNbbF53LMqXVzCwo-gpWBh0gb4veTGmSoUhNyW2FvPzuEg9V8gl7mPk0y5Joi6z3gGFdyfO_cN778QSQFoIobQZa-oyemF4E8Cxg_LHZJWTHPpj2iHgCgw6Te0ivrSx1AiOD6oT4RSmqwDVCZjvE-ZIs5C0aJFEFKFyqvSvG5dC4j8BtceUpW4kWHfPXeKxcv-diOozZ_VRd11nx09VGnfrZqiYI9XRjjtzy6rKzbpRISisAAw0MpKl9MyTQHSmtrJYohZxxZWGkEnVXLmV2UeWsE7fb259uuXcuQqG-Jf_Z85Ae56vGwM5VpYRKac"


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
