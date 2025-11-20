import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './packges.css';

// --- Image Imports ---

import hospital from './images/starnt.jpg';
import str from './images/str.jpg';
import stra from './images/GPTempDownload(2).jpg';
import Delux from './images/c.jpg';
import Delux1 from './images/delux.jpg';
import Delux3 from './images/delux3.jpg';
import Delux4 from './images/delux4.jpg';
import super1 from './images/super1.jpg';
import super2 from './images/super2.jpg';
import super3 from './images/super3.jpg';
import super5 from './images/super5.jpg';
import cha3 from './images/cha3.jpg';
import cha33 from './images/cha33.jpg';
import cha1 from './images/cha33.jpg';

// --- Room Data ---
const rooms = [
  { id: 1, name: 'Delux Suite Cabana With Private Pool', type: 'Delux Suite Room', description: 'Our Delux Suite Cabana with Private Pool is specially made for a luxury experience. All rooms have a private pool with a beautiful view. Rooms are available as Double.', images: [Delux] },
  { id: 2, name: 'Deluxe Double Room', type: 'Delux Suite Room', description: 'Deluxe rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms available as Double, triple, or Family.', images: [Delux1] },
  { id: 3, name: 'Deluxe Triple Room', type: 'Delux Suite Room', description: 'Deluxe rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms available as Double, triple, or Family.', images: [Delux3] },
  { id: 4, name: 'Deluxe Family Room', type: 'Delux Suite Room', description: 'Deluxe rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms available as Double, triple, or Family.', images: [Delux4] },
  { id: 5, name: 'Superior Double Room', type: 'Superior Room', description: 'Superior rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms are available as Double, triple, or Family.', images: [super1] },
  { id: 6, name: 'Superior Triple Room', type: 'Superior Room', description: 'Superior rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms are available as Double, triple, or Family.', images: [super2] },
  { id: 7, name: 'Superior New Room', type: 'Superior Room', description: 'Superior rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms are available as Double, triple, or Family.', images: [super3] },
  { id: 8, name: 'Superior Small Room', type: 'Superior Room', description: 'Superior rooms are specially made for a luxury experience. All rooms have a scenic view of Ella Rock. Rooms are available as Double, triple, or Family.', images: [super5] },
  { id: 9, name: 'Chalet Double Room', type: 'Chalet Rooms', description: 'Cottage and it’s surrounded by trees with the view of Ella Gap. Rooms are large and have more privacy.', images: [cha1] },
  { id: 10, name: 'Chalet Triple Room', type: 'Chalet Rooms', description: 'Cottage and it’s surrounded by trees with the view of Ella Gap. Rooms are large and have more privacy.', images: [cha3] },
  { id: 11, name: 'Chalet Family Room', type: 'Chalet Rooms', description: 'Cottage and it’s surrounded by trees with the view of Ella Gap. Rooms are large and have more privacy.', images: [cha33] },
  { id: 12, name: 'Standard Double Rooms', type: 'Standard Rooms', description: 'Standard rooms available for a budget stay. Rooms are available as double, triple, and family.', images: [stra] },
  { id: 13, name: 'Standard Triple Rooms', type: 'Standard Rooms', description: 'Standard rooms available for a budget stay. Rooms are available as double, triple, and family.', images: [hospital] },
  { id: 14, name: 'Standard Family Rooms', type: 'Standard Rooms', description: 'Standard rooms available for a budget stay. Rooms are available as double, triple, and family.', images: [str] },
];

// --- RoomCard Component ---
const RoomCard = ({ room }) => (
  <div className="room-card">
    <div className="image-container">
      <img src={room.images[0]} alt={room.name} />
    </div>
    <div className="room-info">
      <h3>{room.name}</h3>
      <p className="room-type">{room.type}</p>
      <p className="room-description">{room.description}</p>
    </div>
  </div>
);

// --- RoomList Component ---
const RoomList = ({ filteredRooms }) => {
  const groupedRooms = filteredRooms.reduce((acc, room) => {
    (acc[room.type] = acc[room.type] || []).push(room);
    return acc;
  }, {});

  return (
    <div className="room-list">
      {Object.entries(groupedRooms).map(([type, rooms]) => (
        <div key={type}>
          <h2>{type}</h2>
          <div className="room-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- PackagesPage Component ---
const PackagesPage = () => {
  const navigate = useNavigate();
 

  const filteredRooms = rooms; // Optionally filter rooms for specific place

  const goToMap = () => navigate('/'); // Navigate back to map

  return (
    <div style={{ padding: '20px', fontFamily: "'Prompt', sans-serif" }}>
      {/* Back Button */}
     <div className="mb-3">
  <button
    onClick={goToMap}
    className="back-button-style "
  >
    <ArrowLeft size={20} className="back-arrow" />
    <span className="back-text">Back</span>
  </button>
</div>

 

    

      <RoomList filteredRooms={filteredRooms} />
    </div>
  );
};

export default PackagesPage;
