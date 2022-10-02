import Layout from "../layouts/SidebarLayout";
import "../styles/globals.css";
import { createContext, useState } from "react";

export const AppContext = createContext("user");

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    name: "中佐徹也",
    age: "35",
    profile: "営業→Web制作会社",
    skill: "Wordpress,PHP,Java,Javascript,React,Laravel,MySQL,Postgresql",
    tool: "Git,Linux,eclipce,Photoshop,Illustrator",
  });
  return (
    <AppContext.Provider value={{ user }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
