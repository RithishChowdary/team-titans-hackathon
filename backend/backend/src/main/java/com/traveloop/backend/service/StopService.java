package com.traveloop.backend.service;

import com.traveloop.backend.dto.StopRequest;
import com.traveloop.backend.entity.Stop;
import com.traveloop.backend.repository.StopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StopService {

    private final StopRepository stopRepository;

    public Stop addStop(Long tripId, StopRequest request) {
        Stop stop = new Stop();
        stop.setTripId(tripId);
        stop.setCityName(request.getCityName());
        stop.setActivityName(request.getActivityName());
        stop.setEstimatedCost(request.getEstimatedCost());

        return stopRepository.save(stop);
    }

    public List<Stop> getStops(Long tripId) {
        return stopRepository.findByTripId(tripId);
    }

    public void deleteStop(Long id) {
        stopRepository.deleteById(id);
    }
}