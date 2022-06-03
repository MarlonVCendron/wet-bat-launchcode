import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useForceUpdate from '../../../../utils/useForceUpdate';
import MarkerIcon from '../../../../images/marker-icon.png';
import Launchcode from '../../../../images/launchcode.png';

interface MapProps {
  height: number;
}

const Map: React.FC<MapProps> = ({ height }) => {
  const forceUpdate = useForceUpdate();

  const mapPosition: LatLngTuple = [50.96, -113.973];
  const icon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -48],
  });

  return (
    <MapContainer
      center={mapPosition}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: `${height}px` }}
    >
      <TileLayer
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
      />

      <Marker position={mapPosition} icon={icon}>
        <Tooltip direction="right" offset={[16, -16]} opacity={1} permanent>
          <Box zIndex={5} width={200}>
            <Image
              src={Launchcode}
              alt="Launchcode"
              borderRadius={5}
              onLoad={forceUpdate} // Needs update to center tooltip
            />

            <Box>
              <Heading
                as="h3"
                size="md"
                mt="1"
                color="brand.200"
                fontWeight="bold"
              >
                Launchcode
              </Heading>

              <Text
                mt={1}
                color="gray.500"
                fontSize={16}
                style={{
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                }}
              >
                The company I will soon be working for.
              </Text>

              <Flex mt={2} justify="space-between">
                <Box>
                  <Text color="brand.200" fontSize={16} fontWeight="semibold">
                    $12345
                  </Text>
                  <Text color="brand.200" fontSize={14}>
                    TEXT
                  </Text>
                </Box>

                <Button
                  colorScheme="teal"
                  size="md"
                  bg="brand.100"
                  color="white"
                  _hover={{ bg: '#389f9b' }}
                  _active={{ bg: '#1f8d89' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Details
                </Button>
              </Flex>
            </Box>
          </Box>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
