import HabitComponent from "../habit/habit-component";
import { useEffect, useState } from "react";
import Session from 'supertokens-web-js/recipe/session';

const UserFeed = ()=>{

    const [allHabits, setAllHabits] = useState([]);
    const [userId, setUserId] = useState<String>("");

    useEffect(() => {
      
        async function getJWT() {
          if (await Session.doesSessionExist()) {
                let userId = await Session.getUserId();
                setUserId(userId);
                console.log(userId); 
          }
        }
    
        getJWT();

        const habits = async () => {
          try {
            
            const response = await fetch(
              `http://localhost:3000/api/habits/getAllUserHabits/?user_id=${userId}`
            );
            setAllHabits(await response.json());//not sure what the response is so line 39 has errors
          } catch (e) {
            console.log(e);
          }
        };
    
        habits();
      }, []);
      return(
        <div>
            {/* {allHabits.map((item) => (
      //   <HabitComponent key={item.habit_id} owner_id={item.owner_id} image_url={item.image_url} content={item.content} id={item.id} user_id={item.user_id} />
      // ))} */}
        </div>
      )
}

export default UserFeed;