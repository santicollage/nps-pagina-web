import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

function MapNps() {

  const API_KEY = 'AIzaSyD61Hxh34-I2C0CSpdZhtpwdEoxM5ZhWSQ';
  const position = {key: 'NPS DIESEL SAS', location: { lat: 4.600024, lng: -74.08633 }};
  
  return (
    <>
      <APIProvider apiKey={API_KEY}>
        <Map
        defaultCenter={ position.location }
        defaultZoom={15}
        style={{ width: "90%", maxWidth: "800px", height: "400px", borderRadius: "10px", overflow: "hidden", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.8)" }}
        mapId="DEMO_MAP_ID"
        >
          <AdvancedMarker key={position.key} position={position.location}>
          <Pin background={"#ff0000"} glyphColor={"#fff"} />
          </AdvancedMarker>
        </Map>
      </APIProvider> 
    </>
  )
}

export {MapNps}