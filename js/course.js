
var courseIdLink = getByID("course-id-link");
var displayedCourseID = getByID("course-id");
//var selectOptions = getByID("select-option");
var deleteCourseSelect = getByID("delete-course-select");
var deleteCourseIdLink = getByID("course-delete-link");
var addCourseBtn = getByID("add-course-btn");

var addCourseErrMsg = getByID("course-error-message");
var courseIdVal = getByID("course-id");
var courseTitleVal = getByID("course-title");
var instructorSelectOption = getByID("instructor-select-option");


function getByID(elementID){
	return document.getElementById(elementID);
}

function generateCourseID(){

	//console.log("click");
	var courseID = "";
	var numberOfRegisterCourses = Course.length;
	//var lastRegStudent = Students[]

	if (numberOfRegisterCourses < 1){
		courseID = "001";
		displayedCourseID.value = courseID;
	} else {
		courseID = computeCourse();
		displayedCourseID.value = courseID;
	}
}

function computeCourse(){
	var lastCourseID = Course[Course.length - 1].courseID;
	//var numCharInStudentID = lastStudentID.substr(4, (lastStudentID.length - 1));

	var lastCourseIDNum = parseInt(lastCourseID);

	lastCourseIDNum++;

	var newCourseIDString = lastCourseIDNum.toString();

	while (newCourseIDString.length < 3){
		newCourseIDString = "0" + newCourseIDString;
	}
	
	console.log(newCourseIDString);
	return newCourseIDString;
}

function dropdownContent(){
	var options = "<option value=''>Select Course Instructor</option>";

	if (Instructors.length < 1){
		instructorSelectOption.innerHTML = options;
	} else {
		for (var i = 0; i < Instructors.length; i++){
			options += "<option value='" + Instructors[i].instructorID + "'>" + Instructors[i].fullname + " (" + Instructors[i].instructorID + ") </option>"
		}

		instructorSelectOption.innerHTML = options;
	}
}

function generateNewDefault(e){
	e.preventDefault();
	generateCourseID();
	dropdownContent();
	getByID("add-course-btn").setAttribute("data-dismiss", "");
	instructorSelectOptionFieldClick();
}


function generateDropdownCourseID(){
	var options = "<option value=''>Select Course Details</option>";
	getByID("delete-course-btn").setAttribute("data-dismiss", "");
	deleteCourseSelectClick();

	if (Course.length < 1){
		deleteCourseSelect.innerHTML = options;
	} else {
		for (var i = 0; i < Course.length; i++){
			options += "<option value='" + Course[i].courseID + "'>" + Course[i].courseTitle + " (" + Course[i].courseID + ") </option>"
		}

		deleteCourseSelect.innerHTML = options;
	}
}

function addCourse(){

	 // addCourseBtn

	 // addCourseErrMsg
	 // courseIdVal
	 // courseTitleVal
	 // instructorSelectOption

	// var studentFullname2 = getByID("fullname");
	// var displayedStudentID2 = getByID("student-id");

	 if (courseTitleVal.value == "" && instructorSelectOption.value == ""){
	 	addCourseErrMsg.innerText = "Course title and course instructor fields are empty."
	 	courseTitleVal.style.borderColor = "red";
		instructorSelectOption.style.borderColor = "red";
	 } else if (courseTitleVal.value == ""){
	 	addCourseErrMsg.innerText = "Course title fields is empty."
	 	courseTitleVal.style.borderColor = "red";
	 } else if (instructorSelectOption.value == ""){
	 	addCourseErrMsg.innerText = "Course instructor fields is empty."
		instructorSelectOption.style.borderColor = "red";
	 } else {
	 	var newCourse = {
	 		courseID: courseIdVal.value,
			courseTitle: courseTitleVal.value,
			instructorID: instructorSelectOption.value
	 	}

	 	Course.push(newCourse);

	 	courseIdVal.value = "";
		courseTitleVal.value = "";
		instructorSelectOption.value = "";
		homePageDisplay();
		getByID("add-course-btn").setAttribute("data-dismiss", "modal");

	 }	 
}

function courseTitleValFieldClick(){
	courseTitleVal.style.borderColor = "green";
	instructorSelectOption.style.borderColor = "green";
	addCourseErrMsg.innerText = "";
}

function instructorSelectOptionFieldClick(){
	courseTitleVal.style.borderColor = "green";
	instructorSelectOption.style.borderColor = "green";
	addCourseErrMsg.innerText = "";
}


function deleteCourseAccoount(){
	var deleteSelectOption = getByID("delete-course-select");
	var index;
	var deletedCourse;

	if (deleteSelectOption.value == ""){
		getByID("delete-course-select").style.borderColor = "red";
		getByID("delete-course-error-message").innerText = "Please Select an Item from the Dropdown";
	} else {
		//console.log(deleteSelectOption.selectedIndex);
		index = deleteSelectOption.selectedIndex - 1;
		deletedCourse = Course.splice(index, 1);
		console.log(deletedCourse);
		homePageDisplay();
		getByID("delete-course-btn").setAttribute("data-dismiss", "modal");
	}	
}

function deleteCourseSelectClick(){
	getByID("delete-course-select").style.borderColor = "green";
	getByID("delete-course-error-message").innerText = "";
}

courseIdLink.addEventListener("click", generateNewDefault, false);
deleteCourseIdLink.addEventListener("click", generateDropdownCourseID, false);
addCourseBtn.addEventListener("click", addCourse, false);
courseTitleVal.addEventListener("click", courseTitleValFieldClick, false);
instructorSelectOption.addEventListener("click", instructorSelectOptionFieldClick, false);
getByID("delete-course-select").addEventListener("click", deleteCourseSelectClick, false);



