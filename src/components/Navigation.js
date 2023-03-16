import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className= "Navigation-container">
      <div className= "Navigation-wrapper">
        < Link to= "/">Home</Link>
        < Link to= "/about">About</Link>
        < Link to= "/blog">Blog</Link>
        < Link to= "/participate">Participate</Link>
      </div>
    </div>
  );
}

export default Navigation 
