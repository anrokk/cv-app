package com.cvapp.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CandidateProfileRequest {
    @NotBlank(message = "Introduction is required")
    private String introduction;

    @NotBlank(message = "Base CV text is required")
    private String baseCvText;

    private String targetRoles;
    private String careerStage;
    private String strongSkills;
    private String comfortableSkills;
    private String familiarSkills;
    private String doNotOversellSkills;
}
