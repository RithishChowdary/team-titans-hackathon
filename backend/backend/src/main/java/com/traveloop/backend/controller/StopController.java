package com.traveloop.backend.controller;

import com.traveloop.backend.dto.StopRequest;
import com.traveloop.backend.entity.Stop;
import com.traveloop.backend.service.StopService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class StopController {

    private final StopService stopService;

    @PostMapping("/api/trips/{tripId}/stops")
    public Stop addStop(@PathVariable Long tripId,
                        @RequestBody StopRequest request) {
        return stopService.addStop(tripId, request);
    }

    @GetMapping("/api/trips/{tripId}/stops")
    public List<Stop> getStops(@PathVariable Long tripId) {
        return stopService.getStops(tripId);
    }

    @DeleteMapping("/api/stops/{id}")
    public void deleteStop(@PathVariable Long id) {
        stopService.deleteStop(id);
    }
}