import React from 'react';

// Componente auxiliar para item de lista
const SkillItem = ({ icon, name }) => (
  <li className="flex items-center gap-1">
    {icon} {name}
  </li>
);

const Skills = ({ t }) => {
  return (
    <section className="container mx-auto p-6 mb-12 animate-fade-in bg-card rounded-lg shadow-lg" id="Skills">
      <h2 className="text-2xl font-bold mb-8">{t.skills.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Lenguajes de Programación */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <i className="fas fa-code text-blue-500"></i> {t.skills.programmingLanguages}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            
            <SkillItem 
              name="JavaScript 🎓" 
              icon={<svg viewBox="0 0 1052 1052" height="1em" width="1em" className="min-w-[22px] text-center inline-block"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>} 
            />

            <SkillItem 
              name="TypeScript 🎓" 
              icon={<svg viewBox="0 0 256 256" height="1em" width="1em" className="min-w-[22px] text-center inline-block" fill="white"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"/></svg>} 
            />

            <SkillItem 
              name="Python" 
              icon={
                <svg viewBox="16 16 32 32" height="1em" width="1em" className="min-w-[22px] text-center inline-block">
                  <path fill="url(#python-a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/>
                  <path fill="url(#python-b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/>
                  <defs>
                    <linearGradient id="python-a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient>
                    <linearGradient id="python-b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient>
                  </defs>
                </svg>
              } 
            />

            <SkillItem name="C++" icon={<svg viewBox="0 0 24 24" height="1em" width="1em" className="min-w-[22px] text-center inline-block" fill="currentColor"><path fill="#00599C" d="M11.92 12.06c0 1.95-1.28 3.58-3.04 4.09l-.49-1.84c.89-.25 1.54-1.07 1.54-2.25 0-1.18-.65-2-1.54-2.25l.49-1.84c1.76.51 3.04 2.14 3.04 4.09zM22.5 10.5h-1.5V9h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5V12h1.5v-1.5zm-6 0h-1.5V9h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5V12h1.5v-1.5z"/></svg>} />
            <SkillItem name="C#" icon={<svg viewBox="0 0 256 256" height="1em" width="1em" className="min-w-[22px] text-center inline-block"><path fill="#239120" d="M228.6 138.8h-19.3v19.4h-18v-19.4h-19.3v-17.9h19.3V101h18v19.9h19.3v17.9zm-86.8 28.5c-4.3 2.4-8.9 3.6-13.8 3.6-7.8 0-14.4-2.8-19.8-8.4s-8.1-12.7-8.1-21.3c0-8.6 2.7-15.7 8.1-21.3s12-8.4 19.8-8.4c4.9 0 9.5 1.2 13.8 3.6l6.8-14.6c-6.1-3.6-13-5.4-20.6-5.4-12.7 0-23.5 4.5-32.3 13.5-8.8 9-13.2 19.8-13.2 32.6s4.4 23.6 13.2 32.6c8.8 9 19.6 13.5 32.3 13.5 7.6 0 14.5-1.8 20.6-5.4l-6.8-14.6z"/></svg>} />
            <SkillItem name="PHP" icon={<i className="fab fa-php text-purple-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="HTML" icon={<i className="fab fa-html5 text-orange-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="CSS" icon={<i className="fab fa-css3-alt text-blue-500 min-w-[22px] text-center text-xl"></i>} />
          </ul>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <i className="fas fa-code-branch text-green-500"></i> {t.skills.frameworks}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <SkillItem name="React.js 🎓" icon={<i className="fab fa-react text-blue-400 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Node.js 🎓" icon={<i className="fab fa-node text-green-500 min-w-[22px] text-center text-xl"></i>} />
            
            <SkillItem name="Next.js 🎓" icon={<svg viewBox="0 0 180 180" height="1em" width="1em" className="min-w-[22px] text-center inline-block"><mask id="mask0_408_139" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#mask0_408_139)"><circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/><rect x="115" y="54" width="12" height="72" fill="white"/></g></svg>} />
            
            <SkillItem name="NestJS" icon={<svg viewBox="0 0 264.6 255.6" height="1em" width="1em" className="min-w-[22px] text-center inline-block"><path d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z" fill="#e0234e" fillRule="evenodd"/></svg>} />
            <SkillItem name="Tailwind CSS 🎓" icon={<svg viewBox="0 0 24 24" height="1em" width="1em" className="min-w-[22px] text-center inline-block" fill="#38B2D8"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>} />
            <SkillItem name="Bootstrap" icon={<i className="fab fa-bootstrap text-purple-600 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Express" icon={<i className="fas fa-server text-gray-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="MySQL" icon={<i className="fas fa-database text-blue-800 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="PostgreSQL" icon={<i className="fas fa-database text-blue-600 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="SQL Server" icon={<i className="fas fa-database text-red-600 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="MongoDB" icon={<i className="fas fa-leaf text-green-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Firebase" icon={<i className="fas fa-fire text-yellow-500 min-w-[22px] text-center text-xl"></i>} />
          </ul>
        </div>

        {/* Herramientas */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <i className="fas fa-tools text-gray-500"></i> {t.skills.tools}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <SkillItem name="Git" icon={<i className="fab fa-git-alt text-red-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="GitHub" icon={<i className="fab fa-github text-black dark:text-white min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Google Cloud" icon={<i className="fab fa-google text-blue-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="AWS" icon={<i className="fab fa-aws text-orange-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Docker" icon={<i className="fab fa-docker text-blue-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Postman" icon={<i className="fas fa-space-shuttle text-orange-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Trello" icon={<i className="fab fa-trello text-blue-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Figma" icon={<i className="fab fa-figma text-purple-500 min-w-[22px] text-center text-xl"></i>} />
            <SkillItem name="Stack Overflow" icon={<i className="fab fa-stack-overflow text-orange-500 min-w-[22px] text-center text-xl"></i>} />
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;