import React from 'react';
import '../styles/style.css';

interface location {
    lng: number;
    lat: number;
  }

type RecentlyVisitedLocationsProps = {
    mostRecentLocations: location[];
    goToPlace: (location: location) => void;
};

const RecentlyVisitedLocations: React.FC<RecentlyVisitedLocationsProps> = ({mostRecentLocations, goToPlace}) => {
    const listItems = mostRecentLocations.map(function(item, i){
       return (<li className='recent-locations-item' onClick={() => goToPlace(item)} key={i}>Latitude: {item.lat}, Longitude:{item.lng}</li>);
      })
   
    return (
      <ul className='recent-locations'>
        {listItems}
      </ul>
    );
};

export default RecentlyVisitedLocations;
