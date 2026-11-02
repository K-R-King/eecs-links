import { siteUrl } from "@/lib/suite";

export type Link = {
  title: string;
  url: string;
  description: string;
  // shown as a small badge, e.g. "CalNet login"
  note?: string;
};

export type Category = {
  id: string;
  icon: string;
  title: string;
  blurb: string;
  links: Link[];
};

export const CATEGORIES: Category[] = [
  {
    id: "enrollment",
    icon: "📅",
    title: "Classes & enrollment",
    blurb: "Find classes, enroll, and keep track of deadlines.",
    links: [
      { title: "CalCentral", url: "https://calcentral.berkeley.edu", description: "Enroll in classes, check your waitlist, grades, bills, and holds.", note: "CalNet login" },
      { title: "Class Schedule", url: "https://classes.berkeley.edu", description: "Every class offered this term, with times, rooms, and instructors." },
      { title: "Berkeley Time", url: "https://berkeleytime.com", description: "Grade distributions and enrollment history for every course." },
      { title: "Academic calendar", url: "https://registrar.berkeley.edu/calendar/", description: "Instruction dates, holidays, finals week, and add/drop deadlines." },
      { title: "Berkeley Academic Guide", url: "https://guide.berkeley.edu", description: "The official catalog: course descriptions and program requirements." },
      { title: "Office of the Registrar", url: "https://registrar.berkeley.edu", description: "Transcripts, enrollment verification, and registration rules." },
    ],
  },
  {
    id: "requirements",
    icon: "🎓",
    title: "Degree requirements",
    blurb: "What the EECS major actually asks of you.",
    links: [
      { title: "EECS Planner", url: siteUrl("planner"), description: "Map your whole degree semester by semester, with an AI advisor.", note: "Sister site" },
      { title: "EECS Prereqs", url: siteUrl("prereqs"), description: "What every EECS course needs first, the full chain, and what it unlocks.", note: "Sister site" },
      { title: "EECS Electives", url: siteUrl("electives"), description: "A quick quiz that ranks upper-division electives by your interests and goals.", note: "Sister site" },
      { title: "EECS major requirements", url: "https://engineering.berkeley.edu/students/undergraduate-guide/degree-requirements/major-programs/electrical-engineering-computer-sciences/", description: "Berkeley Engineering's official checklist for the EECS major." },
      { title: "Lower-division requirements", url: "https://eecs.berkeley.edu/resources/undergrads/eecs-2/degree-reqs-lowerdiv-2/", description: "The EECS department's list of math, physics, and intro courses." },
      { title: "Humanities & social sciences", url: "https://engineering.berkeley.edu/students/undergraduate-guide/degree-requirements/humanities-and-social-sciences/", description: "The H/SS breadth requirement and which courses count." },
      { title: "AP & IB exam credit", url: "https://engineering.berkeley.edu/students/undergraduate-guide/exams/", description: "What each AP or IB score earns in the College of Engineering." },
      { title: "EECS course pages", url: "https://www2.eecs.berkeley.edu/Courses/", description: "Official descriptions, prerequisites, and term offerings for every EECS course." },
      { title: "EECS department", url: "https://eecs.berkeley.edu", description: "News, advising contacts, and resources from the department." },
    ],
  },
  {
    id: "coursework",
    icon: "💻",
    title: "Coursework tools",
    blurb: "Where assignments, discussions, and grades live.",
    links: [
      { title: "bCourses", url: "https://bcourses.berkeley.edu", description: "Berkeley's Canvas: announcements, files, and grades for most classes.", note: "CalNet login" },
      { title: "Ed Discussion", url: "https://edstem.org", description: "The Q&A forum almost every CS course uses." },
      { title: "Gradescope", url: "https://www.gradescope.com", description: "Submit homework and projects, and see exam scores and regrades." },
      { title: "Instructional computing", url: "https://inst.eecs.berkeley.edu", description: "EECS instructional accounts, lab machines, and course web pages." },
      { title: "HKN exam archive", url: "https://hkn.eecs.berkeley.edu/exams", description: "Past midterms and finals for EECS courses, collected by HKN." },
      { title: "Software Central", url: "https://software.berkeley.edu", description: "Free and discounted software licenses for students." },
      { title: "Open Computing Facility", url: "https://www.ocf.berkeley.edu", description: "Free printing, computers, and web hosting run by students." },
    ],
  },
  {
    id: "courses",
    icon: "📚",
    title: "Course websites",
    blurb: "Each course hosts its own site with slides, notes, and projects.",
    links: [
      { title: "CS 61A", url: "https://cs61a.org", description: "Structure and Interpretation of Computer Programs." },
      { title: "CS 61B", url: "https://cs61b.org", description: "Data Structures." },
      { title: "CS 61C", url: "https://cs61c.org", description: "Great Ideas in Computer Architecture." },
      { title: "CS 70", url: "https://www.eecs70.org", description: "Discrete Mathematics and Probability Theory." },
      { title: "EE 66", url: "https://inst.eecs.berkeley.edu/~ee66/", description: "Introduction to Signals, Dynamics, and Information (formerly EECS 16A)." },
      { title: "EE 64", url: "https://inst.eecs.berkeley.edu/~ee64/", description: "Introduction to Circuits & Devices (formerly EECS 16B)." },
      { title: "CS 161", url: "https://cs161.org", description: "Computer Security." },
      { title: "CS 162", url: "https://cs162.org", description: "Operating Systems and Systems Programming." },
      { title: "CS 170", url: "https://cs170.org", description: "Efficient Algorithms and Intractable Problems." },
      { title: "CS 188", url: "https://inst.eecs.berkeley.edu/~cs188/", description: "Introduction to Artificial Intelligence." },
      { title: "CS 189", url: "https://eecs189.org", description: "Introduction to Machine Learning." },
      { title: "EECS 151", url: "https://eecs151.org", description: "Introduction to Digital Design and Integrated Circuits." },
    ],
  },
  {
    id: "help",
    icon: "🤝",
    title: "Tutoring & study help",
    blurb: "Free help from students who've taken the class.",
    links: [
      { title: "HKN", url: "https://hkn.eecs.berkeley.edu", description: "The EECS honor society: drop-in tutoring, exam archives, and course guides." },
      { title: "Computer Science Mentors", url: "https://scheduler.csmentors.org", description: "Weekly small-group sections for lower-division CS courses." },
      { title: "UPE", url: "https://upe.cs.berkeley.edu", description: "The CS honor society: tutoring, resume reviews, and industry events." },
      { title: "61A office hours queue", url: "https://oh.cs61a.org", description: "Get in line for help from CS 61A course staff." },
      { title: "Student Learning Center", url: "https://slc.berkeley.edu", description: "Tutoring and study groups for math, physics, writing, and more." },
      { title: "UC Berkeley Library", url: "https://www.lib.berkeley.edu", description: "Study rooms, textbooks on reserve, and free access to journals." },
    ],
  },
  {
    id: "career",
    icon: "🚀",
    title: "Careers & research",
    blurb: "Internships, research, and building things.",
    links: [
      { title: "Handshake", url: "https://berkeley.joinhandshake.com", description: "Berkeley's job and internship board, plus career fair sign-ups.", note: "CalNet login" },
      { title: "Career Engagement", url: "https://career.berkeley.edu", description: "Resume reviews, mock interviews, and career counseling." },
      { title: "URAP", url: "https://research.berkeley.edu/urap/", description: "Undergraduate Research Apprentice Program: join a faculty research project." },
      { title: "Cal Hacks", url: "https://www.calhacks.io", description: "Berkeley's student-run hackathon, one of the largest in the world." },
      { title: "SkyDeck", url: "https://skydeck.berkeley.edu", description: "Berkeley's startup accelerator and its student programs." },
      { title: "Tau Beta Pi", url: "https://tbp.studentorg.berkeley.edu", description: "The engineering honor society: tutoring, events, and community." },
      { title: "CalLink", url: "https://callink.berkeley.edu", description: "Find and join any of Berkeley's student clubs.", note: "CalNet login" },
      { title: "Computing, Data Science & Society", url: "https://cdss.berkeley.edu", description: "Data science courses, the Data Science major, and research programs." },
    ],
  },
  {
    id: "campus",
    icon: "🌱",
    title: "Campus life & wellbeing",
    blurb: "Health, money, housing, and everything outside the classroom.",
    links: [
      { title: "University Health Services", url: "https://uhs.berkeley.edu", description: "The Tang Center: medical appointments, insurance, and pharmacy." },
      { title: "Counseling & mental health", url: "https://uhs.berkeley.edu/student-mental-health", description: "Free short-term counseling and 24/7 support lines." },
      { title: "Basic Needs Center", url: "https://basicneeds.berkeley.edu", description: "Food pantry, CalFresh help, and emergency housing support." },
      { title: "Financial Aid & Scholarships", url: "https://financialaid.berkeley.edu", description: "Aid packages, scholarships, and work-study." },
      { title: "Disabled Students' Program", url: "https://dsp.berkeley.edu", description: "Academic accommodations like extra exam time." },
      { title: "Housing", url: "https://housing.berkeley.edu", description: "Residence halls, apartments, and housing applications." },
      { title: "Dining", url: "https://dining.berkeley.edu", description: "Dining hall menus, hours, and meal plans." },
      { title: "Recreation & Wellbeing", url: "https://recwell.berkeley.edu", description: "The RSF gym, intramural sports, and fitness classes." },
      { title: "Parking & Transportation", url: "https://pt.berkeley.edu", description: "Bear Transit shuttles, Clipper passes, and parking permits." },
      { title: "UC Police Department", url: "https://ucpd.berkeley.edu", description: "Campus safety, night safety escorts, and alerts." },
    ],
  },
];

export const LINK_COUNT = CATEGORIES.reduce((n, c) => n + c.links.length, 0);
