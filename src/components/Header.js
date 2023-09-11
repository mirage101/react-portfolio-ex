import "./Header.css";
import logo from "../assets/logo.svg";
import { Link } from "./Link.js";
import { Link as RouterLink } from "react-router-dom";
export const Header = () => {
    return (
        <header className="App-header">
            <h1>My Portfolio</h1>
            <nav>
                <RouterLink
                    to="/"
                    className="App-link"
                >
                    About me
                </RouterLink>
                <RouterLink
                    to="/projects"
                    className="App-link"
                >
                    Projects
                </RouterLink>
            </nav>
        </header>
    );
};
