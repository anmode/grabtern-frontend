import React from "react";

function error() {

  return (
    <div className="error">
      <img src="https://img.freepik.com/premium-vector/page-found-concept-with-people-scene-flat-cartoon-design-woman-working-online-laptop-getting-websites-crash-with-404-access-errors-screen-vector-illustration-visual-story-web_9209-9453.jpg?w=996" alt="404" />
      <div className="error-content">
        <h1 className="error-title">Error : 404</h1>
        <h2 className="error-subtitle">Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <a href="/"><button className="error-btn" href="/">Back to homepage</button></a>
        </div> 
    </div>
  );
}

export default error;
