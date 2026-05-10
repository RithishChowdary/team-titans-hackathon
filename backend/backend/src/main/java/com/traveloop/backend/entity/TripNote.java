package com.traveloop.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "trip_notes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TripNote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @Column(name = "note_text", nullable = false, columnDefinition = "TEXT")
    private String noteText;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;
}