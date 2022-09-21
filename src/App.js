import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;


// import React from 'react'
// import main from './pages/main';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// const App = () => {

//   <Router>
//   <Routes>
//       <Route exact path="/">
//   <main />
//       </Route>

//       <Route exact path="/login">
//   <main />
//       </Route>

//       <Route exact path="/signup">
//   <main />
//       </Route>
//   </Routes>
//   </Router>
// };

// export default App;