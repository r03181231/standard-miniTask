import React from "react";

// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({ filteredStudents }) {
  return (
    <ul>
      {filteredStudents.map((students) => {
        const { id, name, age, grade } = students;
        return (
          <li key={id}>
            {name} ({age}) - {grade}등급
          </li>
        );
      })}
    </ul>
  );
}

export default StudentList;
