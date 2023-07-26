"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react"

function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
        router.push(`/movies/search?query=${searchText}`);
    }
  }


  return (
    <div>
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" href="/">Movies DB</Link>
                <form className="d-flex" onSubmit={e => handleSubmit(e)} role="search">
                <input onChange={e => setSearchText(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Header