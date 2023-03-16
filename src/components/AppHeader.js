import LoginButton from "../components/auth/LoginButton";

function AppHeader() {
  return (
    <header className="App-header">
      <div>
        <h1>
          Uncovering the Spiritual Landscape of the Great American Rail Trail:
        </h1>
        <h1>A Study of Traveler Motivations and Experiences</h1>
      </div>
      <div>
        <LoginButton />
      </div>
    </header>
  );
}

export default AppHeader;
