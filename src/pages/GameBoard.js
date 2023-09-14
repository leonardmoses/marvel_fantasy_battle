import { powergrid } from '../data/powergrid';

const GameBoard = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>Game Board</h1>
        <div>
            <label>Choose Character</label>
            <input type='text'/>
        </div>
    </div>
  );
};

export default GameBoard;
