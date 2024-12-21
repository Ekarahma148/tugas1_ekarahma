import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-300 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="flex text-4xl font-bold text-gray-700">Bite of Bliss</h1>
        <nav className="flex gap-4">
          <Link to="/" className="text-gray-700"><Home/></Link>
          <Link to="/about" className="text-gray-700"><InfoIcon/></Link>
          <Link to="/profil" className="text-gray-700"><User2/></Link>
          </nav>
      </div>
    </header>
  );
}

export default Header;
