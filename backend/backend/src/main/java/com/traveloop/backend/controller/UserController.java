package com.traveloop.backend.controller;

import com.traveloop.backend.dto.UserSyncRequest;
import com.traveloop.backend.entity.User;
import com.traveloop.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/sync")
    public User syncUser(@RequestBody UserSyncRequest request) {
        return userService.syncUser(request);
    }
}