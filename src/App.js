import './App.css';

import a from "./images/a.jpg"
import b from "./images/b.jpg"
import c from "./images/c.jpg"
import e from "./images/d.jpg"
import d from "./images/e.jpg"


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='image'>
          <h1 className='text'>HEY</h1>
          <img className='img' src={a}/>
        </div>
        <div className='image'>
          <h1 className='text'>LET'S</h1>
          <img className='img' src={b}/>
        </div>
        <div className='image'>
          <h1 className='text'>GIVE</h1>
          <img className='img' src={c}/>
        </div>
        <div className='image'>
          <h1 className='text'>ALL</h1>
          <img className='img' src={d}/>
        </div>
        <div className='image'>
          <h1 className='text'>YOU CAN</h1>
          <img className='img' src={e} />
        </div>
      </div>
    </div>
  );
}

export default App;