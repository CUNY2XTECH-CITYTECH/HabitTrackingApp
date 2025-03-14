import HabitComponent from "../habit/habit-component";
import { useEffect, useState } from "react";

const UserFeed = ()=>{

    const [allHabits, setAllHabits] = useState([]);
    useEffect(() => {
        
        const habits = async () => {
          try {
            
            const response = await fetch(
              `http://localhost:3000/api/habits/`
            );
            setAllHabits(await response.json());
          } catch (e) {
            console.log(e);
          }
        };
    
        habits();
      }, []);
      return(
        <div>
            {allHabits.map((item) => (
        <HabitComponent key={item.habit_id} owner_id={item.owner_id} image_url={item.image_url} content={item.content} id = {item.id} />
      ))}
        </div>
      )
}

export default UserFeed;