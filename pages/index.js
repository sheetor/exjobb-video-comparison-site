import { server } from "../config";
import gridStyle from "../styles/Grid.module.css";

import { useEffect, useState } from "react";

//import { videoList } from "../videoList";
import { non_pair_list } from "../videoList";

import { FormSet } from "../components/FormSet";

export default function Home({ articles }) {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState({});
  const [canSubmit, setCansubmit] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [pairs, setPairs] = useState(null);
  

  const pairGen = (antalPairs = 10, selectionSize = 16) => {
    const pairList = [];
    const usedPairs = new Set();

    while (pairList.length < antalPairs) {
      // Get a random index for the first element
      let index1 = Math.floor(Math.random() * selectionSize); // * videolist.length
      // Get a random index for the second element, excluding the index of the first element
      let index2 = Math.floor(Math.random() * (selectionSize - 1));
      if (index2 >= index1) {
        index2++;
      }
      const pair = [index1, index2].sort((a, b) => a - b);
      const pairKey = pair.join("-");

      if (index1 !== index2 && !usedPairs.has(pairKey)) {
        pairList.push(pair);
        usedPairs.add(pairKey);
      }
    }
    return pairList;
  }

  const handleNext = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    console.log("Selected video:", answers);
    if (!(counter < pairs.length - 1)) {
      setCansubmit(true);
    }
    setSelectedOption(null);

  };

  const saveAnswers = async (e) => {
    //submit shit
    e.preventDefault();
    const options = {
      method: "POST",

      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ answers }),

    };
    const response = await fetch(`${server}/api/data/`, options);
    //const response = await fetch(`src/routes/api`, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();

    //adda en datafolder med data.js || data.json  o lägg till svar där. chatGPT
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => {
      return { ...prev, [name]: value };
    });
    setSelectedOption(e.target.value);
    //setSelectedVideo(e.target.value);

    console.log(e.target.value);
    console.log(answers);
  };
  
  const beginForm = () => {
    setPairs(pairGen())
  }
  const welcome = (<div>
    <h3>
      Welcome message!
    </h3>
    <p>
      You are going to compare 10 pairs of videos and choose a video from each pair which you find to be more ´realistic?´ 
    </p>
    <button onClick={beginForm}>Begin Form</button>
  </div>)

  return (
    <>
      <form
        className={gridStyle["grid"]}
        onSubmit={async (e) => {
          try {
            await saveAnswers(e);
            setCounter(0);
            e.target.reset();
            setAnswers({});
            setCansubmit(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {pairs !== null ? (<FormSet
          videoPairs={non_pair_list}
          handleRadio={handleRadioChange}
          counter={counter}
          pairs = {pairs}
        />) : (welcome)}

        <div className={gridStyle["input_cont"]}>
          <button
            onClick={handleNext}
            disabled={canSubmit || !selectedOption}
          >
            Next
          </button>
          <button type="submit" disabled={!canSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
