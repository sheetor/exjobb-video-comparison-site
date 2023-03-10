import { server } from "../config";
import gridStyle from "../styles/Grid.module.css";

import { useEffect, useState } from "react";

import { videoList } from "../videoList";
import { FormSet } from "../components/FormSet";

export default function Home({ articles }) {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState({});
  const [canSubmit, setCansubmit] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    console.log("Selected video:", answers);
    if (!(counter < videoList.length)) {
      setCansubmit(true);
    }
  };

  const handleSubmit = async (e) => {
    //submit shit
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({ answers }),
      headers: { "Content-type": "application/json" },
    };
    const response = await fetch(`${server}/api/data`, options).catch((err) =>
      console.log(err)
    );
    const data = await response.json();
    console.log(data);

    //adda en datafolder med data.js || data.json  o lägg till svar där. chatGPT
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => {
      return { ...prev, [name]: value };
    });
    //setSelectedVideo(e.target.value);
    console.log(e.target.value);
    console.log(answers);
  };

  return (
    <>
      <form className={gridStyle["grid"]} onSubmit={handleSubmit}>
        <FormSet
          videoPairs={videoList}
          handleRadio={handleRadioChange}
          counter={counter}
        />

        <div className={gridStyle["inp_cont"]}>
          <button onClick={handleNext} disabled={canSubmit}>
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
