import Image from "next/image";
import Hero from "@/app/components/Hero";
import Jobs from "@/app/components/Jobs";
import {getUser} from "@workos-inc/authkit-nextjs";
import {addOrgAndUserData, JobModel} from "@/models/Job";

export default async function Home() {
  const {user} = await getUser();

  const jobb = await JobModel?.find({}, {}, {limit: 5, sort: "-createdAt"})
    .then((jobs) => {
      return jobs;
    })
    .catch((err) => {
      console.error("Error:", err);
      return [];
    });
  const latestJobs = await addOrgAndUserData(jobb, user);
  return (
    <div className="space-y-8">
      <Hero />
      <Jobs header={""} jobs={latestJobs} isEditable={false} />
    </div>
  );
}
