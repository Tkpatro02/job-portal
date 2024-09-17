import Jobs from "@/app/components/Jobs";
import { JobModel } from "@/models/Job";
import {
  AutoPaginatable,
  OrganizationMembership,
  WorkOS,
} from "@workos-inc/node";
import mongoose from "mongoose";

type PageProps = {
  params: {
    orgid: string;
  };
};

export default async function CompanyJobsPage(props: PageProps) {
  console.log("000000000000000000000000000000000000000000");
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  console.log("props.params.orgId", props.params);
  const org = await workos.organizations.getOrganization(props.params.orgid);
  console.log("---orgggg", org);
  await mongoose.connect(process.env.MONGODB_URI as string);
  const jobsDocs = await JobModel.find({ orgId: org.id });
  const orgs = [];
  for (const job of jobsDocs) {
    await workos.organizations.getOrganization(job.orgId);
    job.orgName = org.name;
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-xl my-6">{org.name} Jobs</h1>
      </div>
      <Jobs jobs={jobsDocs} header={"Jobs posted by " + org.name} />
    </div>
  );
}
