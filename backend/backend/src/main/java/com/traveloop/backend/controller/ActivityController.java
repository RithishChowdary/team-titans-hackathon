package com.traveloop.backend.controller;

import com.traveloop.backend.dto.ActivityRequest;
import com.traveloop.backend.entity.Activity;
import com.traveloop.backend.service.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    @PostMapping("/api/stops/{stopId}/activities")
    public Activity addActivity(@PathVariable Long stopId,
                                @RequestBody ActivityRequest request) {
        return activityService.addActivity(stopId, request);
    }

    @GetMapping("/api/stops/{stopId}/activities")
    public List<Activity> getActivities(@PathVariable Long stopId) {
        return activityService.getActivities(stopId);
    }

    @DeleteMapping("/api/activities/{id}")
    public void deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
    }
}