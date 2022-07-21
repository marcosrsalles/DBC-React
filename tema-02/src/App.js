import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Github from "./components/GithubComponent";

function App() {
  // async function setup() {
  //   try {
  //     const { data: result } = await axios.get(
  //       "https://api.github.com/users/marcosrsalles"
  //     );

  //     console.log(result.map((item) => <img src={item.avatar_url} alt="" />));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   setup();
  // }, []);

  return (
    <>
      <Github />
    </>
  );
}

export default App;
