package com.traveloop.backend.repository;

import com.traveloop.backend.entity.Stop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StopRepository extends JpaRepository<Stop, Long> {

    List<Stop> findByTripId(Long tripId);
}