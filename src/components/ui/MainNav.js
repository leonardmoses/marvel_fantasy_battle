import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <h1>Main Nav</h1>
      <ul>
        
        <li><Link to='/'>Splash</Link></li>
        <li><Link to='/gameboard'>Game Board</Link></li>
        <li><Link to='/instructions'>Game Instructions</Link></li>
      </ul>
    </div>
  );
};

export default MainNav;
