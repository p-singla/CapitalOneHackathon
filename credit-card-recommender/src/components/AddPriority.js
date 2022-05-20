import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddPriority.css'

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
  const PickPriority = () => {
   const [priority, setPriority] = React.useState('TestCard1');
  
    const handlePriorityChange = (event) => {
      setPriority(event.target.value);
    };
  
  
    return (
        <div>
            <h1>What Reward Would You Like to Prioritize?</h1>
            <Dropdown
            label="Pick an Option"
            options={[
                { label: 'Cashback', value: 'TestCard1' },
                { label: 'Airline Miles', value: 'TestCard0' },
                { label: 'Points', value: 'TestCard2' },
            ]}
            value={priority}
            onChange={handlePriorityChange}
            />
            <section>
                <button>Enter</button>
                <button>Back</button>
            </section>
            
        </div>
    );
  };
  
export default PickPriority