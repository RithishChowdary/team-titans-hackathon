CREATE DATABASE IF NOT EXISTS traveloop;

USE traveloop;

CREATE TABLE city_costs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    hotel_cost DECIMAL(10,2),
    food_cost DECIMAL(10,2),
    transport_cost DECIMAL(10,2),
    activity_cost DECIMAL(10,2)
);