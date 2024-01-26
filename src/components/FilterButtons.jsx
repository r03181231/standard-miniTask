import React, { useState } from "react";

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons({ initialStudents, setFilteredStudents }) {
  const [minAge, setMinAge] = useState(18);
  const [grade, setGrade] = useState("A");

  const filterByAge = (minAge) => {
    setFilteredStudents((prevStudentsInfo) =>
      prevStudentsInfo.filter((student) => student.age >= minAge)
    );
  };

  const filterByGrade = (grade) => {
    setFilteredStudents((prevStudentsInfo) =>
      prevStudentsInfo.filter((student) => student.grade === grade)
    );
  };

  const resetFilter = () => {
    setFilteredStudents(initialStudents);
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
