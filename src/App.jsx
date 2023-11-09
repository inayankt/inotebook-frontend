import React, { useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { LoaderContext } from "./contexts/Loader";
import { UserContext } from "./contexts/User";
import Layout from "./components/Layout";
import Authenticate from "./components/Authenticate";

function App() {
  const loader = useContext(LoaderContext);
  const user = useContext(UserContext);
  if(localStorage.getItem("user")) {
    user.setToken(localStorage.getItem("user"));
  }
  return (
    <>
      <LoadingBar
        color="#0D6EFD"
        progress={loader.progress}
        onLoaderFinished={() => loader.setProgress(0)}
      />
      {user.token ? <Layout /> : <Authenticate />}
    </>
  );
}

export default App;
