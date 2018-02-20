var oneStudentResultLink = getByID("a-students-result");
var homeMainDisplaySection = getByID("result-display-section");

var studentResultPage = `<div class="container">
					<div class="row">
						<h1 style="width: 100%; text-align: center;"><br>Student Examination Score Summary</h1>
						<form style="width: 400px; margin-right: auto; margin-left: auto;">
							<div class="form-group"><br>
								<select class="form-control" id="student-exam-result-select" onchange="getStudentResult()">
									${generateDropdownStudentIDComputedStudentResult()}
								</select><br>
							</div>
						</form>
					</div>
					<div class="row">
						<div style="width: 60%; margin-left: auto; margin-right: auto;">
							<div class="form-group">
								<label class="label-text-color">Full Name</label>
								<input value="nil" id="fullname" type="text" name="" class="form-control" readonly>
							</div>
							<div class="form-group">
								<label class="label-text-color">Number of Offered Courses</label>
								<input value="0" id="course-count" type="text" name="" class="form-control" readonly>
							</div>
						</div>
						<div style="width: 80%; margin-left: auto; margin-right: auto;">
							<table id="exam-result-table" style="margin-left: auto; margin-right: auto;">
								
							</table><br><br>
							<div id="exam-grading-section" style="width: 100%;">
								
							</div>
						</div>
					</div>
					<div></div>
				</div>`;


function oneStudentResultPage(e){
	e.preventDefault();

	homeMainDisplaySection.innerHTML = studentResultPage;

	getByID("student-exam-result-select").innerHTML = generateDropdownStudentIDComputedStudentResult();
}

function generateDropdownStudentIDComputedStudentResult(){
	var options = "<option value=''>Select Student Details</option>";


	if (Students.length < 1){
		return options;
	} else {
		for (var i = 0; i < ExaminationRecords.length; i++){
			for (var j = 0; j < Students.length; j++)
				if (Students[j].studentID == ExaminationRecords[i].studentID){
					options += "<option value='" + Students[i].studentID + "'>" + Students[i].fullname + " (" + Students[i].studentID + ") </option>";
				}
			}
		}

		return options
	}

function getStudentResult(){
	var studentExamRecordSelect = getByID("student-exam-result-select");
	var selectedStudentExamResult = {
			studentID: '',
			coursesGrading: [],
			summary: {
				'As': 'nil',
				'Bs': 'nil',
				'Cs': 'nil',
				'Ds': 'nil',
				'Es': 'nil',
				'Fs': 'nil',
				average: '',
				remark: ''
			}
		};

	if (studentExamRecordSelect == ""){
		
	} else {
		if (ExaminationRecords.length < 1){
		
		} else {
			for (var i = 0; i < ExaminationRecords.length; i++){
				if (ExaminationRecords[i].studentID == studentExamRecordSelect.value){
					selectedStudentExamResult = ExaminationRecords[i];
				}
			}
		}
	}

	courseRecordSummaryTable(selectedStudentExamResult.coursesGrading);
	studendGradeSummary(selectedStudentExamResult);

	if (selectedStudentExamResult.studentID == ''){

	} else {

	}
}

function courseRecordSummaryTable(courseRecords){
	var examinationResultTable = getByID("exam-result-table");
	var courseCount = getByID("course-count");
	var courseRecordDetails = "";

	if (courseRecords.length < 1){
		courseRecordDetails = "";
	} else {
		courseRecordDetails = '<tr><th width="200px">Course Title</th><th width="80px">Score</th><th width="80px">Grade</th></tr>';
	
		for (var i = 0; i < courseRecords.length; i++){
			courseRecordDetails += `<tr><td width="200px">${courseRecords[i].courseTitle}</td><td width="80px">${courseRecords[i].score}</td><td width="80px">${courseRecords[i].grade}</td></tr>`;
		}
	}

	courseCount.value = courseRecords.length;
	examinationResultTable.innerHTML = courseRecordDetails;

}

function studendGradeSummary(selectedStudent){
	var examGradingSection = getByID('exam-grading-section');
	var studentNameDisplay = getByID("fullname");
	var gradeSummaryInnerContent = `<div class="row" style="width: 100%;">
									<h5 style="width: 100%; text-align: center;">Summary</h5>
									<div class="row">
										<div class="col-lg-5">
											<table>
												<tr>
													<td colspan="2" align="center">Grade Summary</td>
												</tr>
												<tr>
													<td width="100px" align="right">A's</td>
													<td id="As" width="200px" align="center">
														${selectedStudent.summary['As']}
													</td>
												</tr>
												<tr>
													<td width="100px" align="right">B's</td>
													<td id="Bs" width="200px" align="center">
														${selectedStudent.summary['Bs']}
													</td>
												</tr>
												<tr>
													<td width="100px" align="right">C's</td>
													<td id="Cs" width="200px" align="center">
														${selectedStudent.summary['Cs']}
													</td>
												</tr>
												<tr>
													<td width="100px" align="right">D's</td>
													<td id="Ds" width="200px" align="center">
														${selectedStudent.summary['Ds']}
													</td>
												</tr>
												<tr>
													<td width="100px" align="right">E's</td>
													<td id="Es" width="200px" align="center">
														${selectedStudent.summary['Es']}
													</td>
												</tr>
												<tr>
													<td width="100px" align="right">F's</td>
													<td id="Fs" width="200px" align="center">
														${selectedStudent.summary['Fs']}
													</td>
												</tr>
											</table>
										</div>
										<div class="col-lg-7">
											<table>
												<tr valign="top">
													<td width="100px" align="left">Average</td>
													<td id="average" width="300px" align="left"> 
														${selectedStudent.summary['average']}
													</td>
												</tr>
												<tr valign="top">
													<td width="100px" align="left" style="padding-top: 30px;">Remark</td>
													<td id="remark" width="300px" align="left" style="padding-top: 30px;">
														${selectedStudent.summary['remark']}
													</td>
												</tr>
											</table>
										</div>
									</div><br><br>
								</div><br><br>`;

	var studentName = '';

	if (selectedStudent.studentID == ''){
		gradeSummaryInnerContent = "";
		studentNameDisplay.value = "nil";
		examGradingSection.innerHTML = gradeSummaryInnerContent;
	} else {
		for (var i = 0; i < Students.length; i++){
			if (Students[i].studentID == selectedStudent.studentID){
				studentName = Students[i].fullname;
				break;
			}
		}
		studentNameDisplay.value = studentName;
		examGradingSection.innerHTML = gradeSummaryInnerContent;
	}
}

oneStudentResultLink.addEventListener("click", oneStudentResultPage, false);