package com.traveloop.backend.dto;

import lombok.Data;

@Data
public class ActivityRequest {

    private String name;

    private String category;

    private Double estimatedCost;

    private String description;
}