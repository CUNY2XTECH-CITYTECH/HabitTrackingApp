"use client";

import { useEffect, useState } from "react";

//need to pass props of postsID to make it dynamic
//The varchar in the database doesnt hold much information. we might need json instead of varchar. 

const HabitDetails = () => {

    //since the database fields for posts table is not configured/created. This could change. 
  interface HabitDetailsFetched {
    posts_details: string;
  }

  const [habitDetails, setHabitDetails] = useState<String | null>(null);

  useEffect(() => {
    //fetch data from API

    const habit = async () => {
      try {
        //need to make the posts_id dynamic with the help of props passed through the HabitDetails()
        const response = await fetch(
          "http://localhost:3000/api/habit/?posts_id=33165632-fc3d-436b-9a65-cc6f43973813"
        );

        //technlogy like drizzle sends the data in array of JSON objects while requesting API. 
        const data: Array<HabitDetailsFetched> = await response.json();

        setHabitDetails(data[0].posts_details);
      } catch (e) {
        console.log(e);
      }
    };

    habit();
  }, []);

  return (
    //need to do some front end configuration with tailwind for better UI
    <div className="w-screen h-screen place-content-center p-10">
        {/* //Need to get the title of the posts and make it dynamic here as well instead of Mindfulness Meditation */}
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Mindfulness Meditation
      </h1>
      <div className=" bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-2 ">
        {habitDetails}
      </div>
    </div>
  );
};

export default HabitDetails; // export default HabitDetais;
