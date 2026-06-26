package com.cvapp.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cvapp.dto.CandidateProfileRequest;
import com.cvapp.dto.CandidateProfileResponse;
import com.cvapp.mapper.CandidateProfileMapper;
import com.cvapp.model.CandidateProfile;
import com.cvapp.repository.CandidateProfileRepository;
import com.cvapp.model.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CandidateProfileService {
    private final CandidateProfileRepository candidateProfileRepository;
    private final UserService userService;
    private final CandidateProfileMapper candidateProfileMapper;

    public Optional<CandidateProfileResponse> getProfile(String email) {
        return candidateProfileRepository.findByUserEmail(email)
                .map(candidateProfileMapper::toEntity);
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

        return candidateProfileMapper.toEntity(candidateProfileRepository.save(profile));
    }

}
