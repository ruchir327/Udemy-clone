import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
const Index = ({ courses }) => {
  return (
    <div className="purple-bg">
      <div className="jumbotron text-center bg-primary square">
        <h1 className="glow-title">Elearning</h1>
      </div>
      <div className="container-fluid">
        <div className="row pt-2">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard key={course._id} course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
