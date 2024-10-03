/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrade){
  return students
    .filter((student) => student.location == city)
    .map((student) => {
      let grades = newGrade.find((grade) => grade.studentId == student.id);
      let grade = grades ? grades.grade : "N/A";
      return { ...student, grade };
     });
}
