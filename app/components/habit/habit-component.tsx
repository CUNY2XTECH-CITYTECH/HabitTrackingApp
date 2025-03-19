"use client";
import { DELETE } from "@/app/api/auth/[[...path]]/route";
import { METHODS } from "http";
import Link from "next/link";

//Need to configure this props as per our needs. Will we pass everything? Or just the necessary fields? // Necessary fields
export interface HabitInfo {
  id: string;
  owner_id: string;
  content: string;
  image_url: string;
}

const HabitComponent = (habit: HabitInfo) => {
  const habit_id = habit.id;
  const habit_content = habit.content;
  const habit_image= habit.image_url;
  const habit_owner = habit.owner_id;


  const deleteHabit = () =>{

     
      const deleteHabitById = async () => {
        try { 
          
          console.log('inisde Delete Habit');
          //need to make the posts_id dynamic with the help of props passed through the HabitDetails()
          const response = await fetch(
            `http://localhost:3000/api/habit/?habit_id=${habit_id}`, 
            {
              method : 'DELETE',
              headers: { "Content-Type": "application/json" }
            }
            //33165632-fc3d-436b-9a65-cc6f43973813
          );
        

        } catch (e) {
          console.log(e);
        }
      }; 

      deleteHabitById();

   
  }

  return (
    <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg m-5">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Title
        </h1>
        <div className="flex flex-row">
          <Link
            href={{
              pathname: "/habitDetails",
              query: { habit_id: habit_id }, // the data
            }}
          >
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Details
            </button>
          </Link>
          <button
            onClick={()=>deleteHabit()}
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 bg-red-500 hover:bg-red-400 text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-grey-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="p-2">
        {habit_content}
      </div>
    </div>
  );
}

export default HabitComponent;

