import "./App.css";
// import ReactPlayer from "react-player";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="header__logo"
          src="https://static.wixstatic.com/media/bd26bc_c47381c1b3f84974b9c4e08a5b03d720~mv2.png/v1/fill/w_470,h_108,al_c,lg_1,q_85/CompanyHeader.webp"
          alt=""
        ></img>
      </header>

      <div className="app__videos">
        <Video
          url="https://www.youtube.com/watch?v=jVlgyDY5Lvs"
          votes={100}
          title="Lisa Alford Director State of Alabama Independent Living (SAIL) Service"
        />
        <Video
          url="https://www.youtube.com/watch?v=ficl4075rkA"
          votes={123}
          title="Jack Carney, Carney Dye LLC Law Office, on guardianship and supported decision making"
        />
      </div>

      {/* <div className="video">
        <ReactPlayer
          playing={true}
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=rcqfLJ1_b7U&t=404s"
        />
      </div>
      <div className="video">
        <ReactPlayer
          playing={true}
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=rcqfLJ1_b7U&t=404s"
        />
  </div> */}
    </div>
  );
}

export default App;
