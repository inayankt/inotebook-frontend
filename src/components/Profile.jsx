import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../contexts/Loader";

function Profile() {
  const loader = useContext(LoaderContext);
  useEffect(() => {
    loader.setProgress(10);
    setTimeout(() => {
      loader.setProgress(100);
    }, 500);
  }, []);
  return (
    <div>Profile</div>
  );
}

export default Profile;