var studendCourseFormLink = getByID("student-course-form-link");
var homeMainDisplaySection = getByID("result-display-section");

function generateCourseListCheckboxes(){
	var courseCheckboxList = "";


	if (Course.length < 1){
		// do nothing.....
	} else {
		for (var i = 0; i < Course.length; i++){
			courseCheckboxList +=  `<div class="col-lg-4">
								    	<div class="row checkbox-padding">
								    		<div class="form-check form-check-inline">
											  <input class="form-check-input course-list" type="checkbox" id="inlineCheckbox1" value="${Course[i].courseID}">
											  <label class="form-check-label" for="inlineCheckbox1">${Course[i].courseTitle}</label>
											</div>
								    	</div>
								    </div>`;
		}

		return courseCheckboxList;
	}
}

function generateDropdownStudentIDForCourseForm(){
	var options = "<option value=''>Select Student Details</option>";


	if (Students.length < 1){
		return options;
	} else {
		for (var i = 0; i < Students.length; i++){
			if (!Students[i].areCoursesRegistered){
				options += "<option value='" + Students[i].studentID + "'>" + Students[i].fullname + " (" + Students[i].studentID + ") </option>";
			}
			
		}

		return options
	}
}





function studentCourseForm(e){
	e.preventDefault();

	var courseFormPage = `
						<div class="row"><br><br>
							<div style="width: 400px; margin-left: auto; margin-right: auto;">
								<br><br><h1 style="width: 100%;" align="center">Student Course Form</h1>
								<div class="form-group">
									<div class="form-group"><br>
						      			<label>Students Details</label>
						      			<select class="form-control" id="course-form-select">
						      				${generateDropdownStudentIDForCourseForm()}
						      			</select>
						      		</div>
								</div>
							</div>
						</div>
						<div class="row"><br><br>
							<h3 style="width: 100%;" align="center">Course List</h3><br><br>
						</div>
						<div class="row">
							<form style="width: 100%">
							  <div class="row">
							      ${generateCourseListCheckboxes()}
							  </div>
							  <div>
							  	  <div class="form-control" style="text-align: center;">
							          <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
							          <br><br>
							          <button type="button" onclick="completeStudentCourseForm()" class="btn btn-outline-success">Complete Course Registeration</button>
							      	  <br><br><br>
							      </div>
							  </div>
							</form>
						</div>
					`;

	homeMainDisplaySection.innerHTML = courseFormPage;
}

function completeStudentCourseForm(){
	var checkBoxList = document.getElementsByClassName("course-list");
	var courseFormSelect = getByID("course-form-select");
	var studentIdVal;
	var courseListId = [];
	var selectedCourseList = [];

	if (courseFormSelect.value == ""){

	} else {
		studentIdVal = courseFormSelect.value;

		for (var i = 0; i < checkBoxList.length; i++){
			if (checkBoxList[i].checked){
				courseListId.push(checkBoxList[i].value);
			}
		}
	}

	for (var j = 0; j < courseListId.length; j++){
		for (var k = 0; k < Course.length; k++){
			if (Course[k].courseID == courseListId[j]){
				selectedCourseList.push(Course[k]);
			}
		}
	}

	var newCourseForm = {
		studentID: studentIdVal,
		courses: selectedCourseList
	}

	//removeAttribute("checked")

	// console.log(newCourseForm);
	if (courseFormSelect.value == ""){

	} else {
		StudentCourseList.push(newCourseForm);
		console.log("Course Form updated...");
	}

	var test;

	for (var i = 0; i < Students.length; i++){
		if (Students[i].studentID == studentIdVal){
			Students[i].areCoursesRegistered = true;
			// test = Students[i].areCoursesRegistered;
			console.log(Students[i].areCoursesRegistered);
		}
	}

	getByID("course-form-select").innerHTML = generateDropdownStudentIDForCourseForm();

	//console.log(Students[i].areCoursesRegistered);


	for (var i = 0; i < checkBoxList.length; i++){
		if (checkBoxList[i].checked){
			checkBoxList[i].checked = false;
		}
	}


	///////////////////////////
	homePageDisplay();
}


studendCourseFormLink.addEventListener("click", studentCourseForm, false);

