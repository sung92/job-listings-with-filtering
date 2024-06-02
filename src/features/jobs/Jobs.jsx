import { useJobs } from "./useJobs";
import Spinner from "../../ui/Spinner";
import JobItems from "./JobItems";

function Jobs() {
  const { isLoading, error, jobs } = useJobs();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading jobs</div>;

  return (
    <ul role="item" className="flex flex-col gap-10">
      {jobs?.map((job) => {
        return (
          <li
            key={job.id}
            className={`bg-white rounded-md px-4 shadow-lg ${job.featured === true ? " border-l-4 border-primary-desaturateddarkcyan" : ""} `}
          >
            <img
              className="w-[48px] h-[48px] -translate-y-5"
              src={job.logo}
            ></img>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className=" text-primary-desaturateddarkcyan font-bold">
                  {job.company}
                </p>
                {job.new === true ? (
                  <div className=" ml-4 bg-primary-desaturateddarkcyan rounded-xl px-[6px]">
                    <span className=" text-white">NEW</span>
                  </div>
                ) : (
                  ""
                )}
                {job.featured === true ? (
                  <div className=" bg-neutral-verydarkgrayishcyan rounded-xl px-2">
                    <span className=" text-white">FEATURED</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className=" text-neutral-verydarkgrayishcyan font-bold">
                {job.position}
              </p>
              <div className="flex gap-2 items-center text-neutral-darkgrayishcyan font-medium text-[16px]">
                <p>{job.postedAt}</p>
                <p className="text-[20px]">·</p>
                <p>{job.contract}</p>
                <p className="text-[20px]">·</p>
                <p>{job.location}</p>
              </div>
            </div>
            <ul
              role="item"
              className="border-t-[1px] border-neutral-darkgrayishcyan flex flex-wrap gap-4 py-4 mt-4"
            >
              {job?.languages.map((language) => {
                return <JobItems key={language} item={language} />;
              })}
              {job?.tools.map((tool) => {
                return <JobItems key={tool} item={tool} />;
              })}
              <JobItems item={job.level} />
              <JobItems item={job.role} />
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default Jobs;
