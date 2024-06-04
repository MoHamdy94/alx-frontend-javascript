export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if the input is an array and the city is a string
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter the students by the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map over the filtered students to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the grade object for the current student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // If the grade object is found, add the grade; otherwise, set grade to 'N/A'
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return updatedStudents;
}
