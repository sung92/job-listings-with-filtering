import { useForm } from "react-hook-form";
import Jobs from "./Jobs";
import ItemsBar from "./ItemsBar";
import { useDispatch, useSelector } from "react-redux";
import { clearQuery } from "./querySlice";

function JobFilterForm() {
  const queries = useSelector((state) => state.query);
  const dispatch = useDispatch();
  console.log("Queries in JobFilterForm:", queries);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    dispatch(clearQuery());
  };

  return (
    <form className=" desktop:w-[1110px]" onSubmit={handleSubmit(onSubmit)}>
      {queries?.length > 0 ? <ItemsBar /> : ""}
      <div className={`${queries?.length < 1 ? "mt-12" : ""}`}>
        <Jobs />
      </div>
    </form>
  );
}

export default JobFilterForm;
