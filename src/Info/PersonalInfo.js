//
// var Info = [["Readme", "About FinderMe"], ["Ciena Corporation", "Noteblock"], ["Recycle Can", "Morsecret", "Team Goals"], ["My GitHub", "My Facebook", "My LinkedIn", "My Email"], ["Coding Languages", "Linguistics"], ["University of Waterloo", "Colonel By SS"],[ "CLS Assistant", "SHAD", "Debate", "Cross Country", "Interests"]];

//These string variables were used for the 'Network' tab to link text to my facebook, github, linkedin, etc
var str = "My LinkedIn";
var myUrl = str.link("https://www.linkedin.com/in/edwardren/") ;
var str2 = "My GitHub";
var myUrl2 = str2.link("https://github.com/EdwaRen") ;
var str3 = "My Facebook";
var myUrl3 = str3.link("https://www.facebook.com/eddie.ren.1") ;
var str4 = "My Email";
var myUrl4 = str4.link("mailto:edward.ren.2013@gmail.com") + "<br > Edward.ren.2013@gmail.com";


var groupsInfo =[ "Edward Ren",
"Profile", "Experience", "Projects", "Highlights", "Languages","Network", "Education", "Other"
]

var Info = [
  //Profile
  [

    [ "Readme","Hi I'm Edward! I love architecting interactive web designs. I love especially coding in Python, JavaScript, and C++. Welcome to my online portfolio!<br /><br />", "alternate", "Hi I'm Edward! I love architecting interactive web designs.<br > <br >You can navigate through the tabs under the 'find' bar to the right. Also, try dragging this window tab around.", "Summer 2017", "Ottawa", ""],

    [ "About FinderMe","", "Personal website coded with React", "FinderMe is a personal website built with React and can be templated to support customized text, images, and charts. <br /> <br />This interactive website was inspired by Apple's Finder program and was stylized using React-CSS tools such as Aphrodite. Check out the mobile version of FinderMe by resizing the screen and hitting refresh. FinderMe is optimized for Chrome and Firefox.<br /><br /> Coded with a 'bit' too much of coffee.","Summer 2017", "N/A", ""]
  ],
  //Experience
  [
    ["WATonomous", "", "Website Team Lead, Full Stack: <a href = 'www.watonomous.ca' > Website</a> | <a href = 'https://github.com/EdwaRen/webtonomous' >Git</a>", "Assembled webpages with React.js and Bootstrap while maintaining legacy website with WordPress<br \><br \>Constructed scaleable signup page with Node.js and Express.js to asynchronously save applications into MongoDB<br \><br \>Automatically synced entries using the Google Drive API to upload applicant resumes and database backups", "September 2017 - Present", "Waterloo", ""],

    [ "Ciena","", "Embedded Software Licensing", "Implemented Visual Basic to help automate process to verify packages thus reducing time spent by 75%<br \><br \>Algorithmically generated URLs with error handling for 2000+ licenses from 80+ sources<br \><br \>Redesigned a section of Ciena’s intranet with HTML/CSS to show a user-friendly display of weekly reports ", "Summer 2016", "Ottawa-Kanata", ""],

  ],

  //Projects
  [
    [ "Recycle Can","", "Founder, Chief iOS and Web Developer <br /> <a href = 'www.recyclecan.ca' > Website</a> | <a href = 'https://github.com/EdwaRen/Recycle_Can_iOS' >Git</a>", "Assembled built-in real-time navigation app using Swift with over 18000+ users on iOS by integrating application using delegates, MapKit, geocoding, and automatic route plotting from geographical data <br ><br \>Constructed website with React.js supporting 13000+ page visits<br \><br\>Displayed locations on website with Google Fusion Tables as a low-cost alternative to mimic selecting data from database queries", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    [ "Team Goals","", "Founder, Overall Developer: <a href = 'https://github.com/EdwaRen/Team_Goals'>Git</a>", "Public goal sharing web app to effectively communicate tasks between a team in real time<br \><br \>Assembled using React.js with backend support powered by Redux and authenticated with Firebase Auth<br \><br \>Synchronized website with Firebase REST API to update components in real time", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    [ "Morsecret","", "Founder, Overall Developer: <a href = 'https://github.com/EdwaRen/Morsecret'>Git</a>", "Morsecret is an ad-hoc distributed application that uses a novel haptic steganographic approach for real-time chat messaging.<br ><br >Privately communicates using morse code facilitated by Firebase.<br ><br >Employed Model-View-Controller (MVC) architectural pattern to process conversion of alphabetical characters into haptic feedback", "Summer 2017", "Ottawa-Colonel By", ""],


  ],

  //Highlights
  [

    ["MetroNews", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on MetroNews online and print publications. Article can be found <a href = 'http://www.metronews.ca/news/ottawa/2017/08/30/ottawa-student-s-recycling-app-a-success.html'>here.</a>", "Summer 2017", "Ottawa"],
    [ "CA News Ottawa", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on CA News Ottawa online news network. Article can be found <a href = 'http://www.canewsottawa.ca/single-post/2017/08/28/Ottawa-Teen-Takes-on-the-Toxic-Problem-of-Electronic-Waste'>here.</a>", "Summer 2017", "Ottawa"],
    ["Ottawa TechWatch", "", "Work Featured by News", "Online article written concerning Recycle Can on Ottawa TechWatch online news network. Article can be found <a href = 'http://www.ottawatechwatch.com/story.php?title=recycle-can]'>here.</a>", "Summer 2017", "Ottawa"],
    ["Debate Semi-finalist", "", "Provincial Tournament", "Semi-finalist in annual Ontario Student Debating Society (OSDU) provincial tournament. Fluent bilingual debater.", "May 2016", "Toronto"],
    ["ICS Subject Award", "", "Highest Mark In Course", "Attained subject award in Introduction to Computer Science course with over 80 students enrolled.", "2015", "Colonel By"],
    ["President's Scholarship of Distinction", "", "University of Waterloo Entrance Award", "Awarded to students who have attained a 95+ entrance average.", "2017", "Waterloo"],
    ["Waterloo Mathematic Contests", "", "National Contests Organized by the CEMC", "Euclid, Cayley, and Fermat Math Contest: Top 25% Nationwide", "2015-2017", "Waterloo"],

  ],

  //Languages
  [

    [ "Languages","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Swift", 90, "JavaScript",90, "C++", 90, "Python", 90, "Visual Basic",85, "Java" , 75 , "CSS", 75 , "HTML", 75, "C#", 65, "Objective-C", 55,"Bash", 55, "Proficiency"]],
    [ "Tools","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Node.js", 90, "React.js",85, "Express.js", 70, "Git", 70, "MongoDB",60, "Proficiency"]],

    [ "Linguistics","","Language Skills", "Proficient: English, French.<br > <br > Experienced: Mandarin.", "N/A", "N/A", ""],

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

    [ "SHAD","","SHAD (Formerly Shad Valley) Alumnus", "1 of 7 students from my high school selected to participate in SHAD, a competitive national entrepreneurial enrichment program.", "Summer 2016", "University of Saskatchewan", ""],

    [ "Debate","","Debating Society - Executive Committee", "Semi-finalist in Ontario Provincial Debating Championships (2016).<br ><br >Practiced for 5 hours a week after school and competed at various provincial and national tournaments.", "2012 - 2017", "Nationwide", ""],

    [ "Cross Country Team","","Long Distance Runner", "Participated as a runner on the Colonel By Cross Country team and competed at the Louis Riel meets each year.", "2014 - 2017", "Ottawa-Colonel By", ""],

    [ "Interests","", "Hobbies and Amusement", "Skiing, Swimming, Rock Climbing, Hiking, Piano, Chess, Trivia, Competitive Programming, Speed Rubik's Cubing", "N/A", "N/A", ""],


  ],



]


module.exports = {
  info: Info,
  groupNames: groupsInfo
};
