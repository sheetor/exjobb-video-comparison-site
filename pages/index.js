import { server } from "../config";
import gridStyle from "../styles/Grid.module.css";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
//import { videoList } from "../videoList";
import { non_pair_list } from "../videoList";
import { FormSet } from "../components/FormSet";

export default function Home({ articles }) {
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState({});
  const [canSubmit, setCansubmit] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [pairs, setPairs] = useState(null);
  

  const pairGen = (antalPairs = 10, selectionSize = 20) => {
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
    await response.json();
    router.push("/thoughts")
    //adda en datafolder med data.js || data.json  o lägg till svar där. chatGPT
  };
  const handleRadioChange = (e,pairs) => {
    const { name, value } = e.target;
    const notSelected = pairs.findIndex((element) => parseInt(element)!==parseInt(value))
    const newValue = [value, pairs[notSelected]];
    setAnswers((prev) => {
      return { ...prev, [name]: newValue };
    });
    setSelectedOption(e.target.value);
    //setSelectedVideo(e.target.value);
    /* console.log(pairs);
    console.log(newValue);
    console.log(e.target.value);
     */
    console.log(answers);
  };
  
  const beginForm = () => {
    setPairs(pairGen())
  }
  const welcome = (<div>
    <h3>
      Thank you for participating in this study!
    </h3>
    <p>
      You will be shown a series of videos simulating a chain of boxes.
    </p>  
    <p>
      Please select the video that you feel has the most realistic looking motion and click the Next button to move on. After reaching the end, dont forget to click Submit!
    </p>
    <p>
      This study is estimated to take around 20 minutes.
    </p>
    <button onClick={beginForm}>Begin Study</button>
  </div>)

  function refreshpage(){
    window.location.reload(false);
  }
  return (
    <>
      <form
        className={gridStyle["grid"]}
        onSubmit={async (e) => {
          try {
            await saveAnswers(e);
            router.push("/thoughts")
            //refreshpage();
            /* setCounter(0);
            e.target.reset();
            setAnswers({});
            setCansubmit(false); */
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
