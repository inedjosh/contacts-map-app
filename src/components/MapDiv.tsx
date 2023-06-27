import { Box } from '@chakra-ui/react';
import { LatLngExpression } from 'leaflet';
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { ContactContext } from '../context';
import { useContext } from 'react';

const MapDiv = () => {
  const positions: LatLngExpression[] = [
    [4.505, -0.09],
    [4.506, -0.091],
    [4.507, -0.092],
  ];

  const contactContext = useContext(ContactContext);

  const latLngArray: LatLngExpression[] = contactContext?.contacts
    ? (contactContext.contacts.flatMap((contact) =>
        contact.addresses.map((address) => [
          address.latitude,
          address.longitude,
        ])
      ) as LatLngExpression[])
    : [];

  return (
    <MapContainer center={latLngArray[0]} zoom={10} scrollWheelZoom={false}>
      <Box w={'100vw'} h={'300px'}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {latLngArray.map((position, index) => (
          <Marker key={index} position={position}>
            <Popup>Users address</Popup>
          </Marker>
        ))}
      </Box>
    </MapContainer>
  );
};

export default MapDiv;
