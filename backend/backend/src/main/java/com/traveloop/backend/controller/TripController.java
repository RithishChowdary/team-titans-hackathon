package com.traveloop.backend.controller;

import com.traveloop.backend.entity.Trip;
import com.traveloop.backend.service.TripService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin("*")
public class TripController {

    private final TripService tripService;

    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    // Create Trip
    @PostMapping
    public Trip createTrip(@RequestBody Trip trip) {
        return tripService.save(trip);
    }

    // Get All Trips
    @GetMapping
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }

    // Get Trip By ID
    @GetMapping("/{id}")
    public Trip getTripById(@PathVariable Long id) {
        return tripService.getTripById(id);
    }

    // Delete Trip
    @DeleteMapping("/{id}")
    public void deleteTrip(@PathVariable Long id) {
        tripService.deleteTrip(id);
    }
}