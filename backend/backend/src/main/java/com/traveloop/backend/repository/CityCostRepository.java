package com.traveloop.backend.repository;

import com.traveloop.backend.entity.CityCost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CityCostRepository extends JpaRepository<CityCost, Long> {
    Optional<CityCost> findByCityNameIgnoreCase(String cityName);
}