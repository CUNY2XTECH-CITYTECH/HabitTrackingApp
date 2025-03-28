import React, { useEffect, useState } from "react";
import HabitComponent, { HabitInfo } from "@/app/components/habit/habit-component";
//fixed user-feed component.

interface UserFeedProps {
  userId: string;
}

const UserFeed: React.FC<UserFeedProps> = ({ userId }) => {

  const [habits, setHabits] = useState< HabitInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch(`/api/habits/getAllUserHabits?userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch habits");

        const data: HabitInfo[] = await response.json();
        setHabits(data);
      } catch (error) {
        console.error("Error fetching habits:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchHabits();
  }, [userId]);

  if (loading) return <p>Loading habits...</p>;
  if (habits.length === 0) return <p>No habits found.</p>;

  return (
    <div className="user-feed">
    {habits.map((habit) => (
      <HabitComponent key={habit.id} {...habit} /> 
    ))}
  </div>

  );
};

export default UserFeed;

