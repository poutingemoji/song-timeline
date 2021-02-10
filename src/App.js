import Timeline from "./components/Timeline"
import spotifyLogo from "./images/spotify-logo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>
        poutingemoji's{" "}
        <span>
          <img src={spotifyLogo} width="170" style={{verticalAlign: "middle"}} />
        </span>{" "}
        Timeline
      </h1>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
