var coureTitleListArray = [];


/*
	+'<th class="rotate"><div><span>Highest class Score</span></div></th>'
	+'<th class="rotate"><div><span>Lowest class Score</span></div></th>'
*/

function allStudentRecordsTableHeader(){
	var tableHeader = '<tr valign="bottom"><th style="border: solid thin #000;" align="center" width="30px" class="student-details">S/N</th><th style="border: solid thin #000;" align="center" width="250px" class="student-details">Student Details</th>';

	for (var i = 0; i < Course.length; i++){
		tableHeader += `<th style="border: solid thin #000;" class="rotate"><div><span>${Course[i].courseTitle}</span></div></th>`;
		coureTitleListArray.push(Course[i].courseTitle);
	}
	tableHeader += '<th style="border: solid thin #000;" class="rotate"><div><span>Student Average</span></div></th>'
				   +'<th style="border: solid thin #000;" class="student-remark"><div><span>Remark</span></div></th>'
				   +'</tr>';

	return tableHeader;
}

function allStudentRecordsTableRow(){
	var allTableRows = "";
	var studentAverage;

	var nil = '-';


	for(var i=0; i < ExaminationRecords.length; i++){
		allTableRows += '<tr valign="middle"><td style="border: solid 2px #fff;" width="30px" align="center">'+(i+1)+'</td><td style="border: solid 2px #fff;" width="250px" style="padding-left: 20px;" align="left">&nbsp;&nbsp;&nbsp;'+ studentFullname(ExaminationRecords[i].studentID) +'</td>';

		for (var x = 0; x < Course.length; x++){
			var isFound = true;
			var courseDetailsTitle = '';
			var courseDetailsScore = 0;
			for (var y = 0; y < ExaminationRecords[i].coursesGrading.length; y++){
				if (Course[x].courseTitle == ExaminationRecords[i].coursesGrading[y].courseTitle){
					isFound = false;
					courseDetailsTitle = ExaminationRecords[i].coursesGrading[y].courseTitle;
					courseDetailsScore = ExaminationRecords[i].coursesGrading[y].score;
					studentAverage = ExaminationRecords[i].summary.average;
				}
			}

			if (!isFound){
				for(var z = 0; z < Course.length; z++){
					if(Course[z].courseTitle == courseDetailsTitle){
						allTableRows +=  `<td style="border: solid 2px #fff;" class="not-rotate">${courseDetailsScore}</td>`;
					}	
				}	 
			} else {
				allTableRows +=  `<td style="border: solid 2px #fff;" class="not-rotate">${nil}</td>`;
			}
		}

		allTableRows += `<td style="border: solid 2px #fff;" class="not-rotate">${studentAverage}</td>`;

		if ((parseInt(studentAverage) >= 70) && (parseInt(studentAverage) <= 100)){
			allTableRows += '<td style="border: solid 2px #fff;" class="student-remark">'+ 'Excellent' +'</td></tr>';
		} else if ((parseInt(studentAverage) >= 60) && (parseInt(studentAverage) <= 69)){
			allTableRows += '<td style="border: solid 2px #fff;" class="student-remark">'+ 'Very Good' +'</td></tr>';
		} else if ((parseInt(studentAverage) >= 50) && (parseInt(studentAverage) <= 59)){
			allTableRows += '<td style="border: solid 2px #fff;" class="student-remark">'+ 'Good' +'</td></tr>';
		} else if ((parseInt(studentAverage) >= 45) && (parseInt(studentAverage) <= 49)){
			allTableRows += '<td style="border: solid 2px #fff;" class="student-remark">'+ 'Pass' +'</td></tr>';
		} else if ((parseInt(studentAverage) >= 40) && (parseInt(studentAverage) <= 44)){
			allTableRows += '<td style="border: solid 2px #fff;" class="student-remark">'+ 'Pass' +'</td></tr>';
		} else if ((parseInt(studentAverage) >= 0) && (parseInt(studentAverage) <= 39)){
			allTableRows += '<td style="border: solid 2px #fff;" class="student-remark">'+ 'Failed' +'</td></tr>';
		}
	}

	//console.log(allScorce);
	return allTableRows;
}

function studentFullname(studentIDData){
	for(var i=0; i < Students.length; i++){
		if(Students[i].studentID == studentIDData){
			return Students[i].fullname;
		}
	}
}

function displayAllStudentsResult(){
	var allStudentResultDisplay = getByID("result-display-section");

	var allStudentResultPage = `<div class="row">
								<h1 style="width: 100%; text-align: center;"><br>All Students Examination Record</h1>
							</div>
 							<table id="view-all" border="1" style="margin-left: auto; margin-right: auto;">
								${allStudentRecordsTableHeader()}
								${allStudentRecordsTableRow()}
							</table>
							<br><br>`;


	allStudentResultDisplay .innerHTML = allStudentResultPage;
}

getByID("all-students-result").addEventListener("click", displayAllStudentsResult, false);