import { useState, useEffect } from "react";
import { List } from "../components/List";
import { Link as RouterLink } from "react-router-dom";

export const Projects = ({ userName }) => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}/repos`);
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                    setLoading(false);
                } else {
                    console.error("Failed to fetch data from GitHub API");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <div className="Projects-container">
            <h2>Projects</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <List
                        items={projects.map((project) => ({
                            field: project.name,
                            value: (
                                <RouterLink
                                    to={project.html_url}
                                    target="_blank"
                                >
                                    {project.html_url}
                                </RouterLink>
                            ),
                        }))}
                    />
                </div>
            )}
        </div>
    );
};
