import React, {useState, useEffect} from 'react'
import Movie from './Card';
import './ShowSuggestion.css'

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};
const PickMovie = () => {
 const [food, setFood] = React.useState('TestCard1');

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };


  return (
    <div>
      <Dropdown
        label="What category are you shopping in?"
        options={[
          { label: 'Travel', value: 'TestCard1' },
          { label: 'Retail', value: 'TestCard0' },
          { label: 'Dining', value: 'TestCard2' },
        ]}
        value={food}
        onChange={handleFoodChange}
      />

      <p>We recommend using your {food}!</p>
        </div>
  );
};


export default PickMovie
