import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useSelector } from "react-redux";

export function useJobs() {
  const {
    isLoading,
    data: jobs,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  const queries = useSelector((state) => state.query);

  const filteredJobs = jobs?.filter((job) => {
    const searchFields = [
      job.role,
      job.level,
      job.contract,
      ...job.languages,
      ...job.tools,
    ];
    return queries.every((query) => searchFields.includes(query));
  });

  return { isLoading, error, jobs: filteredJobs };
}
