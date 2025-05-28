import React from 'react';
import { Code, Globe, Cpu, BookOpen, Award, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase'] },
    { name: 'Mobile', items: ['Flutter', 'React Native', 'Android', 'iOS'] },
    { name: 'Other', items: ['Git', 'CI/CD', 'Docker', 'Firebase', 'AWS'] }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate Web and Software Developer based in Tunisia, focused on building modern, efficient, and user-friendly digital experiences. With over 3 years of experience in the field, I've worked on a diverse range of projects from e-commerce platforms to tracking systems and mobile applications.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed mt-6">
                Currently, I'm studying Software Engineering at ISSAT Mateur, where I'm expanding my knowledge in advanced programming concepts, systems design, and emerging technologies. My interests span across web development, mobile application development, and robotics.
              </p>
            </div>
            
            {/* Experience timeline */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Calendar size={20} className="mr-2 text-indigo-400" />
                Experience Timeline
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500 bg-gray-900 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shrink-0 md:mx-auto">
                    <Award size={20} />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <h3 className="font-bold text-white">Freelance Developer</h3>
                      <time className="text-xs text-gray-500">2022 - Present</time>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Working with clients worldwide to deliver custom web and mobile solutions. Specializing in MERN stack development and e-commerce platforms.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500 bg-gray-900 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shrink-0 md:mx-auto">
                    <Code size={20} />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <h3 className="font-bold text-white">Junior Developer</h3>
                      <time className="text-xs text-gray-500">2021 - 2022</time>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Worked as part of an agile team delivering web applications for clients in the logistics and education sectors.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500 bg-gray-900 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shrink-0 md:mx-auto">
                    <BookOpen size={20} />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <h3 className="font-bold text-white">Software Engineering Student</h3>
                      <time className="text-xs text-gray-500">2020 - Present</time>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Studying at ISSAT Mateur with focus on software engineering principles, algorithms, and full-stack development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Cpu size={20} className="mr-2 text-indigo-400" />
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((category, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-800 border border-gray-700 rounded-xl p-5 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                          <span className="text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe size={20} className="mr-2 text-indigo-400" />
                Interests & Hobbies
              </h2>
              
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <p className="text-gray-300">
                  Beyond coding, I'm passionate about robotics, artificial intelligence, and IoT projects. In my free time, I enjoy contributing to open-source projects, solving algorithmic challenges, and mentoring aspiring developers. I'm also interested in photography and enjoy exploring new technologies and gadgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;