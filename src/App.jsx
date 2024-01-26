import React, { useState } from "react";
<<<<<<< HEAD
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";

function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);
=======

function App() {
  const idNum = crypto.randomUUID();
  const students = [
    { id: idNum, name: "Alice", age: 17, grade: "A" },
    { id: idNum, name: "Bob", age: 18, grade: "B" },
    { id: idNum, name: "Charlie", age: 16, grade: "C" },
    { id: idNum, name: "Diana", age: 19, grade: "D" },
  ];
  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);
  const onClickInfo = (age, grade) => {
    alert(`나이 : ${age}, 점수 : ${grade}`);
  };
>>>>>>> origin

  return (
    <div>
      <h1>학생 목록</h1>
<<<<<<< HEAD
      {/* TODO: FilterButtons 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <FilterButtons
        /* 필요한 props를 여기에 전달하세요. */
        initialStudents={initialStudents}
        setFilteredStudents={setFilteredStudents}
      />

      {/* TODO: StudentList 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <StudentList
        /* 필요한 props를 여기에 전달하세요. */
        filteredStudents={filteredStudents}
      />
=======
      <ul>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((eighteenStudent) => {
          const { id, name, age, grade } = eighteenStudent;
          return (
            <>
              <div key={id}>
                <button onClick={() => onClickInfo(age, grade)}>{name}</button>
              </div>
            </>
          );
        })}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </ul>
>>>>>>> origin
    </div>
  );
}

export default App;
