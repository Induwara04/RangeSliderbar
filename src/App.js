// import './App.css';
/*import ReactSlider from 'react-slider';*/
import Slider from "@mui/material-next/Slider";

function App() {
  return (
    <div className="App">
      <h6>Range Slider</h6>
      <div className="container" style={{ padding: '30px'}}>

        <div
          className=""
          style={{
            position: "absolute",
            width: "300px",
          }}
        >
          <Slider
            max={100}
            min={0}
            size="medium"
            valueLabelDisplay="on"
            sx={{
              position: "absolute",
              "& .MuiSlider-track": {
                color: "#A6B3FF",
              },
              "& .MuiSlider-thumb": {
                color: "#A6B3FF",
              },
              "& .MuiSlider-valueLabel": {
                color: "#A6B3FF",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#E0E2E9",
              },
            }}
          />

          <Slider
            max={100}
            min={0}
            size="medium"
            valueLabelDisplay="on"
            sx={{
              position: "absolute",
              "& .MuiSlider-track": {
                color: "#5567D5",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "transparent",
              },
              "& .MuiSlider-thumb": {
                color: "#5567D5",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <h4>Range Slider</h4>
      
        <div>
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
        <div className='valuerange'>
        <span className='number' id='valuenumber'>50</span>
      </div>
      </div>
    </div>
  

  );
}

export default App;*/
