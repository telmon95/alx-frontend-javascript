/* eslint-disable */
export default function getStudentsIdsSum(students){
    return students.reduce((sum, { id }) => sum + id, 0);
}
