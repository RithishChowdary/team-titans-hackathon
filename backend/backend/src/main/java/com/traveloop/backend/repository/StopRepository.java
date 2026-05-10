package com.traveloop.backend.repository;

import com.traveloop.backend.entity.TripStop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StopRepository extends JpaRepository<TripStop, Long> {
    List<TripStop> findByTripId(Long tripId);
}