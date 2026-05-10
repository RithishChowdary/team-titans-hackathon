package com.traveloop.backend.controller;

import com.traveloop.backend.entity.TripStop;
import com.traveloop.backend.service.StopService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stops")
@CrossOrigin("*")
public class StopController {

    private final StopService stopService;

    public StopController(StopService stopService) {
        this.stopService = stopService;
    }

    @PostMapping
    public TripStop createStop(@RequestBody TripStop stop) {
        return stopService.save(stop);
    }

    @GetMapping("/trip/{tripId}")
    public List<TripStop> getStopsByTrip(@PathVariable Long tripId) {
        return stopService.getByTripId(tripId);
    }

    @DeleteMapping("/{id}")
    public void deleteStop(@PathVariable Long id) {
        stopService.delete(id);
    }
}