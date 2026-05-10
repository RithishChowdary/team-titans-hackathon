package com.traveloop.backend.service;

import com.traveloop.backend.entity.TripStop;
import com.traveloop.backend.repository.StopRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StopService {

    private final StopRepository stopRepository;

    public StopService(StopRepository stopRepository) {
        this.stopRepository = stopRepository;
    }

    public TripStop save(TripStop stop) {
        return stopRepository.save(stop);
    }

    public List<TripStop> getByTripId(Long tripId) {
        return stopRepository.findByTripId(tripId);
    }

    public void delete(Long id) {
        stopRepository.deleteById(id);
    }
}