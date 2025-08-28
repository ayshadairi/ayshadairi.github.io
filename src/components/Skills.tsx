import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Next.js", level: 88, icon: "▲" }
      ]
    },
    {
      title: "Backend",
      color: "from-teal-600 to-cyan-600",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MongoDB", level: 70, icon: "🍃" }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-rose-600 to-pink-600",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Figma", level: 85, icon: "🎯" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="mr-2 text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;