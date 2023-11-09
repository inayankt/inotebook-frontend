import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../contexts/Loader";

function About() {
  const loader = useContext(LoaderContext);
  useEffect(() => {
    loader.setProgress(10);
    setTimeout(() => {
      loader.setProgress(100);
    }, 500);
  }, []);
  return (
    <div>About</div>
  );
}

export default About;