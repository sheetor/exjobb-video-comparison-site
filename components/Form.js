import React, { useState } from 'react';

function Form() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [videoUrl1, setVideoUrl1] = useState('https://your-video-url1');
  const [videoUrl2, setVideoUrl2] = useState('https://your-video-url2');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'option1') {
      setVideoUrl1('https://your-video-url1');
    } else if (event.target.value === 'option2') {
      setVideoUrl2('https://your-video-url2');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <video width="320" height="240" controls autoPlay loop>
        <source src={videoUrl1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value="option2"
            checked={selectedOption === 'option2'}
            onchange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <video width="320" height="240" controls autoPlay loop>
        <source src={videoUrl2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;


