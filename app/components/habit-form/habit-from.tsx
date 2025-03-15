import { useState } from 'react';

const HabitForm = () => {
  const [habit, setHabit] = useState('');
//form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!habit) return;

    try {
      //post request 
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ habit }),
      });

      if (response.ok) {
        console.log('Habit created!');
        setHabit(''); // Clear the form
      } else {
        console.error('Failed to create habit');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    //form to create a new habit
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter new habit"
        required
      />
      <button type="submit">Create Habit</button>
    </form>
  );
};

export default HabitForm;
