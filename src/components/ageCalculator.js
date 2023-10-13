import {useState} from 'react';
import './ageCalculator.css';

function CalculateAge()
{
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState('');

    const calculate = () => {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();

        const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();

        if (
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
        ){
            setAge(yearsDiff - 1);
        }
        else{
            setAge(yearsDiff);
        }
    };

    return(
        <div>
            <h1>Age Calculator</h1>
            <div>
                <h4><label htmlFor='birthdate'>Enter your date of birth</label></h4>
                <input 
                type='date'
                id='birthdate'
                value={birthdate}
                onChange={(date) => setBirthdate(date.target.value)}
                />
                <br />
                <button onClick={calculate}>Calculate Age</button>
            </div>
            {age != '' && <h2>You are {age} years old</h2>}
        </div>
    );
}

export default CalculateAge;