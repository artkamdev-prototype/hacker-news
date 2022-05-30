function Navbar({ username }) {
  return (
    <div className="nav">
      <div>LOGO</div>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">{username}</a>
      </div>
    </div>
  );
}

export default Navbar;
