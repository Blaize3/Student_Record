var studendExamReecordLink = getByID("student-exam-record-link");
var homeMainDisplaySection = getByID("result-display-section");



function studentExamScoreForm(){
	//e.preventDefault();

	 //console.log(generateDropdownStudentIDForComputeResultPage());

	var examinationPage = `<div class="row">
					<h1 style="text-align: center; width: 100%;"><br>Student Examination Score Form</h1>
				</div>
				<div class="row">
			      <div class="col-lg-5">
			        <div class="row">
			        	<div style="width: 80%; margin-left: auto; margin-right: auto;">
				      		<div class="form-group"><br>
				      			<label>Students Details</label>
				      			<select onchange="studentCourseList()" class="form-control" id="student-exam-score-select">
				      				
				      			</select><br>
				      		</div>
				      		<h4>Student Report Summary</h4>
				      		<table style="width: 100%; margin-top: 10px;">
				      			<tr>
				      				<td class="table-tag-text">A's</td>
				      				<td class="table-value-text" id="A">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">B's</td>
				      				<td class="table-value-text" id="B">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">C's</td>
				      				<td class="table-value-text" id="C">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">D's</td>
				      				<td class="table-value-text" id="D">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">E's</td>
				      				<td class="table-value-text" id="E">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">F's</td>
				      				<td class="table-value-text" id="F">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">Average</td>
				      				<td class="table-value-text" id="average">-</td>
				      			</tr>
				      			<tr>
				      				<td class="table-tag-text">Remark</td>
				      				<td class="table-value-text" id="remark">-</td>
				      			</tr>
				      		</table><br><br><br>
			        	</div>
			        </div>
			      </div>
			      <div class="col-lg-7">
			        <div class="row">
			        	<h4 style="width: 100%; text-align: center;"><br>Examination Score Summary</h4>
			        	<form id="courses-score-section" style="width: 100%; padding-top: 30px;">
			        		
			        	</form>
			        </div>
			      </div>
			    </div>`;

	homeMainDisplaySection.innerHTML = examinationPage;


	getByID("student-exam-score-select").innerHTML = generateDropdownStudentIDForComputeResultPage();

}

function generateDropdownStudentIDForComputeResultPage(){
	var options = "<option value=''>Select Student Details</option>";
	
	if (Students.length < 1){
		console.log("Something Wicked just happened");
		return options;
	} else {
		for (var i = 0; i < Students.length; i++){
			// for (var j = 0; j < ExaminationRecords.length; j++){
			// 	if(Students.length < 1){
			// 		return options;
			// 	}else{
				if ((Students[i].areCoursesRegistered) /*&& (ExaminationRecords[j].studentID != Students[i].studentID)*/){
					options += "<option value='" + Students[i].studentID + "'>" + Students[i].fullname + " (" + Students[i].studentID + ") </option>";
				}
			// 	}
			// }	
		 }

		return options
	}
}

function studentCourseList(){
	//e.preventDefault();
	var studentExamScoreSelect = getByID("student-exam-score-select");
	var examFormCourses = "";


	if(studentExamScoreSelect.value == ""){
		examFormCourses = "";
	} else {
		if (StudentCourseList.length < 1){
			examFormCourses = "";
		} else {
			for (var i = 0; i < StudentCourseList.length; i++) {
				if (studentExamScoreSelect.value == StudentCourseList[i].studentID){
					// console.log(StudentCourseList[i].studentID);
					for (var j = 0; j < StudentCourseList[i].courses.length; j++) {
					examFormCourses += `<div class="row" style="width: 100%;">
							    <div class="col-lg-6">
							      <label style="font-size: 20px; padding-top: 2px; padding-left: 20px;">${StudentCourseList[i].courses[j].courseTitle}</label>
							    </div>
							    <div class="col-lg-3">
							    	<input type="text" id="${StudentCourseList[i].courses[j].courseID}" class="form-control all-score" value="" placeholder="Student Score">
							    </div>
							    <div class="col-lg-3">
							      <input type="text" id="${StudentCourseList[i].courses[j].courseTitle + "Grade"}" class="form-control all-grade" value="" placeholder="Score Grade" readonly="">
							    </div>
							</div>`;
					}
				}
			}
			examFormCourses += `<div class="row">
								<div class="form-control" style="text-align: center; width: 80%;">
							          <br><br>
							          <button type="button" onclick="computeStudentGrade()" class="btn btn-outline-success">Display Result</button>
							          <button type="button" onclick="processComputedStudentGrade()" class="btn btn-outline-success">Process Student Result</button>
							      	  <br><br><br>
							      </div>
							</div>`;	
		}
	}

		
	getByID("courses-score-section").innerHTML = examFormCourses;
	
}

