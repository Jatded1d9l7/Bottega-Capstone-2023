import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="Button-button" onClick={() => loginWithRedirect()}>Log In</button>;
};

const App = () => {
  return (
    <Auth0Provider
      domain="dev-iv43t5v2wyzllb8b.us.auth0.com"
      clientId="casDfxekBT4HuYNMr6zFLQudK9qGNUHO"
      redirectUri="http://localhost:3000/callback"
    >
      <LoginButton />
    </Auth0Provider>
  );
};

export default App;
