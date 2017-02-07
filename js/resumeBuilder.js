/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var links = ['#', ];
var bio = {
	"name": "Jonathan Fitzgibbon",
	"role": "Web Developer",
	"contacts": {
		"mobile": "803-538-1057",
		"email": "jonnyfitzgib@gmail.com",
		"github": "True14",
		"location": "Columbia, South Carolina"
	},
	"welcomeMessage": "Hello! Welcome to my resume.",
	"skills": [
		"HTML", " CSS ", " Java", " C++", " C", " JavaScript"
	],

	"biopic": "images/me.jpg",


};

var education = {
	"schools": [{
		"name": "University of South Carolina",
		"location": "Columbia, South Carolina",
		"degree": "Bachelors",
		"majors": ["Computer Science"],
		"dates": "2009-2015",
		"url": "https://www.sc.edu",
	}, ],
	"online_courses": [{
		"title": "Frontend Nanodegree",
		"school": "Udacity",
		"dates": "2016-2017",
		"url": "https://www.udacity.com/",
	}, ]
};

var projects = {
	"projects": [{
			"title": "Portfolio Website",
			"dates": "2016",
			"description": "Website featuring my work",
			"images": ["images/website.jpg"],
			"url": "https://true14.github.io"
		},
		{
			"title": "USCconnect",
			"dates": "2014-2015",
			"description": "Android application for USCconnect",
			"images": ["images/uscconnect.jpg"],
			"url": "https://github.com/SCCapstone/USCConnect"
		},
	],
};

var work = {
	"jobs": [{
		"employer": "Barnes & Noble",
		"title": "Temporary Hire",
		"location": "University of South Carolina, Columbia, South Carolina",
		"dates": "July-August, 2011/June-September, 2012",
		"description": "Temporary hire, helped fulfill textbook orders" +
			"for returning students as well as general staff responsibilities.",
	}, ]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	$('#header').prepend(formattedName, formattedRole);
	$('#header').append(formattedPic, formattedMessage);
	$('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);


	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
};

work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedworkTitle;

		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		$('.work-entry:last').append(formattedDescription);
	}
};

projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace('#', projects.projects[i].url);
		$('.project-entry:last').append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		$('.project-entry:last').append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('.project-entry:last').append(formattedDescription);
		if (projects.projects[i].images.length > 0) {
			for (var z = 0; z < projects.projects[i].images.length; z++) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[z]);
				$('.project-entry:last').append(formattedImage);
			}
		}
		$('.project-entry:last').find('a').attr('target', '_blank');

	}
};

education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
		$('#education').append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
		var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
		var formattednameDegree = formattedschoolName + formattedschoolDegree;
		$('.education-entry:last').append(formattednameDegree);
		var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
		$('.education-entry:last').append(formattedschoolLocation);
		var formattedschoolDate = HTMLschoolDates.replace('%data%', education.schools[i].dates);
		$('.education-entry:last').append(formattedschoolDate);
		for (var z = 0; z < education.schools[i].majors.length; z++) {
			var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[z]);
			$('.education-entry:last').append(formattedschoolMajor);
		}
		$('.education-entry:last').find('a').attr('target', '_blank');
	}

	$('#education').append(HTMLonlineClasses);
	for (i = 0; i < education.online_courses.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.online_courses[i].title);
		$('.education-entry:last').append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.online_courses[i].school);
		$('.education-entry:last').append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.online_courses[i].dates);
		$('.education-entry:last').append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.online_courses[i].url);
		$('.education-entry:last').append(formattedOnlineURL);
		$('.education-entry:last').find('a').attr('target', '_blank');
		$('.education-entry:last').find('a').attr('href', education.online_courses[i].url);
	}

};

bio.display();
work.display();
projects.display();
education.display();

// function inName(name){
//   var splitName = name.trim().split(" ");
//   splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
//   splitName[1] = splitName[1].toUpperCase();
//   return splitName[0] + " " + splitName[1];
// }
// $('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
