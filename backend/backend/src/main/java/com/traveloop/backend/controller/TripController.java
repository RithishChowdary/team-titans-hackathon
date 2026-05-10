package com.traveloop.backend.controller;

import com.traveloop.backend.dto.TripRequest;
import com.traveloop.backend.entity.Trip;
import com.traveloop.backend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@RequiredArgsConstructor
public class TripController {

    private final TripService tripService;

    @PostMapping
    public Trip createTrip(@RequestBody TripRequest request) {
        return tripService.createTrip(request);
    }

    @GetMapping("/user/{userId}")
    public List<Trip> getTripsByUser(@PathVariable Long userId) {
        return tripService.getTripsByUser(userId);
    }

    @GetMapping("/{id}")
    public Trip getTrip(@PathVariable Long id) {
        return tripService.getTrip(id);
    }
}