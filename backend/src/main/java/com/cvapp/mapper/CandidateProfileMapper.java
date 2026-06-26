package com.cvapp.mapper;

import com.cvapp.dto.CandidateProfileResponse;
import com.cvapp.model.CandidateProfile;
import org.springframework.stereotype.Component;

@Component
public class CandidateProfileMapper {

    public CandidateProfileResponse toEntity(CandidateProfile profile) {
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
