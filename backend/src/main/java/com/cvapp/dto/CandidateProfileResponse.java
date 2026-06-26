package com.cvapp.dto;

public record CandidateProfileResponse(
        Long id,
        String introduction,
        String baseCvText,
        String targetRoles,
        String careerStage,
        String strongSkills,
        String comfortableSkills,
        String familiarSkills,
        String doNotOversellSkills
) {
}