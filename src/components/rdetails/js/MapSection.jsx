import styles from '../styles/MapSection.module.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </section>
  );
};

export default MapSection;
