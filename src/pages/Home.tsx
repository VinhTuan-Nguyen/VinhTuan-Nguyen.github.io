import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../utils/data';
import ProjectCard from '../components/ProjectCard';
import ResumeButton from '../components/ResumeButton';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t('home.headline')}
              </h1>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('home.intro')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  {t('home.cta.projects')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-md shadow-sm transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  {t('home.cta.about')}
                </Link>
                
                <ResumeButton variant="outline" className="mt-4 md:mt-0" />
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 z-0"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-600 dark:bg-indigo-500 rounded-full opacity-20 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t('projects.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t('projects.subtitle')}
              </p>
            </div>
            
            <Link 
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Interested in working together?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-md shadow-md transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            {t('home.cta.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;