import './App.css';
import { LoadScript } from '@react-google-maps/api';
import Map from './components/Map';

function App() {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_KEY)
  return (
    <div className="App">
      <h3>Map Project</h3>
      <LoadScript  id="script-loader" googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY!}>
        <Map />
      </LoadScript >
    </div>
  );
}

export default App;
