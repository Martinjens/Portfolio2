import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const projects = [
    {
      name: "JavaScript Frameworks",
      screenshot:
        "/screenshots/Screenshot 2024-03-05 at 13-53-07 Vite React.png",
      link: "https://github.com/Martinjens/Js-Frameworks-Ca",
    },
    {
      name: "Project Exam",
      screenshot:
        "/screenshots/Screenshot 2024-03-05 at 13-53-42 Vite React.png",
      link: "https://github.com/Martinjens/Project-Exam2",
    },
    {
      name: "Semester Project 2",
      screenshot: "/screenshots/Screenshot 2024-03-05 at 14-41-27 Document.png",
      link: "https://github.com/Martinjens/Semester_Project2",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mb-5">My Portfolio by</h1>
      <h2 className="text-center mb-5">Martin Jenssen</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={project.screenshot}
                className="card-img-top"
                alt={project.name}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => redirectToLink(project.link)}
                >
                  Visit Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-5">
        This portfolio showcases my work as a student. Visit my GitHub profile{" "}
        <a href="https://github.com/Martinjens">here</a>.
      </p>
    </div>
  );

  function redirectToLink(link) {
    window.location.href = link;
  }
}

export default App;
