import { powergrid } from './data/powergrid';

function App() {
  console.log(powergrid)
  return (
    <div className="App">
      <h1>Marvel Fantasy Battle</h1>
      <div>{powergrid.map((x) => (
        <ul key={x.id}>
          <li>Name: {x.name}</li>
          <li>id: {x.id}</li>
          <li>Draft Value: {x.draft_value}</li>
          <li>Mele: {x.mele_effectiveness}</li>
        </ul>
        
      ))}</div>
    </div>
  );
}

export default App;
