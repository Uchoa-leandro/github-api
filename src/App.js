import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/89135913?v=4"
            alt="avatar of user"
          />
          <h1>Leandro Uchoa</h1>
          <h3>Username: </h3>
          <span>Uchoa</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>7</span>
            </div>
          </div>
          <div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
          </div>
          <div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
