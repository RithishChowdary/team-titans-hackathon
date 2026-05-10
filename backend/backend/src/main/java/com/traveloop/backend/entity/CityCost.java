package com.traveloop.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "city_costs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CityCost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "city_name", nullable = false, length = 100)
    private String cityName;

    @Column(length = 100)
    private String country;

    @Column(name = "hotel_cost", precision = 10, scale = 2)
    private BigDecimal hotelCost;

    @Column(name = "food_cost", precision = 10, scale = 2)
    private BigDecimal foodCost;

    @Column(name = "transport_cost", precision = 10, scale = 2)
    private BigDecimal transportCost;

    @Column(name = "activity_cost", precision = 10, scale = 2)
    private BigDecimal activityCost;
}