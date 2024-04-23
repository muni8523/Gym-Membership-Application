import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: '',
    gender: '',
    languages: [''],
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div class="container">
        <h1>Gym Membership Application</h1>

        {/* <!-- Registration Form --> */}
        <form id="registrationForm">
            {/* <!-- User Details --> */}
            <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required/>
            </div>

            <div class="form-group">
                <label for="dateOfBirth">Date of Birth:</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" required/>
            </div>

            <div class="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required pattern="[0-9]{10}"/>
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" required></textarea>
            </div>

            {/* <!-- Authentication --> */}
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>

            {/* <!-- Available Classes --> */}
            <div class="form-group">
                <label>Available Classes:</label>
                <div class="checkboxes">
                    <label>
                        <input type="checkbox" name="class" value="Yoga"/>
                        Yoga
                    </label>
                    <label>
                        <input type="checkbox" name="class" value="Pilates"/>
                        Pilates
                    </label>
                    <label>
                        <input type="checkbox" name="class" value="Zumba"/>
                        Zumba
                    </label>
                    <label>
                        <input type="checkbox" name="class" value="Strength Training"/>
                        Strength Training
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="timePreference">Preferred Time:</label>
                <select id="timePreference" name="timePreference">
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                </select>
            </div>

            <div class="form-group">
                <label>Gym Details:</label>
                <div class="grid">
                    <div class="grid-item">
                        <h3>Gym 1</h3>
                        <p>Location: Downtown</p>
                        <p>Facilities: Pool, Sauna</p>
                    </div>
                    <div class="grid-item">
                        <h3>Gym 2</h3>
                        <p>Location: Uptown</p>
                        <p>Facilities: Steam Room, Jacuzzi</p>
                    </div>
                    <div class="grid-item">
                        <h3>Gym 3</h3>
                        <p>Location: Suburb</p>
                        <p>Facilities: Running Track, Free Weights</p>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>Do you want a personal trainer?</label>
                <div class="radio-buttons">
                    <label>
                        <input type="radio" name="personalTrainer" value="Yes" required/>
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="personalTrainer" value="No" required/>
                        No
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="packageSelection">Select a Package:</label>
                <select id="packageSelection" name="packageSelection">
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                </select>
            </div>

            <div class="form-group">
                <label for="experience">Are you experienced in the gym?</label>
                <textarea id="experience" name="experience" required></textarea>
            </div>

            <div class="form-group">
                <label for="currentWeight">Current Weight (kg):</label>
                <input type="number" id="currentWeight" name="currentWeight" required/>
            </div>

            <div class="form-group">
                <label for="targetWeight">Target Weight (kg):</label>
                <input type="number" id="targetWeight" name="targetWeight" required/>
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
  );
}

export default App;
