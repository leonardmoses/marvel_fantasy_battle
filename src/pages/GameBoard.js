import { powergrid } from '../data/powergrid';

const GameBoard = () => {
  return (
    <div>
      {powergrid.map((x) => (
        <ul key={x.id}>
          <li>Name: {x.name}</li>
          <li>id: {x.id}</li>
          <li>Draft Value: {x.draft_value}</li>
          <li>Mele: {x.mele_effectiveness}</li>
        </ul>
      ))}
    </div>
  );
};

export default GameBoard;
