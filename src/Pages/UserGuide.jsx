// UserGuide.js

import React from "react";

function UserGuide() {
  return (
    <div className=" p-6">
      <h1 className="text-4xl font-bold mt-14 mb-8">User Guide</h1>
      <p className="text-2xl sm:p-5 mb-10">
        Welcome to our QCS Statistics Dashboard! Follow these steps to unleash
        the power of data.
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Step 1: Import Your Data
        </h2>
        <p>
          Start by clicking the{" "}
          <span className="text-blue-500">"Choose File"</span> button to select
          your CSV file. Once chosen, hit the{" "}
          <span className="text-blue-500">"Import File"</span> button to load
          your data.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Step 2: Select Rows and Columns
        </h2>
        <p>
          Upon import, you can cherry-pick the rows and columns you wish to
          analyze. The dropdown menus are your magic wands for this task.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Step 3: Choose Analysis Type
        </h2>
        <p>
          Dabble in the diverse world of analysis! Pick your desired analysis
          type from our offerings of statistical wonders and data
          visualizations.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Step 4: Generate Analysis Report
        </h2>
        <p>
          The grand finale! Click the{" "}
          <span className="text-blue-500">"Download Report"</span> button. A
          beautifully crafted analysis report in PDF format will be at your
          service.
        </p>
      </div>
      <p className="text-gray-600">
        If you encounter any mysteries or need guidance, check our FAQ section
        or send a message to our support wizards.
      </p>
    </div>
  );
}

export default UserGuide;
