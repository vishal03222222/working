
import './App.css';
import Bargraph from './barchart';
import ChartExample from './ChartExample';
import Donut from './Donut';
import Piechart from './piechart';

function App() {
  return (
    
    <div className="App">
      <ul style={{border:"2px solid red"}}><h4>GRAPHS</h4></ul>
      <ChartExample />
      <hr/>
      <div>
        <Piechart />
      </div>
      <hr/>
      <div>
        <Donut />
      </div>
      <Bargraph/>
     


    </div>
  );
}

export default App;
