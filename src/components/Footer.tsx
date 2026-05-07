
const name = "michael"
function Footer() {
  return (
    <footer className="text-center bg-zinc-950 text-zinc-500 mt-16 border-t border-zinc-700  pt-10 ">
    © {new Date().getFullYear()}  {name}.Built with React.js & Tailwind.css .
  </footer>
  )
}

export default Footer