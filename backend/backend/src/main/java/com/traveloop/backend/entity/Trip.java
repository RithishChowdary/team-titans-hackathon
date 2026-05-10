package com.traveloop.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "trips")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String destination;

    private LocalDate startDate;

    private LocalDate endDate;

    private Double budget;

    private String shareToken;

    private Integer travelers;
}