/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gauri Jakhmola",
  title: "Hi everyone, I'm Gauri",
  subTitle: emoji(
    "A passionate  Software Developer 🚀 having an experience of building Web  applications with JavaScript / Reactjs / Python / HTML/ CSS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1LFFCwwDAGIDuvvvz-m6ZKcm_YoaLma_X",
  displayGreeting: true 
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gaurijakhmola",
  linkedin: "https://www.linkedin.com/in/gauri-jakhmola-856b7125a",  // ✅ Fixed
  gmail: "mailto:jakhmolagauri50@gmail.com",                        // ✅ Also fix this
  leetcode: "https://leetcode.com/u/gaurijakhmola_/",
  display: true
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE DEVELOPER WHO WANTS TO EXPLORE VARIOUS TECH STACKS",
  skills: [
    emoji("⚡ Craft responsive and interactive Frontend interfaces using HTML, CSS, JavaScript, and React"),
emoji("⚡ Build Python scripts and mini-projects for automation and functionality"),
emoji("⚡ Stay updated with the latest tech trends by watching tech videos and exploring new tools"),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    
    
    {
      skillName: "active listening",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "teamwork",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sharda University",
      logo: require("./assets/images/college-thumbnail.webp"),

      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2022-2026",
      
      descBullets: [
        "Pursuing B.Tech with a strong academic performance (CGPA: 8.76), focused on software development and emerging technologies."


      ]
    },
    {
      schoolName: "Baluni Public School",
      logo: require("./assets/images/bps.jpg"),

      subHeader: "Senior Secondary",
      duration: "2022",
      
      descBullets: ["Completed 12th with core subjects including Physics, Chemistry, and Mathematics, maintaining excellent academic records."]
    },
    {
      schoolName: "Baluni Public School",
      logo: require("./assets/images/bps.jpg"),
      subHeader: "Secondary Education",
      duration: "2020",
      
      descBullets: ["Passed 10th with distinction, building a solid foundation in science and mathematics."]
    }


    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (HTML,CSS,JS)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (NODE JS, EXPRESS JS  etc  )",
      progressPercentage: "50%"
    },
    {
      Stack: " python Programming",
      progressPercentage: "65%"
    },
    {
      Stack: " Teamwork capabilities",
      progressPercentage: "75%"
    },
    {
      Stack: " Active Listening",
      progressPercentage: "90%"
    }






  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ideovent Technologies",
      companylogo: require("./assets/images/67f422142f012_organisation_image-FVy6Xm21yL21154077570fx95tg8y4.webp"),

      date: "June 2025 – Present",
      
      descBullets: [
        "Will be working  on building software applications using modern technologies like React and Python, focusing on clean UI and performance."
      ]
    },
    {
      role: "Digital transformation Intern",
      company: "TCIL Bhawan",
      companylogo: require("./assets/images/TCIL-Telecommunication-Consultants-India-Limited-Logo.jpg"),

      date: "May 2025 – June 2025",
      desc: "Assisted in digitization projects, automating processes, and supporting technical teams with documentation and basic development tasks."
    },
    {
      role: "Front-End Intern",
      company: "Cyper Hubs",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "May 2024 – july 2024",
      desc: "Contributed to front-end development using HTML, CSS, and JavaScript. Helped improve website design and user experience."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some web and Android development projects that I have built while learning these technologies.",
  projects: [
    {
      projectName: "TrendsMart - An E-commerce Website",
      projectDesc: "An online store built with React and Redux, featuring product browsing, cart, and checkout functionalities.",
      
    },
    {
      projectName: "EcoSankalp - Waste Management Website",
      projectDesc: "A sustainability-driven website built to raise awareness and provide local recycling information.",
      
    },
    {
      projectName: "TaskMate- A Task Manager website",
      projectDesc: "A productivity tool where you can keep record of your pending and completed task, categorize tasks etc.",
      
    },
    {
      projectName: "Stopwatch Android App",
      projectDesc: "A simple and intuitive stopwatch built with Java and XML, designed for Android devices.",
      
    },
    {
      projectName: "Calculator Android App",
      projectDesc: "An Android-based calculator supporting basic arithmetic operations with a clean and minimal user interface.",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and other  Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Academy",
      subtitle:
       "Java Fundamentals Certification",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kaztMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQk2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/gogle-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Internshala",
      subtitle:
        "Python Programming (Top Performer)",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/00000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Smart India Hackathon",
      subtitle: "Smart India Hackathon 2024 – Participation Certificate",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebasepp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My Learning Journey",
  subtitle:
    "Here’s a glimpse of how I started and what I’ve explored in tech so far — each step shaped my skills and curiosity.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "🐍 Started with Python",
      description:
        "Dived into coding with Python – learning loops, logic, and building confidence with programs and real-world problem solving."
    },
    {
      url: "#",
      title: "🌐 Entered the Web World",
      description:
        "Created sleek websites using HTML, CSS, and JavaScript. Later moved to React for building dynamic and interactive UIs."
    },
    {
      url: "#",
      title: "📱 Built My First Android Apps",
      description:
        "Using Java and Android Studio, I developed apps like Stopwatch and Calculator – and loved seeing code come to life on a phone!"
    },
    {
      url: "#",
      title: "🚀 Joined Hackathon & Internships",
      description:
        "Participated in Smart India Hackathon and interned at some companies to apply my skills to real-world tech projects."
    },
    {
      url: "#",
      title: "🧠 Still Exploring & Growing",
      description:
        "The journey never stops! I'm currently learning new technologies, improving problem-solving skills, and building exciting projects on the go."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "jakhmolagauri50@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
