import React from "react"

export function Header() {
    return (
        <nav className="cyan accent-4 nav">
            <div classNameName="nav-wrapper">
                <a href="#" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a target="_blank" href="https://github.com/piskarev06/react-movies">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}