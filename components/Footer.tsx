export default function Footer() {
  return (
    <footer>
      <div className="checker-strip chess-bw-sm" style={{ height: 14 }}>
        {Array.from({ length: 20 }).map((_, i) => <div className="cell" key={i} />)}
      </div>
      <div className="footer-main">
        <div className="footer-logo"><span>B</span>RIGITTA TOTH</div>
        <div className="footer-socials">
          <a href="https://instagram.com/brigittatoth.photo" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="#" target="_blank" rel="noopener noreferrer">500px</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Brigitta Toth. All rights reserved.</div>
      </div>
    </footer>
  )
}
