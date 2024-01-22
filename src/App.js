import logo from './logo.svg';
import './App.css';
import ReactSlider from 'react-slider';

function App() {
  return (
    <div className='body'>
    <div className="App">
      <h4>Range Slider</h4>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 100]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
        pearling
        minDistance={10}
      />
    </div>
    </div>
  );
}

export default App;
