
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  recommendedServices: string[];
}

export interface ConsultationResponse {
  summary: string;
  roadmap: RoadmapStep[];
  estimatedComplexity: 'Low' | 'Medium' | 'High';
}
