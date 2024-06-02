import { useDispatch, useSelector } from "react-redux";
import { deleteQuery } from "./querySlice";
import "./styles.css";

function ItemsBar() {
  const queries = useSelector((state) => state.query);
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg w-full p-4 grid grid-cols-searchbar -translate-y-7 shadow-lg">
      <ul role="item" className="flex flex-wrap gap-4 col-span-2">
        {queries.map((query) => {
          return (
            <li
              key={query}
              className="inline-flex items-center bg-neutral-lightgrayishcyanbg rounded-md"
            >
              <p className=" text-primary-desaturateddarkcyan font-bold px-4">
                {query}
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteQuery(query))}
                className=" bg-primary-desaturateddarkcyan p-2 rounded-sm hover:bg-neutral-verydarkgrayishcyan"
              >
                <img src="./images/icon-remove.svg" alt="Remove"></img>
              </button>
            </li>
          );
        })}
      </ul>
      <button className=" clear-button font-bold text-neutral-darkgrayishcyan justify-self-center hover:text-primary-desaturateddarkcyan ">
        Clear
      </button>
    </div>
  );
}

export default ItemsBar;
