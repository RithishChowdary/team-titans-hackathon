USE traveloop;

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_trips_share_token ON trips(share_token);
CREATE INDEX idx_city_costs_city_name ON city_costs(city_name);