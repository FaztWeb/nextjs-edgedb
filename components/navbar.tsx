export function Navbar() {
  return (
  <nav
    className="bg-slate-950 shadow-md p-4 flex justify-between items-center text-white"
  >
    <h1>
        EdgedbNextjs
    </h1>

    <ul className="flex justify-between gap-x-2">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/new">New</a>
        </li>
    </ul>
  </nav>
  )
}