import "./App.css";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route
                        path="/"
                        element={<Profile userName="mirage101" />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects userName="mirage101" />}
                    />
                    <Route
                        path="/projects/:name"
                        element={<ProjectDetail userName="mirage101" />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
