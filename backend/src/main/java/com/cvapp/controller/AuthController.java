package com.cvapp.controller;

import com.cvapp.dto.CreateUserRequest;
import com.cvapp.dto.LoginRequest;
import com.cvapp.dto.UpdateUserRequest;
import com.cvapp.dto.UserResponse;
import com.cvapp.service.AuthService;
import com.cvapp.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final AuthService authService;

    @PostMapping("/signup")
    public UserResponse signup(
            @Valid @RequestBody CreateUserRequest request,
            HttpServletRequest httpRequest,
            HttpServletResponse httpResponse
    ) {
        userService.createUser(request);

        return authService.authenticateAndSaveSession(request.getEmail(), request.getPassword(), httpRequest, httpResponse);
    }

    @PostMapping("/login")
    public UserResponse login(
            @Valid @RequestBody LoginRequest request,
            HttpServletRequest httpRequest,
            HttpServletResponse httpResponse
    ) {
        return authService.authenticateAndSaveSession(request.getEmail(), request.getPassword(), httpRequest, httpResponse);
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        new SecurityContextLogoutHandler().logout(request, response, authentication);
    }

    @GetMapping("/me")
    public UserResponse me(@AuthenticationPrincipal UserDetails userDetails) {
        return userService.getUserByEmail(userDetails.getUsername());
    }

    @PutMapping("/me")
    public UserResponse updateMe(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody UpdateUserRequest request,
            HttpServletRequest httpRequest,
            HttpServletResponse httpResponse
    ) {
        UserResponse user = userService.updateUser(userDetails.getUsername(), request);
        authService.refreshSavedSession(user.getEmail(), httpRequest, httpResponse);

        return user;
    }
}
