import './Home.css';
import photo from './photos/Home screen camera edit.jpg'

function Home() {
  return (
    <div className="app">
      <div className='home-photo'>
        <img src={photo} alt="" className='fade-img'></img>
      </div>
      <header className="app-header">
        <h2>Welcome To</h2>
        <h1>EPhotography</h1>
        <h3>By Erika Rogers</h3>
      </header>
      <body className='body'>
        <h2>Shortly About Me</h2>
      </body>
    </div>
  );
}

export default Home;