function computeStudentGrade(){
	var studentExamScoreSelect = getByID("student-exam-score-select");
	var scoreList = document.getElementsByClassName("all-score");
	var gradeList = document.getElementsByClassName("all-grade");
	var gradeCount = document.getElementsByClassName("table-value-text");
	var totalScores = 0;
	var courseArray = [];
	var organizedCourseData = [];
	var A = 0;
	var B = 0;
	var C = 0;
	var D = 0;
	var E = 0;
	var F = 0;


	if (studentExamScoreSelect.value == ""){

	} else {
		for (var i = 0; i < scoreList.length; i++){

			if ((parseInt(scoreList[i].value) >= 70) && (parseInt(scoreList[i].value) <= 100)){
				A++;
				totalScores += parseInt(scoreList[i].value);
				gradeList[i].value = "A";
				courseArray = computeCourseSummary(scoreList[i].id);
				organizedCourseData.push({
					courseID: courseArray[0],
					courseTitle: courseArray[1],
					score: parseInt(scoreList[i].value),
					grade: 'A'
				});
			} else if ((parseInt(scoreList[i].value) >= 60) && (parseInt(scoreList[i].value) <= 69)){
				B++;
				totalScores += parseInt(scoreList[i].value);
				gradeList[i].value = "B";
				courseArray = computeCourseSummary(scoreList[i].id);
				organizedCourseData.push({
					courseID: courseArray[0],
					courseTitle: courseArray[1],
					score: parseInt(scoreList[i].value),
					grade: 'B'
				});
			} else if ((parseInt(scoreList[i].value) >= 50) && (parseInt(scoreList[i].value) <= 59)){
				C++;
				totalScores += parseInt(scoreList[i].value);
				gradeList[i].value = "C";
				courseArray = computeCourseSummary(scoreList[i].id);
				organizedCourseData.push({
					courseID: courseArray[0],
					courseTitle: courseArray[1],
					score: parseInt(scoreList[i].value),
					grade: 'C'
				});
			} else if ((parseInt(scoreList[i].value) >= 45) && (parseInt(scoreList[i].value) <= 49)){
				D++;
				totalScores += parseInt(scoreList[i].value);
				gradeList[i].value = "D";
				courseArray = computeCourseSummary(scoreList[i].id);
				organizedCourseData.push({
					courseID: courseArray[0],
					courseTitle: courseArray[1],
					score: parseInt(scoreList[i].value),
					grade: 'D'
				});
			} else if ((parseInt(scoreList[i].value) >= 40) && (parseInt(scoreList[i].value) <= 44)){
				E++;
				totalScores += parseInt(scoreList[i].value);
				gradeList[i].value = "E";
				courseArray = computeCourseSummary(scoreList[i].id);
				organizedCourseData.push({
					courseID: courseArray[0],
					courseTitle: courseArray[1],
					score: parseInt(scoreList[i].value),
					grade: 'E'
				});
			} else if ((parseInt(scoreList[i].value) >= 0) && (parseInt(scoreList[i].value) <= 39)){
				F++;
				totalScores += parseInt(scoreList[i].value);
				gradeList[i].value = 'F';
				courseArray = computeCourseSummary(scoreList[i].id);
				organizedCourseData.push({
					courseID: courseArray[0],
					courseTitle: courseArray[1],
					score: parseInt(scoreList[i].value),
					grade: 'F'
				});
			}
		}

		var Average = (totalScores/scoreList.length).toFixed(2);
		var Remark = "";

		if ((Average >= 70) && (Average <= 100)){
			var Remark = "excellent";
		} else if ((Average >= 60) && (Average <= 69)){
			var Remark = "Very Good";
		} else if ((Average >= 50) && (Average <= 59)){
			var Remark = "Good";
		} else if ((Average >= 45) && (Average <= 49)){
			var Remark = "Pass";
		} else if ((Average >= 40) && (Average <= 44)){
			var Remark = "Pass";
		} else if ((Average >= 0) && (Average <= 39)){
			var Remark = "Failed";
		}


		gradeCount[0].innerText = A;
		gradeCount[1].innerText = B;
		gradeCount[2].innerText = C;
		gradeCount[3].innerText = D;
		gradeCount[4].innerText = E;
		gradeCount[5].innerText = F;
		gradeCount[6].innerText = Average;
		gradeCount[7].innerText = Remark;

		var summary = {
			'As': A,
			'Bs': B,
			'Cs': C,
			'Ds': D,
			'Es': E,
			'Fs': F,
			average: Average,
			remark: Remark
		}

		var studentID = studentExamScoreSelect.value ;

		var newExamRecord = {
			studentID: studentID,
			coursesGrading: organizedCourseData,
			summary: summary
		};

		// console.log(newExamRecord);

			return newExamRecord;

	}

	
}

function processComputedStudentGrade(){

	ExaminationRecords.push(computeStudentGrade());

	homePageDisplay();
}

function computeCourseSummary(courseIdVal){
	for(var l=0; l<Course.length; l++){
		if (Course[l].courseID == courseIdVal){
			return [Course[l].courseID, Course[l].courseTitle];
		}
	}
}

studendExamReecordLink.addEventListener("click", studentExamScoreForm, false);
//studendExamReecordLink.addEventListener("click", studentExamScoreForm, false);