import React, { Component } from "react";
import "../App.css";

export default class Survey extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="Survey-instrument-container">
        <div className="Survey-header">
          <h1>Great American Rail Trail Survey</h1>
        </div>
        <form className="Survey-form-container" action="" method="post">
          <div className='Survey-group'>
            <h3>Age:</h3>
            <input type="radio" id="age1" name="age" value="18-24" />
            <label for="age1">18-24</label>
            <br />
            <input type="radio" id="age2" name="age" value="25-34" />
            <label for="age2">25-34</label>
            <br />
            <input type="radio" id="age3" name="age" value="35-44" />
            <label for="age3">35-44</label>
            <br />
            <input type="radio" id="age4" name="age" value="45-54" />
            <label for="age4">45-54</label>
            <br />
            <input type="radio" id="age5" name="age" value="55-64" />
            <label for="age5">55-64</label>
            <br />
            <input type="radio" id="age6" name="age" value="65 or older" />
            <label for="age6">65 or older</label>
          </div>

          <div className='Survey-group' >
            <h3>Gender:</h3>
            <input type="radio" id="gender1" name="gender" value="male" />
            <label for="gender1">Male</label>
            <br />
            <input type="radio" id="gender2" name="gender" value="female" />
            <label for="gender2">Female</label>
            <br />
            <input type="radio" id="gender3" name="gender" value="non-binary" />
            <label for="gender3">Non-binary</label>
            <br />
            <input
              type="radio"
              id="gender4"
              name="gender"
              value="prefer not to say"
            />
            <label for="gender4">Prefer not to say</label>
            <br />
          </div>

          <div className='Survey-group'>
            <h3>Race/Ethnicity:</h3>
            <input
              type="radio"
              id="Race/Ethnicity1"
              name="Race/Ethnicity"
              value="White/Caucasianle"
            />
            <label for="Race/Ethnicity1">White/Caucasian</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity2"
              name="Race/Ethnicity"
              value="Black/African American"
            />
            <label for="Race/Ethnicity2">Black/African American</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity3"
              name="Race/Ethnicity"
              value="Hispanic/Latino"
            />
            <label for="Race/Ethnicity3">Hispanic/Latino</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity4"
              name="Race/Ethnicity"
              value="Asian/Pacific Islander"
            />
            <label for="Race/Ethnicity4">Asian/Pacific Islander</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity5"
              name="Race/Ethnicity"
              value="Native American/ Alaskan Native"
            />
            <label for="Race/Ethnicity4">Native American/ Alaskan Native</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity6"
              name="Race/Ethnicity"
              value="Multi-Racial"
            />
            <label for="Race/Ethnicity4">Multi-Racial</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity7"
              name="Race/Ethnicity"
              value="Other"
            />
            <label for="Race/Ethnicity4">Other</label>
            <br />
            <input
              type="radio"
              id="Race/Ethnicity8"
              name="Race/Ethnicity"
              value="prefer not to say"
            />
            <label for="Race/Ethnicity4">Prefer not to say</label>
            <br />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
