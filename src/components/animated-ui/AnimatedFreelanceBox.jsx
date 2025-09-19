"use client";

import AnimatedBox from "./AnimatedBox";

export default function AnimatedFreelanceBox({ freelanceJobs = [] }) {
  return (
    <AnimatedBox className="col-span-12 sm:col-span-12">
      <div className="p-4 space-y-2">
        {freelanceJobs.map((job, idx) => (
          <div key={idx} className="text-sm">
            <span className="font-medium">{job.client}:</span> {job.summary}
          </div>
        ))}
      </div>
    </AnimatedBox>
  );
}
