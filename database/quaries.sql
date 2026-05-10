CREATE DATABASE IF NOT EXISTS traveloop;

USE traveloop;

-- USERS
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TRIPS
CREATE TABLE IF NOT EXISTS trips (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    budget DECIMAL(10,2),
    travelers INT DEFAULT 1,
    is_public BOOLEAN DEFAULT FALSE,
    share_token VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- TRIP STOPS
CREATE TABLE IF NOT EXISTS trip_stops (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    trip_id BIGINT NOT NULL,
    city_name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    arrival_date DATE,
    departure_date DATE,
    stop_order INT,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

-- ACTIVITIES
CREATE TABLE IF NOT EXISTS activities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    stop_id BIGINT NOT NULL,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100),
    estimated_cost DECIMAL(10,2) DEFAULT 0,
    description TEXT,
    FOREIGN KEY (stop_id) REFERENCES trip_stops(id)
);

-- PACKING ITEMS
CREATE TABLE IF NOT EXISTS packing_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    trip_id BIGINT NOT NULL,
    item_name VARCHAR(200) NOT NULL,
    category VARCHAR(100),
    packed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

-- TRIP NOTES
CREATE TABLE IF NOT EXISTS trip_notes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    trip_id BIGINT NOT NULL,
    note_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

-- CITY COSTS
CREATE TABLE IF NOT EXISTS city_costs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    hotel_cost DECIMAL(10,2),
    food_cost DECIMAL(10,2),
    transport_cost DECIMAL(10,2),
    activity_cost DECIMAL(10,2)
);

