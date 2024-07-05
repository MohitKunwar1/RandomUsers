import React from 'react';

const About = () => {
  return (
<div className="bg-gray-100 dark:bg-gray-900 min-h-screen  py-10">
      <div className="max-w-3xl mx-auto p-20 bg-white mt-20 border-2 border-sky-500 dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-10 text-center ">About My Project</h1>
        <p className="text-gray-700 text-xl dark:text-gray-300">
          Welcome to my project! Where I showcase my work!
          Hello! My name is Mohit Kunwar And I want to be a frontend developer and this is a small project.
          This project is purely a frontend project in which i had used Html, JavaScript, ReactJs and Tailwind!
          I have used Random User Generator Api to create a different user.
          Added some features like pagination, dark and light theme button to create these feature i have used Context api.
          A context api in react is use for state mangement and it handles flow of data in different components.
          To navigate to different pages i have used react router dom which enables dynamic routing in web app. It allows you to display pages and allow users to navigate them! 
          Thank You!
        </p>
        
      </div>
    </div>

  );
};

export default About;
