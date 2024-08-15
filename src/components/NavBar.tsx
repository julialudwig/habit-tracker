import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <div className="collapse navbar-collapse">Julia</div>
      </div>
    </nav>
  );
};

export default NavBar;
