"use server";

import {JobModel} from "@/models/Job";
import mongoose from "mongoose";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function saveJobAction(formData: FormData) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const {id, ...jobData} = Object.fromEntries(formData);
  const jobDoc = id
    ? await JobModel.findByIdAndUpdate(id, jobData)
    : await JobModel.create(jobData);
  if ("orgId" in jobData) {
    redirect("/jobs/" + jobData?.orgId);
  }
  return true;
}
