//import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="abcd">My first react app</div>
      <p className="bg-success">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi facilis
        voluptas quisquam inventore officia maiores, laboriosam vero nihil aut
        debitis.
      </p>

      <button>Click Here</button>
      <Footer />
    </>
  );
}

export default App;
