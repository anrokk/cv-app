package com.cvapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cvapp.dto.CandidateProfileRequest;
import com.cvapp.dto.CandidateProfileResponse;
import com.cvapp.service.CandidateProfileService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class CandidateProfileController {
    private final CandidateProfileService candidateProfileService;

    @GetMapping
    public ResponseEntity<CandidateProfileResponse> getProfile(Authentication authentication) {
        return candidateProfileService.getProfile(authentication.getName())
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public CandidateProfileResponse saveProfile(Authentication authentication, @Valid @RequestBody CandidateProfileRequest request) {
        return candidateProfileService.saveProfile(authentication.getName(), request);
    }
}
