package com.cvapp.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "candidate_profiles")
@Data
@NoArgsConstructor
public class CandidateProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String introduction;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String baseCvText;

    @Column(columnDefinition = "TEXT")
    private String targetRoles;

    @Column
    private String careerStage;

    @Column(columnDefinition = "TEXT")
    private String strongSkills;

    @Column(columnDefinition = "TEXT")
    private String comfortableSkills;

    @Column(columnDefinition = "TEXT")
    private String familiarSkills;

    @Column(columnDefinition = "TEXT")
    private String doNotOversellSkills;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
