import React, { useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import HomeButton from './HomeButton';
import RandomLocationButton from './RandomLocationButton';
import RecentlyVisitedLocations from './RecentlyVisitedLocations'
import MarkerIcon from '../images/icon.png';
import ClearListButton from './ClearListButton';
import '../styles/style.css';

interface location {
    lng: number;
    lat: number;
}

function Map() {
  const [location, setLocation] = useState<{lng: number; lat: number}>({lng: 0, lat: 0});
  const [mostRecentLocations, setMostRecentLocations] = useState<location[]>([]);
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback<callback>(map: any) {
    setMap(map);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLocation({lat: position.coords.latitude, lng: position.coords.longitude });
        setMostRecentLocations([...mostRecentLocations, {lat: position.coords.latitude, lng: position.coords.longitude }]);
      })
    } 
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const goHome = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const home = {lat: position.coords.latitude, lng: position.coords.longitude }
        if(home.lat != location.lat && home.lng != location.lng) {
          setLocation(home);
          setMostRecentLocations([...mostRecentLocations, home]);
        }
      })
    } 
  }

  const goToRandomPlace  = () => {
    const randomPlace = {lat: (Math.random() * (180) - 90), lng: Math.random() * (360) - 180 }
    setLocation(randomPlace);
    setMostRecentLocations([...mostRecentLocations, randomPlace]);
  }

  const goToPlace = (item: location) => {
    const newLocation = {lat: item.lat, lng: item.lng}

    if(newLocation.lat != location.lat && newLocation.lng != location.lng) {
      setLocation(newLocation);
      setMostRecentLocations([...mostRecentLocations, newLocation]);
    }
  }

  const clearList = () => {
    setMostRecentLocations([]);
  }

    return ( 
      <>
        <GoogleMap onUnmount={onUnmount} onLoad={onLoad} zoom={15} center={location}  mapContainerClassName="map-container">
          <MarkerF
            icon={{
              url: MarkerIcon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(40, 40)
            }}
            position={location}
          />  
        </GoogleMap>
        <div className='button-container'>
          <HomeButton goHome={goHome} />
          <RandomLocationButton goToRandomPlace={goToRandomPlace} />
          <ClearListButton clearList={clearList} />
        </div>
      <RecentlyVisitedLocations goToPlace={goToPlace} mostRecentLocations={mostRecentLocations} />
    </>
    );
}



export default React.memo(Map);
