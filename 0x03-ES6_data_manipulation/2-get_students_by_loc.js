/* eslint-disable */
export default function getStudentsByLocation(students, city){
    return students.filter((item) => item.location == city);
}
