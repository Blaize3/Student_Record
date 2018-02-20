
var instructorIdLink = getByID("instructor-id-link");
var deleteInstructorSelect = getByID("delete-instructor-select");
var deleteInstructorIdLink = getByID("instructor-delete-link");


var displayedInstructorID = getByID("instructor-id");
var addInstructorErrMsg = getByID("instructor-error-message");
var instructorFullname = getByID("instructor-name");
var addInstructorBtn = getByID("add-instructor-btn");

function getByID(elementID){
	return document.getElementById(elementID);
}

function generateInstructorID(e){
	e.preventDefault();
	instructorFullnameFieldClick();
	getByID("delete-instructor-btn").setAttribute("data-dismiss", "");
	//console.log("click");
	var instructorID = "";
	var numberOfRegisterInstructors = Instructors.length;

	if (numberOfRegisterInstructors < 1){
		instructorID = "MOATINSTR001";
		displayedInstructorID.value = instructorID;
	} else {
		instructorID = "MOATINSTR" + computeInstrucor();
		displayedInstructorID.value = instructorID;
	}
}

function computeInstrucor(){
	var lastInstrctorID = Instructors[Instructors.length - 1].instructorID;
	var numCharInInstructorID = lastInstrctorID.substr(9, (lastInstrctorID.length - 1));

	var lastInstructorIDNum = parseInt(numCharInInstructorID);

	lastInstructorIDNum++;

	var newInstructorIDString = lastInstructorIDNum.toString();

	while (newInstructorIDString.length < 3){
		newInstructorIDString = "0" + newInstructorIDString;
	}
	
	return newInstructorIDString;
}

function generateDropdownInstructorID(){
	var options = "<option value=''>Select Instructor Details</option>";
	getByID("delete-instructor-btn").setAttribute("data-dismiss", "");
	deleteStudentSelectClick();


	if (Instructors.length < 1){
		deleteInstructorSelect.innerHTML = options;
	} else {
		for (var i = 0; i < Instructors.length; i++){
			options += "<option value='" + Instructors[i].instructorID + "'>" + Instructors[i].fullname + " (" + Instructors[i].instructorID + ") </option>"
		}

		deleteInstructorSelect.innerHTML = options;
	}
}


function addInstructor(){
	 // displayedInstructorID 
	 // addInstructorErrMsg 
	 // instructorFullname 
	 // addInstructorBtn 

	 if (instructorFullname.value == ""){
	 	addInstructorErrMsg.innerText = "Instructor name fields is empty."
		instructorFullname.style.borderColor = "red";
	 } else {
	 	var newInstructor = {
	 		instructorID: displayedInstructorID.value,
			fullname: instructorFullname.value
	 	}

	 	console.log(newInstructor);
	 	Instructors.push(newInstructor);

	 	displayedInstructorID.value = "";
		instructorFullname.value = "";

		homePageDisplay();
		getByID("delete-instructor-btn").setAttribute("data-dismiss", "modal");
	 }
}

function instructorFullnameFieldClick(){
	instructorFullname.style.borderColor = "green";
	addInstructorErrMsg.innerText = "";
}


function deleteInstructorAccoount(){
	var deleteSelectOption = getByID("delete-instructor-select");
	var index;
	var deletedInstructor;

	if (deleteSelectOption.value == ""){
		getByID("delete-instructor-select").style.borderColor = "red";
		getByID("delete-instructor-error-message").innerText = "Please Select an Item from the Dropdown";
	} else {
		//console.log(deleteSelectOption.selectedIndex);
		index = deleteSelectOption.selectedIndex - 1;
		deletedInstructor = Instructors.splice(index, 1);
		//console.log(deletedInstructor);
		homePageDisplay();
		getByID("delete-instructor-btn").setAttribute("data-dismiss", "modal");
	}
}

function deleteStudentSelectClick(){
	getByID("delete-instructor-select").style.borderColor = "green";
	getByID("delete-instructor-error-message").innerText = "";
}

instructorIdLink.addEventListener("click", generateInstructorID, false);
deleteInstructorIdLink.addEventListener("click", generateDropdownInstructorID, false);
addInstructorBtn.addEventListener("click", addInstructor, false);
instructorFullname.addEventListener("click", instructorFullnameFieldClick, false);
getByID("delete-instructor-select").addEventListener("click", deleteStudentSelectClick, false);

