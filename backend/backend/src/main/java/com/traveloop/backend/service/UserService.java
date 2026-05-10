package com.traveloop.backend.service;

import com.traveloop.backend.dto.UserSyncRequest;
import com.traveloop.backend.entity.User;
import com.traveloop.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User syncUser(UserSyncRequest request) {
        return userRepository.findByFirebaseUid(request.getFirebaseUid())
                .orElseGet(() -> {
                    User user = new User();
                    user.setFirebaseUid(request.getFirebaseUid());
                    user.setName(request.getName());
                    user.setEmail(request.getEmail());
                    return userRepository.save(user);
                });
    }
}