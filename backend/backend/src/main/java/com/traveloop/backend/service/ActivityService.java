package com.traveloop.backend.service;

import com.traveloop.backend.dto.ActivityRequest;
import com.traveloop.backend.entity.Activity;
import com.traveloop.backend.entity.Stop;
import com.traveloop.backend.repository.ActivityRepository;
import com.traveloop.backend.repository.StopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final StopRepository stopRepository;

    public Activity addActivity(Long stopId, ActivityRequest request) {

        Stop stop = stopRepository.findById(stopId)
                .orElseThrow(() -> new RuntimeException("Stop not found"));

        Activity activity = new Activity();

        activity.setStop(stop);
        activity.setName(request.getName());
        activity.setCategory(request.getCategory());
        activity.setEstimatedCost(request.getEstimatedCost());
        activity.setDescription(request.getDescription());

        return activityRepository.save(activity);
    }

    public List<Activity> getActivities(Long stopId) {
        return activityRepository.findByStopId(stopId);
    }

    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}