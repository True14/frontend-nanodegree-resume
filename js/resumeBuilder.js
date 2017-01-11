
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Jonathan Fitzgibbon",
  "role" : "Web Developer",
  "contact": {
    "mobile": "803-538-1057",
    "email": "jonnyfitzgib@gmail.com",
    "github": "True14",
    "location":"Columbia, South Carolina"
  },
  "skills": [
    "HTML", " CSS ", " Java", " C++", " C", " JavaScript"
  ],

  "bioPic" : "images/me.jpg",
  "welcome-message": "Hello!",

};

var education = {
  "schools": [
    {
      "name": "University of South Carolina",
      "date": "2015",
      "location" : "Columbia, South Carolina",
      "degree" : "Bachelors",
      "majors" : ["Computer Science"],
    },
  ],
  "online courses": [
    {
      "title": "Frontend Nanodegree",
      "school": "Udacity",
      "date": "2016-2017",
      "url": "www.udacity.com"
    },
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Portfolio Website",
      "date" : "2016",
      "description" : "Website featuring my work",
      "image" : "images/website.jpg"
    },
    {
      "title" : "USCconnect",
      "date" : "2016",
      "description" : "Android application for USCconnect",
      "image" : "images/uscconnect.jpg"
    },
  ],
};

var work = {
  "jobs" : [
    {
    "employer" : "Barnes & Noble",
    "title" : "Temporary Hire",
    "dates" : "July-August, 2011/June-September, 2012",
    "location" : "University of South Carolina, Columbia, South Carolina",
    "description" : "Temporary hire, helped fulfill textbook orders\
    for returning students as well as general staff responsibilities.",
    },
  ]
};

formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var i = 0;
  while(i<bio.skills.length){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
    i += 1;
  }
}
function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedworkTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

function inName(name){
  var splitName = name.trim().split(" ");
  splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
  splitName[1] = splitName[1].toUpperCase();
  return splitName[0] + " " + splitName[1];
}
$('#main').append(internationalizeButton);

projects.display = function() {
  for(i=0; i<projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].date);
    $(".project-entry:last").append(formattedDate);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);
    if(projects.projects[i].image.length > 0){
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
      $(".project-entry:last").append(formattedImage);
    }
  }
}

projects.display();
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
// var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);
// var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
//
// $("#header").prepend(formattedSkills);
// //$("#header").prepend(HTMLskillsStart);
// $("#header").prepend(formattedLocation);
// $("#header").prepend(formattedGitHub);
// $("#header").prepend(formattedEmail);
// $("#header").prepend(formattedMobile);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#header").prepend(formattedPic);
// $("#header").append(education.name);
// $("#header").append(education["years"]);
