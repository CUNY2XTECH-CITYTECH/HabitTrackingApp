'use client'
import Link from "next/link";


//Need to configure this props as per our needs. Will we pass everything? Or just the necessary fields? // Necessary fields
export interface HabitInfo {
  id: string;
  owner_id: string;
  content: string;
  image_url: string;
}

//Not sure if we need to send everything as a prop or just the posts_id. 
//need to correct this. Since, after the button is clicked we are getting everything from the database. 
//Once the HabitComponent is rendered using map after retreving all the posts. I will render everything. 
const HabitComponent = (habit: HabitInfo) => {
  const habit_id = habit.id;
  const habit_content = habit.content;
  // const habit_image= habit.image_url;
  // const habit_owner = habit.owner_id; 

  return (
    <>
      <div className="p-5">
        <div className=" bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-2 ">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Title

            <Link
              href={{
                pathname: "/habitDetails",
                query: {"habit_id": habit_id}, // the data
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

          {habit_content}
        </div>
      </div>
    </>
  );
};

export default HabitComponent;
