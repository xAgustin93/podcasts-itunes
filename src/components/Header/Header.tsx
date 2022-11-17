import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export function Header() {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  return (
    <div className="header">
      <Link to="/">
        <h1>Podcaster</h1>
      </Link>

      <div>{progress && <p>Cargando....</p>}</div>
    </div>
  );
}
