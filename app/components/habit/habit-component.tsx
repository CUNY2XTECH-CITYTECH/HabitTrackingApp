import HabitDetails from "@/app/habitDetails/page";
import Link from "next/link";
import { useState } from "react";


export interface HabitInfo {
  posts_id: string;
  posts_details: string;
}

//Not sure if we need to send everything as a prop or just the posts_id. 
//need to correct this. Since, after the button is clicked we are getting everything from the database. 
//Once the HabitComponent is rendered using map after retreving all the posts. I will render everything. 
const HabitComponent = (habit: HabitInfo) => {
  const posts_id = habit.posts_id;
  const posts_details = habit.posts_details;


  return (
    <>
      <div className="p-5">
        <div className=" bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-2 ">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Meditation

            <Link
              href={{
                pathname: "/habitDetails",
                query: {"posts_id": posts_id}, // the data
              }}
            >
              <button
                type="button"
                className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 absolute right-[30px]"
              >
                Details
              </button>
            </Link>
          </h1>

          {posts_details}
        </div>
      </div>
    </>
  );
};

export default HabitComponent;
