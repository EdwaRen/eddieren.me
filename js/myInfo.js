//
// Copyright (c) 2017 by Edward Ren. All Rights Reserved.
//

var groups =[
  "Profile", "Work", "Projects", "Network", "Languages", "Education", "Other"
]
var groupsImages =[
  "url('images/Profile.png')", "url('images/Experience.png')", "url('images/Projects.png')", "url('images/Network.png')", "url('images/Languages.png')", "url('images/Education.png')", "url('images/Other.png')"
]

var files0 = [
  [ "Readme","url('images/Edward_ProfilePic.png')", "Getting Started", "Hi I'm Edward! I love architecting interactive web designs.<br > <br >Navigate through the tabs under the 'find' bar to the right. Alternatively, see <a href = \"alternate.html\">here</a> and my resume <a href=\"images/resume.pdf\" download=\"resume.pdf\">here</a>.<br /><br />Also, try dragging this window tab around.", "Summer 2017", "University of Waterloo", "url('images/Document.png')"]
]

var files1 = [
  [ "Ciena Corporation","", "Embedded Software Licensing", "Increased operational efficiency by over 50% using Visual Basic and Excel formulas to process licensing data for thousands of programs and packages. <br ><br >1 of 2 interns selected out of an applicant pool of over 100 students <br ><br >Collaborated with colleagues to redesign a section of Ciena's internal intranet using HTML", "Summer 2016", "Ottawa-Kanata", "url('images/coding.png')"],
  [ "Noteblock","", "Front and Back End Web Developer", "Utilized an object oriented approach to organize and process data automatically mined from site input.<br ><br >Hosted web service using custom domain address and host provider", "Summer 2016", "Ottawa-Colonel By", "url('images/coding.png')"]
]

var files2 = [
  [ "Recycle Can","", "Founder, Chief iOS and Web Developer", "Integrated application using delegates, MapKit, geocoding, and automatic route plotting connected to our database of over 20000 locations. <br ><br >Data Processing of over 50-megabyte raw text files in Microsoft Excel using VBA and formulas. <br > <br >Integrated a respective website using Google Maps API with over 24000 page visits in addition to 13000 mobile application downloads.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", "url('images/ProjectsIcon2.png')"],
  [ "Morsecret","", "Founder, Overall Developer", "Morsecret is an ad-hoc distributed application that uses a novel haptic steganographic approach for real-time chat messaging.<br ><br >Privately communicates using morse code facilitated by Firebase.<br ><br >Employed Model-View-Controller (MVC) architectural pattern to process conversion of alphabetical characters into haptic feedback", "Summer 2017", "Ottawa-Colonel By",  "url('images/ProjectsIcon2.png')"],
  [ "Team Goals","", "Founder, Overall Developer", "Website coded with React and supported by Firebase to create a real-time database that organizes goals for a team.<br ><br >Employed Javascript ES6 with Redux to support a high degree of user interactivity with website.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By",  "url('images/ProjectsIcon2.png')"]
]
var str = "My LinkedIn";
var myUrl = str.link("https://www.linkedin.com/in/edwardren/") ;
var str2 = "My GitHub";
var myUrl2 = str2.link("https://github.com/EdwaRen") ;
var str3 = "My Facebook";
var myUrl3 = str3.link("https://www.facebook.com/eddie.ren.1") ;
var str4 = "My Email";
var myUrl4 = str4.link("mailto:edward.ren.2013@gmail.com") + "<br > Edward.ren.2013@gmail.com";

var files3 = [

  [ "LinkedIn","url('images/Network/linkedin.png')", myUrl,"", "N/A", "N/A",   "url('images/Network/linkedin2.png')"],
  [ "GitHub","url('images/Network/github2.png')", myUrl2, "", "N/A", "N/A",  "url('images/Network/github2.png')"],
  [ "Facebook","url('images/Network/facebook2.png')",  myUrl3, "", "N/A", "N/A",   "url('images/Network/facebook2.png')"],
  [ "Mail","url('images/Network/email2.png')", myUrl4, "", "N/A", "N/A",   "url('images/Network/email2.png')"]


]

var files4 = [

  [ "Coding Languages","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", "Swift", 90, "Javascript",90, "C++", 90, "Python", 90, "Visual Basic",80, "React", 80, "Java" , 70 , "CSS", 70 , "HTML", 70, "C#", 60, "Objective-C", 50],
  [ "Linguistics","","Language Skills", "Proficient: English, French.<br > <br > Experienced: Mandarin.", "N/A", "N/A", "url('images/chat.png')"],

]

var files5 = [

  [ "University of Waterloo","", "Honours Software Engineering", "Coop program and class of 2022", "2017 - 2022 (Expected)", "Waterloo", "url('images/college.png')"],
  [ "Colonel By","","Secondary School", "Received international baccalaureate diploma alongside Ontario Secondary School French Immersion Diploma.", "2012 - 2017", "Ottawa", "url('images/open-book.png')"]

]

var files6 = [
  [ "CLS","","Aerospace Research Assistant", "Cooperated with researchers to analyze elemental composition of a Boeing 737 turbine engine using beamlines from the Canadian Light Source (CLS) national synchrotron.<br ><br >Presented findings to over 200 students and professors at the University of Saskatchewan.", "Summer 2016", "Saskatoon",  "url('images/Document.png')"],
  [ "SHAD","","SHAD Alumnus (Formerly Shad Valley)", "1 of 7 students from my high school selected to participate in SHAD, a competitive national entrepreneurial enrichment program.", "Summer 2016", "Saskatoon", "url('images/Document.png')"],
  [ "Debate","","Debating Society - Executive Committee", "Semi-finalist in Ontario Provincial Debating Championships (2016).<br ><br >Practiced for 5 hours a week after school and competed at various provincial and national tournaments.", "2012 - 2017", "Nationwide", "url('images/Document.png')"],
  [ "Cross Country Team","","Long Distance Runner", "Participated as a runner on the Colonel By Cross Country team and competed at the Louis Riel meets each year.", "2014 - 2017", "Ottawa-Colonel By", "url('images/Document.png')"],

  [ "Interests","", "Hobbies and Amusement", "Skiing, Swimming, Rock Climbing, Hiking, Piano, Chess, Trivia, Competitive Programming, Speed Rubik's Cubing", "N/A", "N/A", "url('images/Document.png')"],


]

var files7 = [

]

var files8 = [

]
var files9 = [

]

var files = []

//Todo, if I end up including a list of proper licenses
// Icon made by Dave Gandy from www.flaticon.com, licensed by Creative Commons BY 3.0
//Roundicon
//Chanut is Industries
//Freepik
//Madebyoliver
//Pixel Buddha
//Icon Pond
