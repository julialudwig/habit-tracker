import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Add New Habit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view-weekly">
              View Weekly
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
