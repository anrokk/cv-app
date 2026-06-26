package com.cvapp.service;

import com.cvapp.dto.CreateUserRequest;
import com.cvapp.dto.UserResponse;
import com.cvapp.model.User;
import com.cvapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponse createUser(CreateUserRequest request) {
        String email = normalizeEmail(request.getEmail());

        if (!StringUtils.hasText(request.getPassword())) {
            throw new IllegalArgumentException("Password is required");
        }
        if (userRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email already in use");
        }

        String passwordHash = passwordEncoder.encode(request.getPassword());

        User user = new User();
        user.setEmail(email);
        user.setPasswordHash(passwordHash);

        User savedUser = userRepository.save(user);

        return toResponse(savedUser);
    }

    public UserResponse getUserByEmail(String email) {
        User user = getByEmail(email);

        return toResponse(user);
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(normalizeEmail(email))
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public UserResponse toResponse(User user) {
        return new UserResponse(user.getId(), user.getEmail());
    }

    private String normalizeEmail(String email) {
        if (!StringUtils.hasText(email)) {
            throw new IllegalArgumentException("Email is required");
        }

        return email.trim().toLowerCase();
    }
}
