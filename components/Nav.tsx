export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#"><span>B</span>RI PHOTOGRAPHY</a>
      <ul className="nav-links">
        <li><a href="#gallery">Work</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-checker chess-bw">
        {Array.from({ length: 8 }).map((_, i) => <div key={i} />)}
      </div>
    </nav>
  )
}
