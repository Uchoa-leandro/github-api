import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import GithubProvider from "./providers/github-provider";

function App() {
  return (
    <main>
      <GithubProvider>
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
