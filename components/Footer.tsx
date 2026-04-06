export default function Footer() {
  return (
    <footer>
      <div className="checker-strip chess-bw-sm" style={{ height: 40 }}>
        {Array.from({ length: 20 }).map((_, i) => <div className="cell" key={i} />)}
      </div>
      <div className="footer-main">
        <div className="footer-logo"><span>B</span>RI PHOTOGRAPHY</div>
        <div className="footer-socials">
          <a href="https://instagram.com/brigittatoth.photo" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="#" target="_blank" rel="noopener noreferrer">500px</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Bri Photography. All rights reserved.</div>
      </div>
    </footer>
  )
}
