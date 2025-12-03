
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  platform?: string;
  links?: LinkInfo[];
  imageUrls: string[];
  videoUrl?: string;
  techStack?: string[];
  features?: string[];
  longDescription?: string;
  gallery?: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  location?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Certificate {
  issuer: string;
  title: string;
}

import React from 'react';

export interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export interface LinkInfo {
  text: string;
  url: string;
}
