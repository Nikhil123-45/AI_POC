import { study } from "../../data/studyComparisonData";

export default function StudySelector() {
  return (
    <div className="study-selector">
      <div className="study-left">
        <label>YOUR STUDY</label>

        <select>
          <option>{study.name}</option>
        </select>
      </div>

      <div className="study-tags">
        <span className="tag indication">
          {study.indication}
        </span>

        <span className="tag phase">
          {study.phase}
        </span>

        <span className="tag country">
          {study.country1}
        </span>

        <span className="tag country">
          {study.country2}
        </span>

        <span className="tag sites">
          {study.sites} Sites
        </span>

        <span className="tag enrollments">
          {study.enrollments} Enrollments
        </span>
      </div>
    </div>
  );
}