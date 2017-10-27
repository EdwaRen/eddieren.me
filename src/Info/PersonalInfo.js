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
"Profile", "Work", "Projects", "Highlights", "Network", "Languages", "Education", "Other"
]

var Info = [
  //Profile
  [

    [ "Readme","Hi I'm Edward! I love architecting interactive web designs. I love especially coding in Javascript, Python, and C++. Welcome to my online portfolio!<br /><br /> My resume can be found <a href=\"./resume.pdf\" download=\"resume.pdf\">here</a>.", "alternate", "Hi I'm Edward! I love architecting interactive web designs.<br > <br >Navigate through the tabs under the 'find' bar to the right. Alternatively, a 'basic' page is provided above and my resume is <a href=\"./resume.pdf\" download=\"resume.pdf\">here</a>. Also, try dragging this window tab around.", "Summer 2017", "Ottawa", ""],

    [ "About FinderMe","", "Personal website coded with React", "FinderMe is a website originally created with pure Javascript but recently completely rehauled with React. <br /> <br />This interactive website was inspired by Apple's Finder program and was stylized using React-CSS tools such as Aphrodite. The mobile version links to the 'basic' page as some features are not compatible on mobile. FinderMe is optimized for Chrome and Firefox.<br /><br /> Coded with a 'bit' too much of coffee.","Summer 2017", "N/A", ""]
  ],
  //Experience
  [
    [ "Ciena Corporation","", "Embedded Software Licensing", "Increased operational efficiency by over 50% using Visual Basic and Excel formulas to process licensing data for thousands of programs and packages. <br ><br >1 of 2 interns selected out of an applicant pool of over 100 students <br ><br >Collaborated with colleagues to redesign a section of Ciena's internal intranet using HTML", "Summer 2016", "Ottawa-Kanata", ""],

    [ "Noteblock","", "Front and Back End Web Developer", "Utilized an object oriented approach to organize and process data automatically mined from site input.<br ><br >Hosted web service using custom domain address and host provider", "Summer 2016", "Ottawa-Colonel By", ""]
  ],

  //Projects
  [
    [ "Recycle Can","", "Founder, Chief iOS and Web Developer <br /> <a href = 'www.recyclecan.ca' > Website</a> | <a href = 'https://github.com/EdwaRen/Recycle_Can_iOS' >Git</a>", "Integrated application using delegates, MapKit, geocoding, and automatic route plotting connected to our database of over 20000 locations. <br ><br >Data Processing of over 50-megabyte raw text files in Microsoft Excel using VBA and formulas. <br > <br >Integrated a respective website using Google Maps API with over 13000 page visits in addition to 16000 mobile application downloads.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    ["WATonomous", "", "Team Lead, Full Stack Web Developer: <a href = 'www.watonomous.ca' > Website</a> | <a href = 'https://github.com/EdwaRen/webtonomous' >Git</a>", "Redesigned website using React and Bootstrap for the University of Waterloo’s autonomous car team <br /> <br />Provided page for back end recruitment used by over 300 applicants for three recruitment seasons annually<br /> <br />Maintained and updated legacy website using LeanWebTools while redesigning current webpage", "September 2017 - Present", "Waterloo", ""],

    [ "Morsecret","", "Founder, Overall Developer", "Morsecret is an ad-hoc distributed application that uses a novel haptic steganographic approach for real-time chat messaging.<br ><br >Privately communicates using morse code facilitated by Firebase.<br ><br >Employed Model-View-Controller (MVC) architectural pattern to process conversion of alphabetical characters into haptic feedback", "Summer 2017", "Ottawa-Colonel By", ""],

    [ "Team Goals","", "Founder, Overall Developer", "Website coded with React and supported by Firebase to create a real-time database that organizes goals for a team.<br ><br >Employed Javascript ES6 with Redux to support a high degree of user interactivity with website.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""]
  ],

  //Highlights
  [

    ["MetroNews", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on MetroNews online and print publications. Article can be found <a href = 'http://www.metronews.ca/news/ottawa/2017/08/30/ottawa-student-s-recycling-app-a-success.html'>here.</a>", "Summer 2017", "Ottawa"],
    [ "CA News Ottawa", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on CA News Ottawa online news network. Article can be found <a href = 'http://www.canewsottawa.ca/single-post/2017/08/28/Ottawa-Teen-Takes-on-the-Toxic-Problem-of-Electronic-Waste'>here.</a>", "Summer 2017", "Ottawa"],
  ["Ottawa TechWatch", "", "Work Featured by News", "Online article written concerning Recycle Can on Ottawa TechWatch online news network. Article can be found <a href = 'http://www.ottawatechwatch.com/story.php?title=recycle-can]'>here.</a>", "Summer 2017", "Ottawa"],
    ["Debate Semi-finalist", "", "Provincial Tournament", "Semi-finalist in annual Ontario Student Debating Society (OSDU) provincial tournament. Fluent bilingual debater.", "May 2016", "Toronto"],
  ["ICS Subject Award", "", "Highest Mark In Course", "Attained subject award in Introduction to Computer Science course with over 80 students enrolled.", "2015", "Colonel By"],

],

//Network
[

  [ "LinkedIn","url('images/Network/linkedin.png')", myUrl,"", "N/A", "N/A",  "" ],

  [ "GitHub","url('images/Network/github2.png')", myUrl2, "", "N/A", "N/A", "" ],

  [ "Facebook","url('images/Network/facebook2.png')",  myUrl3, "", "N/A", "N/A",  "" ],

  [ "Mail","url('images/Network/email2.png')", myUrl4, "", "N/A", "N/A", ""  ]


],

//Languages
[

  [ "Coding Languages","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Swift", 90, "Javascript",90, "C++", 90, "Python", 90, "Visual Basic",85, "React", 85, "Java" , 75 , "CSS", 75 , "HTML", 75, "C#", 65, "Objective-C", 55, "Proficiency"]],

  [ "Linguistics","","Language Skills", "Proficient: English, French.<br > <br > Experienced: Mandarin.", "N/A", "N/A", ""],

],

//Education
[

  [ "University of Waterloo","", "Honours Software Engineering", "Coop program and class of 2022", "2017 - 2022 (Expected)", "Waterloo", ""],

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
