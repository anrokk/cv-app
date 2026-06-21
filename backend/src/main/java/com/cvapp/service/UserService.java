package com.cvapp.service;

import org.springframework.stereotype.Service;
import com.cvapp.repository.UserRepository;
import com.cvapp.dto.UserResponse;
import com.cvapp.dto.CreateUserRequest;
import com.cvapp.model.User;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserResponse createUser(CreateUserRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }

        throw new UnsupportedOperationException("Password hashing is not configured");
    }

    public UserResponse getUserByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("User not found"));

        return UserResponse.builder().id(user.getId()).email(user.getEmail()).build();
    }
}
