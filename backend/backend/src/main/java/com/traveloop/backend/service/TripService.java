package com.traveloop.backend.service;

import com.traveloop.backend.dto.TripRequest;
import com.traveloop.backend.entity.Trip;
import com.traveloop.backend.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;

    public Trip createTrip(TripRequest request) {
        Trip trip = Trip.builder()
                .userId(request.getUserId())
                .destination(request.getDestination())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .budget(request.getBudget())
                .shareToken(UUID.randomUUID().toString())
                .build();

        return tripRepository.save(trip);
    }

    public List<Trip> getTripsByUser(Long userId) {
        return tripRepository.findByUserId(userId);
    }

    public Trip getTrip(Long id) {
        return tripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));
    }
}