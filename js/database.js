var Students = [
	// {
	// 	studentID: 'STUD001',
	// 	fullname: 'Jonah John',
	// 	sex: 'Male',
	// 	email: 'jonah@moatschool.org.ng',
	// 	areCoursesRegistered: true
	// }
	// {
	// 	studentID: 'STUD002',
	// 	fullname: 'Zuriel Oghogho Ode',
	// 	sex: 'Male',
	// 	email: 'zuriel.ode@moatschool.org.ng',
	// 	areCoursesRegistered: false
	// }
	// {
	// 	studentID: 'STUD003',
	// 	fullname: 'Precious Gayle',
	// 	sex: 'Female',
	// 	email: 'precious@moatschool.org.ng',
	// 	areCoursesRegistered: false
	// }
	// {
	// 	studentID: 'STUD004',
	// 	fullname: 'Mary Jack',
	// 	sex: 'Female',
	// 	email: 'jmary@moatschool.org.ng',
	// 	areCoursesRegistered: false
	// }
];

var Instructors = [
	// {
	// 	instructorID: 'MOATINSTR001',
	// 	fullname: 'Baba Ijebu'
	// },
	// {
	// 	instructorID: 'MOATINSTR002',
	// 	fullname: 'Ayodeji Ahyox'
	// },
	// {
	// 	instructorID: 'MOATINSTR003',
	// 	fullname: 'Yemi Dabo'
	// },
	// {
	// 	instructorID: 'MOATINSTR004',
	// 	fullname: 'Seun De Programmer'
	// },
];

var Course = [
	{
		courseID: "001",
		courseTitle: 'Mathematics',
		instructorID: 'MOATINS001'
	},
	{
		courseID: "002",
		courseTitle: 'English Language',
		instructorID: 'MOATINS003'
	},
	{
		courseID: "003",
		courseTitle: 'Computer Studies',
		instructorID: 'MOATINS002'
	},
	{
		courseID: "004",
		courseTitle: 'Biology',
		instructorID: 'MOATINS004'
	},
	{
		courseID: "005",
		courseTitle: 'Agricultural Science',
		instructorID: 'MOATINS002'
	}
	,
	{
		courseID: "006",
		courseTitle: 'Physics',
		instructorID: 'MOATINS003'
	},
	{
		courseID: "007",
		courseTitle: 'Chemistry',
		instructorID: 'MOATINS002'
	},
	{
		courseID: "008",
		courseTitle: 'Geography',
		instructorID: 'MOATINS003'
	},
	{
		courseID: "009",
		courseTitle: 'Philosphy',
		instructorID: 'MOATINS004'
	},
	{
		courseID: "010",
		courseTitle: 'Theology',
		instructorID: 'MOATINS002'
	},
	{
		courseID: "011",
		courseTitle: 'Nigerian People and Culture',
		instructorID: 'MOATINS003'
	},
	{
		courseID: "012",
		courseTitle: 'Introduction to Social Science',
		instructorID: 'MOATINS003'
	},
	{
		courseID: "013",
		courseTitle: 'Government',
		instructorID: 'MOATINS004'
	},
	{
		courseID: "014",
		courseTitle: 'Organic Chemistry',
		instructorID: 'MOATINS001'
	},
	{
		courseID: "015",
		courseTitle: 'French',
		instructorID: 'MOATINS002'
	},
	{
		courseID: "016",
		courseTitle: 'German',
		instructorID: 'MOATINS002'
	},
	{
		courseID: "017",
		courseTitle: 'Business Studies',
		instructorID: 'MOATINS003'
	},
	{
		courseID: "018",
		courseTitle: 'Commerce',
		instructorID: 'MOATINS001'
	},
	{
		courseID: "019",
		courseTitle: 'Islamic Studies',
		instructorID: 'MOATINS002'
	},
	{
		courseID: "020",
		courseTitle: 'Christian Religious Studies',
		instructorID: 'MOATINS004'
	}
];


var StudentCourseList = [
	//{
	// 	studentID: 'STUD001',
	// 	courses: [
	// 		{
	// 			courseID: "001",
	// 			courseTitle: 'Mathematics'
	// 		},
	// 		{
	// 			courseID: "002",
	// 			courseTitle: 'English Language'
	// 		},
	// 		{
	// 			courseID: "003",
	// 			courseTitle: 'Computer Studies'
	// 		},
	// 		{
	// 			courseID: "004",
	// 			courseTitle: 'Biology'
	// 		},
	// 		{
	// 			courseID: "005",
	// 			courseTitle: 'Agricultural Science'
	// 		}
	// 	]
	// }
		
];

var ExaminationRecords = [
	// {
	// 	studentID: "STUD001",
	// 	coursesGrading: [
	// 		{
	// 			courseID: "001",
	// 			courseTitle: 'Mathematics',
	// 			score: 54,
	// 			grade: 'C'
	// 		},
	// 		{
	// 			courseID: "002",
	// 			courseTitle: 'English Language',
	// 			score: 75,
	// 			grade: 'A'
	// 		},
	// 		{
	// 			courseID: "003",
	// 			courseTitle: 'Computer Studies',
	// 			score: 65,
	// 			grade: 'B'
	// 		},
	// 		{
	// 			courseID: "004",
	// 			courseTitle: 'Biology',
	// 			score: 54,
	// 			grade: 'C'
	// 		},
	// 		{
	// 			courseID: "005",
	// 			courseTitle: 'Agricultural Science',
	// 			score: 54,
	// 			grade: 'C'
	// 		}
	// 	],
	// 	summary: {
	// 		'As': 1,
	// 		'Bs': 1,
	// 		'Cs': 3,
	// 		'Ds': 0,
	// 		'Es': 0,
	// 		'Fs': 0,
	// 		average: 56,
	// 		remark: 'Good result, you can do better.'
	// 	}
	// }
];

var Admin = [
	{
		username: 'aode',
		password: 'mpassword@1'
	},
	{
		username: 'onyinye',
		password: 'chocolate'
	}
];


function databaseState(e){
	e.preventDefault();

	console.log(Students);

	console.log(Course);

	console.log(Instructors);

	console.log(ExaminationRecords);

	console.log(StudentCourseList);

	console.log();
}

document.getElementById('console-display').addEventListener("click", databaseState, false);