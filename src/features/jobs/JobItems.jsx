import { useDispatch } from "react-redux";
import { addQuery } from "./querySlice";

function JobItems({ item }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(addQuery(item))}
      className="inline-flex items-center bg-neutral-lightgrayishcyanbg rounded-md hover:bg-primary-desaturateddarkcyan "
    >
      <li className="text-primary-desaturateddarkcyan font-bold py-1 px-2 hover:text-white">
        {item}
      </li>
    </button>
  );
}

export default JobItems;
