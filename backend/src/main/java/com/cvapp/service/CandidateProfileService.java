package com.cvapp.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cvapp.dto.CandidateProfileRequest;
import com.cvapp.dto.CandidateProfileResponse;
import com.cvapp.model.CandidateProfile;
import com.cvapp.repository.CandidateProfileRepository;
import com.cvapp.model.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CandidateProfileService {
    private final CandidateProfileRepository candidateProfileRepository;
    private final UserService userService;

    public Optional<CandidateProfileResponse> getProfile(String email) {
        return candidateProfileRepository.findByUserEmail(email)
                .map(this::toResponse);
    }

    public CandidateProfileResponse saveProfile(String email, CandidateProfileRequest request) {
        User user = userService.getByEmail(email);
        CandidateProfile profile = candidateProfileRepository.findByUserEmail(email)
                .orElseGet(() -> {
                    CandidateProfile newProfile = new CandidateProfile();
                    newProfile.setUser(user);
                    return newProfile;
                });

        profile.setIntroduction(request.getIntroduction());
        profile.setBaseCvText(request.getBaseCvText());
        profile.setTargetRoles(request.getTargetRoles());
        profile.setCareerStage(request.getCareerStage());
        profile.setStrongSkills(request.getStrongSkills());
        profile.setComfortableSkills(request.getComfortableSkills());
        profile.setFamiliarSkills(request.getFamiliarSkills());
        profile.setDoNotOversellSkills(request.getDoNotOversellSkills());

        return toResponse(candidateProfileRepository.save(profile));
    }

    private CandidateProfileResponse toResponse(CandidateProfile profile) {
        return new CandidateProfileResponse(
                profile.getId(),
                profile.getIntroduction(),
                profile.getBaseCvText(),
                profile.getTargetRoles(),
                profile.getCareerStage(),
                profile.getStrongSkills(),
                profile.getComfortableSkills(),
                profile.getFamiliarSkills(),
                profile.getDoNotOversellSkills());
    }

}
