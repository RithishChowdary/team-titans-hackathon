package com.traveloop.backend.dto;

import lombok.Data;

@Data
public class StopRequest {

    private String cityName;

    private String activityName;

    private Double estimatedCost;
}