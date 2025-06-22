export type WhatWeDoItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  details?: string[];
  projectImages?: string[]; // Add this line for project images
};