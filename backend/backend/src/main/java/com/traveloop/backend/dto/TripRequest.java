package com.traveloop.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class TripRequest {

    private Long userId;
    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private Double budget;
    private Integer travelers;
}