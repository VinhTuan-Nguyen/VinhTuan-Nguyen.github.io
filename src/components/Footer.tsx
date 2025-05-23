import React from 'react';
import { Link } from 'react-router-dom';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { socialLinks } from '../utils/data';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section with logo and nav links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="text-xl font-bold mb-4 md:mb-0 text-gray-900 dark:text-white">
            John Doe
          </Link>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              {t('nav.home')}
            </Link>
            <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              {t('nav.projects')}
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              {t('nav.about')}
            </Link>
            <Link to="/certificates" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              {t('nav.certificates')}
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
        
        {/* Middle section with social links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href={socialLinks.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="GitHub"
          >
            <GitHub className="h-6 w-6" />
          </a>
          <a 
            href={socialLinks.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href={socialLinks.twitter}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href={`mailto:${socialLinks.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;