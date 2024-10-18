import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav>
      <Link to="/">Produkter</Link>
      <Link to="/cart">Kundvagn ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;