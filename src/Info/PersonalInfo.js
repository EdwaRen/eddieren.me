//
// var Info = [["Readme", "About FinderMe"], ["Ciena Corporation", "Noteblock"], ["Recycle Can", "Morsecret", "Team Goals"], ["My GitHub", "My Facebook", "My LinkedIn", "My Email"], ["Coding Languages", "Linguistics"], ["University of Waterloo", "Colonel By SS"],[ "CLS Assistant", "SHAD", "Debate", "Cross Country", "Interests"]];

//These string variables were used for the 'Network' tab to link text to my facebook, github, linkedin, etc
var str = "My LinkedIn";
var myUrl = str.link("https://www.linkedin.com/in/edwardren/") + "<br /> linkedin.com/in/edwardren/";
var str2 = "My GitHub";
var myUrl2 = str2.link("https://github.com/EdwaRen") + "<br />github.com/EdwaRen";
var str3 = "My Facebook";
var myUrl3 = str3.link("https://www.facebook.com/eddie.ren.1") + "<br /> facebook.com/eddie.ren.1" ;
var str4 = "My Email";
var myUrl4 = str4.link("mailto:edward.ren.2013@gmail.com") + "<br > Edward.ren.2013@gmail.com";


var groupsInfo =[ "Edward Ren",
"Profile", "Experience", "Projects", "Highlights", "Languages","Network", "Education", "Other"
]

