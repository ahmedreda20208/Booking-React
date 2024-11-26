import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsApi = () => {
      const existingScript = document.getElementById('googleMaps');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0LSVlPyazzchKTP-64QB5Wk1FDnVCe6Q`;
        script.id = 'googleMaps';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          initMap();
        };
        document.head.appendChild(script);
      } else {
        existingScript.onload = initMap;
      }
    };

    const initMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 14,
        });

        new window.google.maps.Marker({
          position: location,
          map,
          title: 'Location',
        });
      } else {
        console.error('Google Maps API is not available.');
      }
    };

    loadGoogleMapsApi();
  }, [location]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMap;
