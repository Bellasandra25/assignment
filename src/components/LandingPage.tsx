import { useState } from "react";

import Button from "./Button";
import Header from "./Header";
import Project from "./Project";

const LandingPage = ({
  name,
  occupation,
}: {
  name: string;
  occupation: string;
}) => {
  const [showProject, setShowProject] = useState(false);

  const handleClick = () => {
    setShowProject(true);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center p-10 bg-slate-600 h-[100vh]">
        <div>
          <h1 className="text-2xl font-bold my-3">{name}</h1>
          <h4 className="font-semibold">Welcome to My Portfolio!</h4>
          <p className="font-normal">
            I’m a creative {occupation} skilled in HTML, CSS, JavaScript, and
            React. Explore my projects to see how I bring ideas to life with
            clean, user-friendly designs. Let’s create something impactful!
          </p>
          <Button label="Let's get started" onClick={handleClick} />
        </div>
        <div>
          <img
            src="/bella.PNG"
            alt={`${name}'s profile`}
            className="w-100 rounded-full"
          />
        </div>
      </div>
      {showProject && <Project />}
    </div>
  );
};

export default LandingPage;
