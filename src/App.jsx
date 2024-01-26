import React, { useState } from "react";

function App() {
  const students = [
    { id: 1, name: "Alice", age: 17, grade: "A" },
    { id: 2, name: "Bob", age: 18, grade: "B" },
    { id: 3, name: "Charlie", age: 16, grade: "C" },
    { id: 4, name: "Diana", age: 19, grade: "D" },
  ];
  // const id = crypto.randomUUID()
  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);
  const [stu, setStu] = useState(filteredStudents); // Bob, Diana
  const { id, name, age, grade } = stu;
  const onAlertAgeName = (info) => {
    if (info.id === id) alert(" age : ", info.age, "grade : ", info.grade);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((eighteenStudent) => {
          console.log(eighteenStudent);
          const { id, name, age, grade } = eighteenStudent;
          return (
            <>
              <div key={id}>
                <button onClick={() => onAlertAgeName(eighteenStudent)}>
                  {name}
                </button>
              </div>
            </>
          );
        })}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </ul>
    </div>
  );
}

export default App;