var Info = [
  //Profile
  [

    [ "Readme 👋 ","Hi I'm Edward, a software engineering student with a passion in backend web development. Welcome to my online portfolio!<br /><br />", "alternate", "Hi I'm Edward, a backend software engineering student @UWaterloo .<br > <br >You can navigate through the tabs under the 'find' bar to the right. Try dragging the screen or clicking the buttons in the top left.<br /><br /> Welcome to my digital portfolio!", "N/A", "N/A", ""],

    [ "About Me","", "'Life's short, it's only O(n)'", "In my sophomore year of high school, I published my first iOS app, an introduction that brought me to an evolving curiosity in software engineering.<br /><br />As a university student, I am seeking internship opportunities and would love to bring my skills and character into upcoming endeavors.<br /><br />Truthfully, I built this website with a 'bit' too much caffeine and would absolutely crave to enjoy a coffee chat with anyone reading this!","N/A", "N/A", ""]
  ],
  //Experience
  [
    ["Postmates", "", "Backend Developer", "", "May 2020 - Aug 2020", "SF - Remote", ""],
    ["TextNow", "", "Full Stack Developer", "Led and contributed to the development of internal tools with Ruby on Rails to deliver analytics for legal and mobile teams.<br /><br />Skills: Ruby on Rails, JavaScript, React, SQL", "Sept 2019 - Dec 2019", "Waterloo", ""],

    ["IBM", "", "Cognitive Software Engineer - Advanced Analytics", "Worked closely with data science team to deploy remote Jupyter notebook kernels and optimized dataframe operations with parallelism.<br /><br />Skills: Pandas, IPython, SQL, Keras", "Jan 2019 - Apr 2019", "Calgary", ""],

    ["Blackberry - QNX", "", "Software Engineering Student - Open Source", "Worked with an amazing team to develop a big data licensing platform using the Django framework.<br /><br />Skills: Django, Docker, MongoDB, Tensorflow, Kafka", "May 2018 - Aug 2018", "Ottawa", ""],

    ["WATonomous", "", "Full Stack Development Lead: <a href = 'www.watonomous.ca' target='_blank'> Website</a>", "Led versatile team to develop watonomous.ca with React and Node.js and deployed with Nginx.<br /><br />Skills: Node.js, Express.js, MongoDB, Nginx, React", "Sept 2017 - Aug 2018", "Waterloo", ""],

    [ "Ciena","", "Embedded Software Intern", "Implemented algorithms to analyze file structures and created many central web pages displaying analytics from multiple sources for our new team.<br /><br />Skills: Visual Basic, Angular, D3.js", "Summer 2016", "Ottawa-Kanata", ""],

  ],

  //Projects
  [
    [ "Recycle Can","", "Founder, Chief iOS and Web Developer <br /> <a href = 'https://www.recyclecan.ca'  target='_blank'> Website</a> | <a href = 'https://github.com/EdwaRen/Recycle_Can_iOS' target='_blank'>Git</a>", "iOS and web navigation tool that guides users to the closest electronic waste recycling center.<br /><br />Assembled built-in real-time navigation app using Swift with 18000+ lifetiime users on iOS by integrating application using MapKit.<br ><br \>Constructed website supporting Google Maps API using React.js accepting 1500+ peak monthly visits.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    [ "Team Goals","", "Founder, Overall Developer: <a href = 'https://github.com/EdwaRen/Team_Goals' target='_blank'>Git</a>", "Public goal sharing web app to effectively communicate tasks between a team in real time.<br \><br \>Assembled using React.js with backend support powered by Redux and authenticated with Firebase Auth.<br \><br \>Synchronized website with Firebase REST API to update components in real time.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    [ "Morsecret","", "Founder, Overall Developer: <a href = 'https://github.com/EdwaRen/Morsecret' target='_blank'>Git</a>", "Morsecret is an ad-hoc distributed application that uses a novel haptic steganographic approach for real-time chat messaging.<br ><br >Privately communicates using morse code facilitated by Firebase.<br ><br >Employed Model-View-Controller (MVC) architectural pattern to process conversion of alphabetical characters into haptic feedback.", "Summer 2017", "Ottawa-Colonel By", ""],


  ],

  //Highlights
  [

    ["MetroNews", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on MetroNews online and print publications. Article can be found <a href = 'https://weblink.ocdsb.ca/WebLink/DocView.aspx?dbid=0&id=2963740&page=1' target='_blank'>here.</a>", "Summer 2017", "Ottawa"],
    ["Ottawa TechWatch", "", "Work Featured by News", "Online article written concerning Recycle Can on Ottawa TechWatch online news network. Article can be found <a href = 'http://www.ottawatechwatch.com/story.php?title=recycle-can' target='_blank'>here.</a>", "Summer 2017", "Ottawa"],
    ["Inventure", "", "Backend Lead: <a href = 'https:/meetinventure.com' target='_blank'>Website</a>", "Constructed backend support tool with Express.js for Inventure, an Ottawa based entrepreneurial accelerator for young student innovators.", "May 2018 - August 2018", "Ottawa"],
    ["ACT 35/36", "", "Ranked 99th percentile", "Excelled in the ACT with a composite score of 35 amongst more than six million candidates", "January 2017", "Ottawa"],
    ["Scholarship of distinction", "", "Awarded to students achieving 95%+", "University of Waterloo President’s scholarship of distinction.", "May 2017", "Ottawa"],

    ["International Baccalaureate", "", "Diploma", "Exceeded and surpassed expectations in International Baccalaureate program graduating within top 88th percentile.", "May 2017", "Ottawa"],

    ["Debate Semi-finalist", "", "Provincial Tournament", "Semi-finalist in annual Ontario Student Debating Society (OSDU) provincial tournament. Fluent bilingual debater.", "May 2016", "Toronto"],
    ["ICS Subject Award", "", "Highest Mark In Course", "Attained subject award in Introduction to Computer Science course with over 80 students enrolled.", "2015", "Colonel By"],
    ["President's Scholarship of Distinction", "", "University of Waterloo Entrance Award", "Awarded to students who have attained a 95+ entrance average.", "2017", "Waterloo"],
    ["Waterloo Mathematic Contests", "", "National Contests Organized by the CEMC", "Euclid, Cayley, and Fermat Math Contest: Top 25% Nationwide.", "2015-2017", "Waterloo"],

  ],

  //Languages
  [

    [ "Languages","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Python", 85, "JavaScript",85, "C++", 80, "Swift", 70, "Visual Basic",60, "Java" , 55 , "CSS", 55 , "HTML", 55, "Proficiency"]],
    [ "Tools","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Node.js", 90, "Django", 85, "React.js",85, "Docker", 70, "Git", 70, "Keras", 60, "MongoDB",60, "Proficiency"]],

    [ "Linguistics","","Language Skills", "Fluent: English, French.<br > <br > Experienced: Mandarin.", "N/A", "N/A", ""],

  ],

  //Network
  [

    [ "LinkedIn","url('images/Network/linkedin.png')", myUrl,"", "N/A", "N/A",  "" ],
    [ "GitHub","url('images/Network/github2.png')", myUrl2, "", "N/A", "N/A", "" ],
    [ "Facebook","url('images/Network/facebook2.png')",  myUrl3, "", "N/A", "N/A",  "" ],
    [ "Mail","url('images/Network/email2.png')", myUrl4, "", "N/A", "N/A", ""  ]

  ],


  //Education
  [

    [ "University of Waterloo","", "Candidate for Bachelor in Software Engineering", "", "2017 - 2022 (Expected)", "Waterloo", ""],

    [ "Colonel By","","Secondary School", "Received international baccalaureate diploma alongside Ontario Secondary School French Immersion Diploma.", "2012 - 2017", "Ottawa", ""]

  ],

  //Other
  [
    [ "CLS","","Aerospace Research Assistant", "Cooperated with researchers to analyze elemental composition of a Boeing 737 turbine engine using beamlines from the Canadian Light Source (CLS) national synchrotron.<br ><br >Presented findings to over 200 students and professors at the University of Saskatchewan.", "Summer 2016", "Saskatoon",  ""],

    [ "SHAD","","SHAD (Formerly Shad Valley) Alumnus", "1 of 7 students from high school selected to participate in SHAD, a competitive national entrepreneurial enrichment program.", "Summer 2016", "University of Saskatchewan", ""],

    [ "Debate","","Debating Society - Executive Committee", "Semi-finalist in Ontario Provincial Debating Championships (2016).<br ><br >Practiced for 5 hours a week after school and competed at various provincial and national tournaments.", "2012 - 2017", "Nationwide", ""],

    [ "Cross Country Team","","Long Distance Runner", "Participated as a runner on the Colonel By Cross Country team and competed at the Louis Riel meets each year.", "2014 - 2017", "Ottawa-Colonel By", ""],

    [ "Interests","", "Hobbies and Amusement", "Cross country, Blitz chess, Speedcubing, Skiing, Swimming, Hiking, Quizbowl trivia <br /><br />Follow me on Instagram @ed.yren!", "N/A", "N/A", ""],


  ],



]


module.exports = {
  info: Info,
  groupNames: groupsInfo
};
