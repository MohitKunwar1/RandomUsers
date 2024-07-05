import React, { useContext,  useState } from "react";
import UserContext from "../contexts/userContext/UserContext.js";
import { Link } from "react-router-dom";

export const Cards = () => {
  const { user, isLoading } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = itemsPerPage * currentPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(user.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="flex flex-wrap  justify-center gap-10">
        {isLoading ? (
          <div className="w-40 h-40 my-72  border-8 rounded-full border-t-8 border-t-slate-700 animate-spin duration-200"></div>
        ) : (
          currentItems.map((users, i) => {
            return (
              <div
                key={i}
                className="w-64 h-80 mt-10 bg-sky-200 border-2 border-sky-500 shadow-lg rounded-lg dark:bg-slate-600  "
              >
                <img
                  src={users.picture.large}
                  alt={users.name.first}
                  className="rounded-full shadow-lg m-auto mt-5"
                />
                <div className="text-slate-800 text-center mt-10 dark:text-white">
                  <h4 className="text-xl font-semibold">
                    {users.name.first} {users.name.last}
                  </h4>
                  <Link
                    to={`/profile/${users.id.value}`}
                    className="px-3 py-2 mt-6 inline-block  text-white rounded-lg shadow-lg bg-sky-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center pt-10 pb-5 gap-2 ">
        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-2 border-2 border-sky-500 rounded-lg shadow-lg font-semibold dark:text-white ${
                currentPage === i + 1
                  ? "bg-sky-700 text-white"
                  : "text-slate-800"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
