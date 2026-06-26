package com.cvapp.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.cvapp.model.CandidateProfile;

public interface CandidateProfileRepository extends JpaRepository<CandidateProfile, Long> {
    Optional<CandidateProfile> findByUserEmail(String email);
}
