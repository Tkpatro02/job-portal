import Jobroll from "./Jobroll";
import type { Job } from "@/models/Job";

export default function Jobs({
  header,
  jobs,
  isEditable,
}: {
  header: string;
  jobs: Job[];
  isEditable: boolean;
}) {
  return (
    <div className="bg-slate-200 py-6 rounded-3xl">
      <div className="container">
        <h2 className="font-bold mb-4">{header || "Recent jobs"}</h2>

        <div className="flex flex-col gap-4">
          {!jobs?.length && <div>No jobs found</div>}
          {jobs &&
            jobs.map((job) => (
              // Add a unique 'key' prop here, assuming 'job._id' is unique
              <Jobroll key={job._id} jobDoc={job} isEditable={isEditable} />
            ))}
        </div>
      </div>
    </div>
  );
}
