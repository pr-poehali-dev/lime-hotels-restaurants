CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  room_title VARCHAR(255) NOT NULL,
  room_price VARCHAR(50) NOT NULL,
  guest_name VARCHAR(255) NOT NULL,
  guest_phone VARCHAR(50) NOT NULL,
  guest_email VARCHAR(255) NOT NULL,
  checkin_date DATE NOT NULL,
  nights INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_room_title ON bookings(room_title);