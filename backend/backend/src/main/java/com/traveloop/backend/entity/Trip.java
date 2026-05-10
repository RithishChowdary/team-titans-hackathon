package com.traveloop.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(precision = 10, scale = 2)
    private BigDecimal budget;

    private Integer travelers = 1;

    @Column(name = "is_public")
    private Boolean isPublic = false;

    @Column(name = "share_token", length = 100)
    private String shareToken;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;
}