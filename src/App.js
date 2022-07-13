import logo from './logo.svg';
import './App.css';
import ProbeCard from './components/probes/probeCard.jsx';

function App() {
  return (
    <div className="App">
      <ProbeCard name="Soil Probe #1" moistlevel="dry" hertz="1000 Hz" />
      <ProbeCard name="Soil Probe #2" moistlevel="ok" hertz="1.21 GHz"/>
      <ProbeCard name="Soil Probe #3" moistlevel="wet" hertz="1 Mhz"/>
    </div>
  );
}

export default App;
