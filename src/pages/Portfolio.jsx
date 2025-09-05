import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, ExternalLink, Github, Mail, Linkedin, Download, Award, Calendar, MapPin, Code, Briefcase, User, FileText, Phone } from 'lucide-react';
import Assistant from "./Assistant";
import AssistantWrapper from "./AssistantWrapper";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "BookBuddy",
      description: "A modern task management application with AI-powered prioritization, built with React, Node.js, and OpenAI API. Features smart scheduling and productivity insights.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      demo: "",
      github: "",
      status: "Live"
    },
    {
      title: "Ask OI",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard. Built with Next.js, MongoDB, and Stripe.",
      tech: ["Next.js", "MongoDB", "Stripe", "AWS"],
      demo: "",
      github: "https://github.com/IshaPatel-333/Ask-OI",
      status: "Live"
    },
    {
      title: "ChatApp",
      description: "Interactive dashboard for data analysis with real-time charts, filters, and export capabilities. Technologies: React, D3.js, Python Flask, PostgreSQL.",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      demo: "",
      github: "https://github.com/isha/data-viz-dashboard",
      status: "Live"
    },
    {
      title: "DetectX",
      description: "Intelligent chatbot with natural language processing capabilities, context awareness, and multi-language support. Built with Python, TensorFlow, and WebSocket.",
      tech: ["Python", "TensorFlow", "WebSocket", "NLP"],
      demo: "",
      github: "https://github.com/IshaPatel-333/detectX",
      status: "Live"
    },
    {
      title: "Blockchain based EHR",
      description: "Secure voting platform using blockchain technology with smart contracts, ensuring transparency and immutability of votes.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      demo: "",
      github: "https://github.com/IshaPatel-333/EHR",
      status: "Live"
    },
  ];

  const skills = {
    "Frontend Development": ["React", "Next.js", "Tailwind CSS"],
    "Backend Development": ["Node.js", "Python", "Express.js", "REST APIs", "FastAPI"],
    "Database & Cloud": ["MongoDB", "MySQL", "AWS", "Firebase", "Docker"],
    "AI & Machine Learning": ["TensorFlow","OpenAI API", "Hugging Face", "Scikit-learn", "Computer Vision", "NLP"],
    "Blockchain": ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"]
  };

  const experiences = [
    {
        title: "Open Source Contributor",
        company: "Social Summer of Code",
        location: "Remote",
        duration: "Jun 2024 - Jul 2024",
        type: "Full-time",
        description: [
          "Developed and deployed intelligent chatbots using MindsDB machine learning platform,integrating seamlessly with Slack and Twitter to automate customer interactions.",
          "Contributed to open source projects by implementing new features, resolving bugs, and    optimizing system performance, resulting in improved application stability."
        ],
        tech: ["MindsDB", "Python", "Node.js", "Slack API", "Twitter API"]
    },
    {
      title: "Fontend Web Developer",
      company: "Hungry Brain",
      location: "Mumbai, India",
      duration: "Jun 2022 - Jul 2022",
      type: "Internship",
      description: [
        "ngineered responsive web applications using modern HTML5, CSS3, and JavaScript, delivering pixel-perfect implementations aligned with design specifications.",
        "Redesigned and optimized website interface with responsive layouts and interactive UI components, achieving 15% increase in user engagement metrics and improved conversion rates."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Git"]
    }
  ];

  
  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Isha has expertise in multiple areas: Frontend (React, Next.js, Vue.js), Backend (Node.js, Python, Django), AI/ML (TensorFlow, PyTorch, OpenAI API), Cloud (AWS, Docker), and Blockchain (Solidity, Web3.js). She's particularly strong in full-stack development with modern JavaScript frameworks.";
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return "Isha has 5+ years of experience as a Full Stack Developer. She's currently a Senior Developer at Tech Innovations Inc., leading development of applications serving 100K+ users. Previously worked at Digital Solutions Ltd. and StartUp Ventures, gaining diverse experience across the tech stack.";
    } else if (lowerMessage.includes('project')) {
      return "Isha has built 6+ impressive projects including an AI-powered task manager, e-commerce platform, data visualization dashboard, blockchain voting system, and music recommendation engine. All projects showcase modern technologies, clean architecture, and are live with demos available.";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('certificate')) {
      return "Isha holds AWS Solutions Architect, TensorFlow Developer, and React Advanced certifications. She has published research papers on AI-driven interfaces and blockchain security. Always learning new technologies through continuous education and hands-on projects.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('available')) {
      return "Isha is open to new opportunities! You can reach her at isha@example.com, connect on LinkedIn, or check out her GitHub. She's particularly interested in AI/ML projects, full-stack development roles, and innovative tech startups.";
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      return "Isha is passionate about AI/ML! She has hands-on experience with TensorFlow, PyTorch, OpenAI API, and has built several AI-powered applications. Her projects include chatbots, recommendation systems, and task prioritization using machine learning algorithms.";
    } else if (lowerMessage.includes('location') || lowerMessage.includes('based')) {
      return "Isha is based in Mumbai, India, but has experience working with distributed teams globally. She's open to remote work opportunities and has collaborated with teams across different time zones effectively.";
    } else {
      const genericResponses = [
        "That's a great question! Isha has extensive experience in full-stack development with a focus on modern web technologies and AI integration. What specific aspect would you like to know more about?",
        "Isha loves tackling challenging technical problems! She's worked on everything from e-commerce platforms to AI-powered applications. Is there a particular project or skill you'd like to discuss?",
        "Thanks for your interest in Isha's work! She's passionate about building innovative solutions using cutting-edge technologies. Feel free to ask about her projects, experience, or technical expertise.",
      ];
      return genericResponses[Math.floor(Math.random() * genericResponses.length)];
    }
  };

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessages = [...messages, { text: currentMessage, sender: 'user' }];
      setMessages(newMessages);
      setCurrentMessage('');
      setIsTyping(true);

      setTimeout(() => {
        const response = generateAIResponse(currentMessage);
        setMessages([...newMessages, { text: response, sender: 'bot' }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Isha.dev
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl">
                👩‍💻
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Hi, I'm Isha
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
          AI/ML Enthusiast | Full-Stack Development <br />
          Turning ideas into impactful solutions.          
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg">
              View My Work
            </a>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="bg-green-500 text-xs px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-cyan-400 text-xs px-2 py-1 rounded-full border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-cyan-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <Code size={20} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-gray-900 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <div className="flex items-center gap-1 text-purple-400">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <span className="text-sm text-gray-500">{exp.type}</span>
                  </div>
                </div>
                <ul className="text-gray-400 space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-cyan-400 text-xs px-2 py-1 rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Certifications Section */}
      {/* <section id="publications" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Publications & Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
            {/* Publications */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <FileText size={24} />
                Publications
              </h3>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                    <div className="text-gray-400 text-sm mb-2">
                      <span className="text-purple-400">{pub.journal}</span> • {pub.date}
                    </div>
                    <div className="text-gray-400 text-sm mb-3">
                      Authors: {pub.authors.join(', ')}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{pub.abstract}</p>
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      <ExternalLink size={14} />
                      Read Paper
                    </a>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Certifications */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <Award size={24} />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                      <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                        {cert.type}
                      </span>
                    </div>
                    <div className="text-purple-400 font-medium mb-1">{cert.issuer}</div>
                    <div className="text-gray-400 text-sm mb-2">Issued: {cert.date}</div>
                    <div className="text-gray-500 text-xs font-mono">
                      Credential ID: {cert.credential}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ready to discuss your next project or opportunity? Let's chat!
          </p>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">ishap572@gmail.com</p>
            </div> */}
            {/* <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div> */}
            {/* <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:isha572@gmail.com" className="flex items-center gap-2 bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/isha-patel-b3st/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/IshaPatel-333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors">
              <Github size={20} />
              GitHub
            </a>
          </div>
          {/* AI Assistant Section */}
    <section id="assistant" className="py-16 px-4">
    <AssistantWrapper />
    </section>
        </div>
      </section>
      </div>
  );
};

export default Portfolio;