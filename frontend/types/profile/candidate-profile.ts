export type CandidateProfile = {
  id: number
  introduction: string
  baseCvText: string
  targetRoles: string | null
  careerStage: string | null
  strongSkills: string | null
  comfortableSkills: string | null
  familiarSkills: string | null
  doNotOversellSkills: string | null
}

export type CandidateProfilePayload = Omit<CandidateProfile, "id">
