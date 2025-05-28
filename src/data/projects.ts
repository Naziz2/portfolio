import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cartagena E-commerce',
    description: 'A full-featured e-commerce platform built with Next.js, featuring product management, cart functionality, and secure payments.',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    link: 'https://cartagena-ecommerce.vercel.app',
    githubLink: 'https://github.com/nahedBenMohamed/ecommerce'
  },
  {
    id: '2',
    title: 'AutoMobile CRM',
    description: 'A comprehensive CRM system for automotive businesses with inventory management and customer tracking.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://automobile-crm.herokuapp.com',
    githubLink: 'https://github.com/nahedBenMohamed/AutoMobile-CRM'
  },
  {
    id: '3',
    title: 'Hospital Management System',
    description: 'A web-based hospital management system for managing patients, appointments, and medical records.',
    imageUrl: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    link: 'https://hospital-management.example.com',
    githubLink: 'https://github.com/nahedBenMohamed/hospital-management'
  },
  {
    id: '4',
    title: 'Stock Management System',
    description: 'An inventory management system with real-time tracking and automated reordering capabilities.',
    imageUrl: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
    link: 'https://stock-management.example.com',
    githubLink: 'https://github.com/nahedBenMohamed/stock-management'
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'A mobile application for tracking workouts and monitoring fitness progress with detailed analytics.',
    imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    link: 'https://fitness-tracker.example.com',
    githubLink: 'https://github.com/nahedBenMohamed/fitness-tracker'
  },
  {
    id: '6',
    title: 'Smart Home Control',
    description: 'An IoT-based home automation system with voice control and energy monitoring features.',
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Raspberry Pi', 'MQTT', 'React'],
    link: 'https://smart-home.example.com',
    githubLink: 'https://github.com/nahedBenMohamed/smart-home'
  }
];