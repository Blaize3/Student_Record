var homeMainDisplaySection = getByID("result-display-section");
var homePage = `<div class="container">
						<h1 style="width: 100%; text-align: center;"><br>Database Summary </h1><br>
						<div class="row">
							<div class="col-lg-6">
								<div class="container content-home-height">
									<h3 style="width: 100%; text-align: center;">Number of Students</h3>
									<div id="student-count" style="width: 100%; text-align: center;" class="count-text">
										0
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="container content-home-height">
									<h3 style="width: 100%; text-align: center;">Number of Instructors </h3>
									<div id="instructor-count" style="width: 100%; text-align: center;" class="count-text">
										0
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6">
								<div class="container content-home-height">
									<h3 style="width: 100%; text-align: center;">Number of Courses </h3>
									<div id="course-count" style="width: 100%; text-align: center;" class="count-text">
										0
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="container content-home-height">
									<h3 style="width: 100%; text-align: center;">Number of Students who have completed their Course Form </h3>
									<div id="course-form-count" style="width: 100%; text-align: center;" class="count-text">
										0
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6">
								<div class="container content-home-height">
									<div class="container content-home-height">
									<h3 style="width: 100%; text-align: center;">Number of Students that has been graded </h3>
									<div id="graded-count" style="width: 100%; text-align: center;" class="count-text">
										0
									</div>
								</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="container content-home-height">
									
								</div>
							</div>
						</div>
					</div>`;

function homePageDisplay(){
	//e.preventDefault();

	

	homeMainDisplaySection.innerHTML = homePage;

	//console.log(ExaminationRecords.length);

	getByID("student-count").innerText = getDataState(Students);
	getByID("instructor-count").innerText = getDataState(Instructors);
	getByID("course-form-count").innerText = getDataState(StudentCourseList);
	getByID("course-count").innerText = getDataState(Course);
	getByID("graded-count").innerText = getDataState(ExaminationRecords);

}

function getDataState(objectType){
	return objectType.length;
}


getByID("home-link").addEventListener("click", homePageDisplay, false);