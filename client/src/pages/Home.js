import './Home.css';
import circle1 from "./photos/Circle photo 1.jpg";
import circle2 from "./photos/Circle photo 2.jpg";
import circle3 from "./photos/Circle photo 3.jpg";

function Home() {
  return (
    <div className="app">
      <div className='top-photo'>
        <header className="app-header">
          <h2>Welcome To</h2>
          <h1>EPhotography</h1>
          <h3>By Erika Rogers</h3>
        </header>
      </div>
      <body className='second-segment'>
        <div class="image-row">
          <img src={circle1} alt=""></img>
          <img src={circle2} alt=""></img>
          <img src={circle3} alt=""></img>
        </div>
        <h2>Shortly About Me</h2>
        <p>Lorem Ipsum</p>
      </body>
    </div>
  );
}

export default Home;
