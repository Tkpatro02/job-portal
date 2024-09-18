import type { Job } from "@/models/Job";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Jobroll({ jobDoc }: { jobDoc: Job }) {
  console.log("------------------jobrolll----------------------", jobDoc);

  function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <>
      <div className="bg-white p-4 rounded-md shadow sm md flex relative">
        <div className="absolute top-4 right-4">
          <FontAwesomeIcon className="size-4 text-gray-400" icon={faHeart} />
        </div>
        <div className="flex gap-4">
          <div className="content-center">
            {/* <img
              className="size-12"
              src="https://th.bing.com/th/id/R.69fd4af1d1c59edb0fd99cc5f55e6f9d?rik=Uw%2fVKlsSK4y4Ig&riu=http%3a%2f%2f4.bp.blogspot.com%2f-JoVT-JSgcVk%2fUtQW0sJ7SmI%2fAAAAAAAABUI%2fiaWnDjwvz18%2fs1600%2f1.png&ehk=JFX61HQLKj5JMHinQCMAMkVsAiqFSmAspCdpRZ%2bJygo%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            /> */}
          </div>
          <div className="grow ">
            <div>
              <div className="text-gray-500 text-sm">{jobDoc.orgName}</div>
              <div className="font-bold">{jobDoc.title}</div>
              <div className="content-end text-gray-500 text-sm">
                {capitalizeFirstLetter(jobDoc.remote)} &middot; {jobDoc?.city}{" "}
                &middot; {jobDoc?.state}
              </div>
            </div>
            <div className="content-end text-gray-500 text-sm">2 weeks</div>
          </div>
        </div>
      </div>
    </>
  );
}
