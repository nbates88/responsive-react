import React from "react";
import Dashboard from "./Dashboard";
import "./App.css";

interface AppProps {}
interface AppState {
  token: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: "" };
  }

  componentDidMount() {
    const token: string = window.location.hash
      .split("&")[0]
      .replace("#access_token=", "");

    if (token) {
      this.setState({ token });
    }
  }

  render() {
    const { token } = this.state;

    return (
      <div>
        {token ? (
          <Dashboard accessToken={token} />
        ) : (
          <a
            href="https://accounts.spotify.com/authorize?client_id=64be1cae6cff465c98d1e780d47f064b&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000%2Fapi%2Fcallback"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in
          </a>
        )}
      </div>
    );
  }
}

export default App;
