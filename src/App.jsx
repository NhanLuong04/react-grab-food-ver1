import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOfRestaurants from "./pages/ListOfRestaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/restaurants" element={<ListOfRestaurants />} />
          <Route
            path="/restaurant-details/:id"
            element={<RestaurantDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
