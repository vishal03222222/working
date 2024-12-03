import Companies from "./utils/companies/Companies";
import Header from "./utils/Header";
import Hero from "./utils/Hero";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
    </div>
  )
    
}

export default App;
