package com.traveloop.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "trip_stops")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TripStop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @Column(name = "city_name", nullable = false, length = 100)
    private String cityName;

    @Column(length = 100)
    private String country;

    @Column(name = "arrival_date")
    private LocalDate arrivalDate;

    @Column(name = "departure_date")
    private LocalDate departureDate;

    @Column(name = "stop_order")
    private Integer stopOrder;
}