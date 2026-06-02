package com.traveloop.backend.dto;

import lombok.Data;

@Data
public class UserSyncRequest {
    private String firebaseUid;
    private String name;
    private String email;
}