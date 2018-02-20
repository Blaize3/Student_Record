
var studendIdLink = getByID("student-id-link");
var displayedStudentID = getByID("student-id");
var studentFullname = getByID("fullname");
var studentSex = getByID("sex");
var studentEmail = getByID("email");
var deleteStudentSelect = getByID("delete-student-select");
var deleteStudendIdLink = getByID("student-delete-link");
var registerStudentBtn = getByID("register-student-btn");
var registerStudentError = getByID("student-error-message");


function getByID(elementID){
	return document.getElementById(elementID);
}

function generateStudentID(e){
	e.preventDefault();

	var sexOptions = `
						<option value="Female">Female</option>
					    <option value="Male">Male</option>
					    <option value="Others">Others</option>`;
	
	studentEmailFieldClick();
	getByID("sex").innerHTML = "";
	getByID("sex").innerHTML = sexOptions;

	//console.log("click");
	var studentID = "";
	var numberOfRegisterStudent = Students.length;
	//var lastRegStudent = Students[]

	if (numberOfRegisterStudent < 1){
		studentID = "STUD001";
		displayedStudentID.value = studentID;
	} else {
		studentID = "STUD" + computeStudent();
		displayedStudentID.value = studentID;
	}
	getByID("register-student-btn").setAttribute("data-dismiss", "");
	//generateDropdownStudentID();
}

function computeStudent(){
	var lastStudentID = Students[Students.length - 1].studentID;
	var numCharInStudentID = lastStudentID.substr(4, (lastStudentID.length - 1));

	var lastStudentIDNum = parseInt(numCharInStudentID);

	lastStudentIDNum++;

	var newStudentIDString = lastStudentIDNum.toString();

	while (newStudentIDString.length < 3){
		newStudentIDString = "0" + newStudentIDString;
	}
	
	return newStudentIDString;
}

function generateDropdownStudentID(){
	var options = "<option value=''>Select Student Details</option>";

	if (Students.length < 1){
		deleteStudentSelect.innerHTML = "";
		deleteStudentSelect.innerHTML = options;
	} else {
		for (var i = 0; i < Students.length; i++){
			options += "<option value='" + Students[i].studentID + "'>" + Students[i].fullname + " (" + Students[i].studentID + ") </option>"
		}
		deleteStudentSelect.innerHTML = "";
		deleteStudentSelect.innerHTML = options;
	}

	getByID("register-student-btn").setAttribute("data-dismiss", "");
	getByID("delete-student-error-message").innerText = "";
}

function registerAStudent(){
	var studentFullname2 = getByID("fullname");
	var displayedStudentID2 = getByID("student-id");

	 if (studentEmail.value == "" && studentFullname2.value == ""){
	 	registerStudentError.innerText = "Fullname and email fields are empty."
	 	studentFullname2.style.borderColor = "red";
		studentEmail.style.borderColor = "red";
	 } else if (studentFullname2.value == ""){
	 	registerStudentError.innerText = "Fullname fields is empty."
	 	studentFullname2.style.borderColor = "red";
	 } else if (studentEmail.value == ""){
	 	registerStudentError.innerText = "Email fields is empty."
		studentEmail.style.borderColor = "red";
	 } else {
	 	var newStudent = {
	 		studentID: displayedStudentID2.value,
			fullname: studentFullname2.value,
			sex: studentSex.value,
			email: studentEmail.value,
			areCoursesRegistered: false
	 	}

	 	Students.push(newStudent);

	 	displayedStudentID2.value = "";
		studentFullname2.value = "";
		studentSex.value = "";
		studentEmail.value = "";

		getByID("register-student-btn").setAttribute("data-dismiss", "modal");
		//getByID("register-student-btn").setAttribute("data-dismiss", "");

	 }
	 homePageDisplay();
	 //generateDropdownStudentID();
}

function studentFullnameFieldClick(){
	var studentFullname2 = getByID("fullname");
	studentFullname2.style.borderColor = "green";
	studentEmail.style.borderColor = "green";
	registerStudentError.innerText = "";
}

function studentEmailFieldClick(){
	var studentFullname2 = getByID("fullname");
	studentFullname2.style.borderColor = "green";
	studentEmail.style.borderColor = "green";
	registerStudentError.innerText = "";
}

function deleteStudentAccoount(){
	var deleteSelectOption = getByID("delete-student-select");
	var index;
	var deletedStudent;

	if (deleteSelectOption.value == ""){
		getByID("delete-student-select").style.borderColor = "red";
		getByID("delete-student-error-message").innerText = "Please Select an Item from the Dropdown";
	} else {
		console.log(deleteSelectOption.selectedIndex);
		index = deleteSelectOption.selectedIndex - 1;
		deletedStudent = Students.splice(index, 1);
		//console.log("I was clicked");
		homePageDisplay();
		getByID("delete-student-btn").setAttribute("data-dismiss", "modal");


	}
	
	//  other Processes to be  completed
}

function deleteStudentSelectClick(){
	getByID("delete-student-select").style.borderColor = "green";
	getByID("delete-student-error-message").innerText = "";
}


studendIdLink.addEventListener("click", generateStudentID, false);
deleteStudendIdLink.addEventListener("click", generateDropdownStudentID, false);
registerStudentBtn.addEventListener("click", registerAStudent, false);
studentFullname.addEventListener("click", studentFullnameFieldClick, false);
studentEmail.addEventListener("click", studentEmailFieldClick, false);
deleteStudentSelect.addEventListener("click", deleteStudentSelectClick, false);





