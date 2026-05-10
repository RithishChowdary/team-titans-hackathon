use traveloop;

-- -----------------------------------------------------
-- USERS
-- -----------------------------------------------------
INSERT INTO users (name, email, password, profile_image)
VALUES
('Rithish Chowdary', 'rithish@example.com', '$2a$10$dummyhashedpassword1', 'https://example.com/profile1.jpg'),
('John Doe', 'john@example.com', '$2a$10$dummyhashedpassword2', 'https://example.com/profile2.jpg');

-- -----------------------------------------------------
-- TRIPS
-- Assumes user IDs 1 and 2
-- -----------------------------------------------------
INSERT INTO trips
(user_id, title, description, start_date, end_date, budget, travelers, is_public, share_token)
VALUES
(1,'Europe Adventure','A 10-day trip across Paris and Rome.','2026-06-10','2026-06-20',150000,2,TRUE,'EUROPE123'),
(2,'Dubai Weekend','Luxury weekend trip to Dubai.','2026-07-05','2026-07-08', 80000,1,TRUE,'DUBAI456');

- -----------------------------------------------------
-- TRIP STOPS
-- Assumes trip IDs 1 and 2
-- -----------------------------------------------------
INSERT INTO trip_stops
(trip_id, city_name, country, arrival_date, departure_date, stop_order)
VALUES
(1, 'Paris', 'France', '2026-06-10', '2026-06-14', 1),
(1, 'Rome', 'Italy', '2026-06-14', '2026-06-20', 2),
(2, 'Dubai', 'UAE', '2026-07-05', '2026-07-08', 1);

-- -----------------------------------------------------
-- ACTIVITIES
-- Assumes stop IDs 1, 2, and 3
-- -----------------------------------------------------
INSERT INTO activities
(stop_id, name, category, estimated_cost, description)
VALUES
(1, 'Eiffel Tower Visit', 'Sightseeing', 2500,
 'Visit the iconic Eiffel Tower.'),

(1, 'Louvre Museum', 'Museum', 1800,
 'Explore world-famous artworks including the Mona Lisa.'),

(2, 'Colosseum Tour', 'Historical', 2200,
 'Guided tour of the Roman Colosseum.'),

(2, 'Trevi Fountain', 'Sightseeing', 0,
 'Visit the famous fountain in Rome.'),

(3, 'Burj Khalifa', 'Sightseeing', 3500,
 'Visit the tallest building in the world.');

 -- -----------------------------------------------------
-- PACKING ITEMS
-- Assumes trip IDs 1 and 2
-- -----------------------------------------------------
INSERT INTO packing_items
(trip_id, item_name, category, packed)
VALUES
(1, 'Passport', 'Documents', TRUE),
(1, 'Flight Tickets', 'Documents', TRUE),
(1, 'Jackets', 'Clothing', FALSE),
(1, 'Camera', 'Electronics', FALSE),
(2, 'Sunglasses', 'Accessories', TRUE),
(2, 'Power Bank', 'Electronics', FALSE);

-- -----------------------------------------------------
-- TRIP NOTES
-- Assumes trip IDs 1 and 2
-- -----------------------------------------------------
INSERT INTO trip_notes
(trip_id, note_text)
VALUES
(1, 'Check into hotel at 2 PM near Eiffel Tower.'),
(1, 'Book Vatican tickets in advance.'),
(2, 'Carry light clothes for hot weather in Dubai.');

-- -----------------------------------------------------
-- City Cost
-- Assumes trip IDs 1 and 2
-- -----------------------------------------------------
INSERT INTO city_costs
(city_name, country, hotel_cost, food_cost, transport_cost, activity_cost)
VALUES
('Paris', 'France', 4000, 1500, 800, 2000),
('Rome', 'Italy', 3500, 1200, 700, 1800),
('Barcelona', 'Spain', 3200, 1100, 600, 1500),
('Dubai', 'UAE', 5000, 2000, 1000, 2500),
('Tokyo', 'Japan', 6000, 2500, 1200, 3000),
('London', 'UK', 5500, 2200, 900, 2500),
('New York', 'USA', 6500, 2500, 1000, 3000),
('Bali', 'Indonesia', 2500, 800, 400, 1200);

-- -----------------------------------------------------
-- VERIFY DATA
-- -----------------------------------------------------
SELECT * FROM users;
SELECT * FROM trips;
SELECT * FROM trip_stops;
SELECT * FROM activities;
SELECT * FROM packing_items;
SELECT * FROM trip_notes;
SELECT * FROM city_costs;