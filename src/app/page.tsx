import Image from "next/image";
import Hero from "@/app/components/Hero";
import Jobs from "@/app/components/Jobs";
import { getUser } from "@workos-inc/authkit-nextjs";
import { addOrgAndUserData, JobModel } from "@/models/Job";

export default async function Home() {
  const { user } = await getUser();

  const latestJobs = await addOrgAndUserData(
    await JobModel.find({}, {}, { limit: 5, sort: "-createdAt" }),
    user
  );
  console.log("latestjobs", latestJobs);
  return (
    <div className="space-y-8">
      <Hero />
      <Jobs header={""} jobs={latestJobs} isEditable={false} />
    </div>
  );
}
