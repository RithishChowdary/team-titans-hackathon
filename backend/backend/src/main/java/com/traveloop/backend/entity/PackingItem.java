package com.traveloop.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "packing_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackingItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @Column(name = "item_name", nullable = false, length = 200)
    private String itemName;

    @Column(length = 100)
    private String category;

    private Boolean packed = false;
}