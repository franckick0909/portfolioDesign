'use client';

import Link from 'next/link';
import { navLinks, socialLinks, projectsData } from '../data/data';
import Logo from './logo';
import { ScaleButton } from './scaleButton';
import SimpleAnimatedLink from './simpleAnimatedLink';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-12 lg:px-24 xl:px-48 z-[201]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Logo et slogan */}
          <div className="col-span-1">
            <Logo className="text-6xl mb-8" />
            <p className="text-xl mb-4">Freelance designer & développeur web</p>
          </div>

          {/* Navigation, Projets et Social */}
          <div className="col-span-1 grid grid-cols-2 gap-8 relative">
            <div>
              {/* Liens de navigation */}
              <nav className="mb-8">
                <ul>
                  {navLinks.slice(0, 5).map((link) => (
                    <li key={link.id} className="mb-2">
                      <SimpleAnimatedLink href={link.href} text={link.name} className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-white font-marcellus font-light" />
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Lien Contact */}
              <div className="flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white before:opacity-30">
              <div className="mb-8 pl-8">
                <h3 className="text-lg lg:text-xl xl:text-2xl mb-2 font-marcellus">Contact</h3>
                <div className="w-8 h-0.5 bg-white mb-4"></div>
                <ScaleButton
                  text="Me contacter"
                  hoverText="Me contacter"
                  href="/contact"
                  bg="bg-white"
                  icon=""
                  target=""
                  rel=""
                  className="text-white bg-black hover:text-black z-10 whitespace-nowrap relative inline-flex ring-1 ring-white"
                />
              </div>
            </div></div> 

            <div className="flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white before:opacity-30">
              {/* Projets */}
              <div className="mb-8 pl-8">
              <h3 className="text-lg lg:text-xl xl:text-2xl mb-2 font-marcellus">Projets</h3>
              <div className="w-8 h-0.5 bg-white mb-4"></div>

                <ul>
                  {projectsData.slice(0, 3).map((project) => (
                    <li key={project.id} className="mb-2">
                      <Link href={project.link} className="text-sm text-stone-300 hover:text-white ring-offset-3 font-inter hover:underline">{project.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Liens sociaux */}
              <div className="pl-8">
              <h3 className="text-lg lg:text-xl xl:text-2xl mb-2 font-marcellus">Social</h3>
              <div className="w-8 h-0.5 bg-white mb-4"></div>
                <ul className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl text-stone-500 hover:text-white transition-colors">
                        <link.icon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-16">
          © Franck Chapelon, {new Date().getFullYear()}. Tous droits réservés. 
          <Link href="/privacy-policy" className="ml-4 hover:underline">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
