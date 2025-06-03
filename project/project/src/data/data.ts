import { Project, SkillCategory, Education, Achievement, Certification, SocialProfile } from '../types';

// Replace these with your actual information
export const personalInfo = {
  name: "Sirisha Gunaganuru",
  title: "Third Year B.Tech Student | Web Developer | ML Enthusiast | DSA Proficient",
  shortBio: "Passionate about building intuitive web applications and exploring machine learning algorithms while maintaining a strong foundation in data structures and algorithms.",
  photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your photo URL
  resume: "https://drive.google.com/file/d/1QwPfopF1J08UCUlGpMmD4_O2Ux2vVM86/view?usp=sharing", // Replace with your resume link
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 90, logo: "python", description: "Used in ML projects & competitive programming" },
      { name: "Core Java", proficiency: 85, logo: "java", description: "OOP concepts & Android development" },
      { name: "C", proficiency: 70, logo: "c", description: "System programming & algorithms" },
      { name: "SQL", proficiency: 85, logo: "database", description: "Database design & queries" },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", proficiency: 95, logo: "html", description: "Semantic markup & accessibility" },
      { name: "CSS", proficiency: 90, logo: "css", description: "Responsive design & animations" },
      { name: "Bootstrap", proficiency: 85, logo: "layout", description: "Responsive frameworks" },
      { name: "JavaScript", proficiency: 85, logo: "javascript", description: "DOM manipulation & async programming" },
      { name: "React", proficiency: 60, logo: "react", description: "Component-based UI development" },
      { name: "Node.js", proficiency: 75, logo: "server", description: "Backend API development" },
      { name: "PostgreSQL", proficiency: 75, logo: "layout", description: "Responsive frameworks" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", proficiency: 80, logo: "git-branch", description: "Version control & collaboration" },
      { name: "GitHub", proficiency: 90, logo: "github", description: "Project hosting & CI/CD" },
      { name: "VS Code", proficiency: 95, logo: "code", description: "Primary development environment" },
      { name: "PostgreSQL", proficiency: 75, logo: "database", description: "Relational database management" },
      { name: "Postman", proficiency: 75, logo: "database", description: "NoSQL database operations" },
      { name: "Google colab", proficiency: 80, logo: "send", description: "API testing & documentation" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Health Companion",
    tagline: "Full-stack online health check application",
    description: "A frontend project built with a basic health assistant interface. Designed with user-friendly layouts and health-related forms or suggestions, it reflects your interest in combining healthcare and tech.",
    image: "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MongoDB"],
    githubLink: "https://github.com/SirishaReddy05/HealthCompanion",
    category: "web",
    badge: "Team Project",
  },
  {
    id: 2,
    name: "PathFinder",
    tagline: "Full-stack student path guide",
    description: "A functional academic path management tool, intended to help students visualize or plan their academic journey. This project likely uses Bootstrap for UI design and is paired with backend logic as mentioned earlier.",
    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap" , "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/SirishaReddy05/PathFinder",
    category: "web",
    badge: "Team Project",
  },
  {
    id: 3,
    name: "Mummy Maddness",
    tagline: "Gamified python application",
    description: "A Python-based terminal game where the player must escape a mummy in a maze-like scenario. Built using fundamental Python logic and libraries such as random and time, this game improves your skills in control flow, logic building, and basic object-oriented design.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    technologies: ["Python"],
    githubLink: "https://github.com/SirishaReddy05/MummuyMaddnessGame",
    category: "mini",
    badge: "Solo Project",
  },
  {
    id: 4,
    name: "Snake game",
    tagline: "basic game application using C",
    description: "Snake is a sub-genre of action video games where the player maneuvers the end of a growing line, often themed as a snake. The player must keep the snake from colliding with other obstacles.",
    image: "https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg",
    technologies: ["C"],
    githubLink: "https://github.com/SirishaReddy05/SnakeGmaeUsingC",
    category: "mini",
    badge: "Solo project",
  }
];

export const education: Education = {
  degree: "B.Tech in Computer Science",
  institution: "BVRIT Hyderabad College of Engineering for Women",
  location: "Telangana, Hyderabad",
  duration: "2023-2027",
  gpa: "9.64/10",
  courses: ["Data Structures & Algorithms", "Database Management Systems", "Machine Learning", "Object-Oriented Programming", "Web Development", "Computer Networks"],
  logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Finalists- National Coding Hackathon",
    description: "Developed an innovative health-tech solution aimed at improving accessibility and real-time medical insights at Hactivate, a national-level hackathon by GeeksforGeeks.",
    date: "February 2025",
    link: "https://www.linkedin.com/posts/sirisha-gunaganuru_hacktivate-geeksforgeeks-hackathon-activity-7295788774746202112-JIUr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZHZ8QBWBlFruO3pr4m2GYNJkLNWKHxLGw",
    badge: "National",
  },
  {
    id: 2,
    title: "GHCI Schloar",
    description: "Selected as a GHCI 2024 Scholar for outstanding academic and technical excellence in computing, awarded by AnitaB.org India.",
    link: "https://drive.google.com/file/d/1J7imeUk2lOtP8DQB7CIyNc_mx8o7U9j5/view?usp=sharing",
    badge: "Achievement",
  },
  {
    id: 3,
    title: "Summer of AI Intern",
    description: "Selected for Summer of Intern 2025, a national-level internship program recognizing promising student developers across India.",
    date: "Ongoing",
    badge: "Experience",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Machine Learning Specialization",
    issuer: "International Institute of Information Technology, Hyderabad",
    date: "April 2025",
    link: "https://www.coursera.org/verify/specialized-certificate/ABCDEF123456",
    logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "May 2025",
    link: "https://www.udemy.com/certificate/UC-ABCDEF123456/",
    logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Database Management System",
    issuer: "NPTEL",
    date: "September 2024",
    link: "https://nptel.ac.in/certificates/ABCDEF123456",
    logo: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Artificial Intelligence",
    issuer: "Microsoft",
    date: "April 2025 ",
    link: "https://frontendmasters.com/certificates/ABCDEF123456/",
    logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Soft Skills",
    issuer: "TCS",
    date: "May 2025 ",
    link: "https://frontendmasters.com/certificates/ABCDEF123456/",
    logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const socialProfiles: SocialProfile[] = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/SirishaReddy05",
    stats: "10+ repositories"
  },
  {
    name: "LeetCode",
    icon: "code",
    url: "https://leetcode.com/u/G_Sirisha_reddy/",
    stats: "300+ problems solved • 100+ active days"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/sirisha-gunaganuru/",
  },
  {
    name: "Email",
    icon: "mail",
    url: "mailto:gunaganurusirisha@gmail.com",
  },
  {
    name: "Hakerrank",
    icon: "code-2",
    url: "https://www.hackerrank.com/profile/23wh1a0522",
    stats: "5+ badges"
  },
];