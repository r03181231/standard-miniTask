import React, { useState } from "react";

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons({ filteredStudents, setFilteredStudents }) {
  const [minAge, setMinAge] = useState(18);
  const [grade, setGrade] = useState("A");

  const filterByAge = (minAge) => {
    const filterByAgeStudent = filteredStudents.filter(
      (student) => student.age >= minAge
    );
    setFilteredStudents(filterByAgeStudent);
  };

  const filterByGrade = (grade) => {
    const filterByGradeStudent = filteredStudents.filter(
      (student) => student.grade === grade
    );
    setFilteredStudents(filterByGradeStudent);
  };

  const resetFilter = () => {
    setFilteredStudents(filteredStudents);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button onClick={() => filterByAge(minAge)}>18세 이상</button>
      <button onClick={() => filterByGrade(grade)}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
