import { useState } from "react";
import "./styles.css";

export default function App() {
  let data = {
    science: ["Biology", "Physics"],
    commerce: ["Account"],
    art: ["Drawing"],
  };
  const [showSubject, setShowSubject] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const handleCourseChange = (e) => {
    if (e.target.value !== "") {
      setShowSubject(true);
      setSelectedSubject(e.target.value);
    }
  };

  const handleSubjectChange = (e) => {
    if (e.target.value !== "") {
      setShowNumber(true);
    }
  };
  return (
    <div className="App">
      <select onChange={(e) => handleCourseChange(e)}>
        <option value="" selected>
          Select Subject
        </option>
        <option value="science">Science</option>
        <option value="commerce">Commerce</option>
        <option value="art">Art</option>
      </select>
      {showSubject && (
        <select onChange={(e) => handleSubjectChange(e)}>
          <option value="" selected diabled>
            Select Subject
          </option>
          {data[selectedSubject]?.map((item, index) => (
            <option>{item}</option>
          ))}
        </select>
      )}
      {showNumber && (
        <input type="number" placeholder="Mark" min="0" max="100"  />
      )}
    </div>
  );
}
