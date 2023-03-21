import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation-container">
      <div className="Navigation-wrapper">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        <NavLink to="/participate" activeClassName="active">Participate</NavLink>
      </div>
    </div>
  );
}

export default Navigation;

