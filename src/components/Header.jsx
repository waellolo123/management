import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200 py-5 px-20">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Auth App</h1>
        <ul className="flex align-center gap-5" >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signin">Sign in</Link>
        </ul>
      </div>
    </div>
  )
}
