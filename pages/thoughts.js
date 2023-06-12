import { useState } from "react";
import { server } from "../config";
import gs from "../styles/Grid.module.css";
const thoughts = () => {
    const [answers, setAnswers] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const saveAnswers = async (e) => {
        //submit shit
        e.preventDefault();
        const options = {
            method: "POST",

            headers: { "Content-type": "application/json" },
            body: JSON.stringify(answers),

        };
        const response = await fetch(`${server}/api/commentdata/`, options);
        //const response = await fetch(`src/routes/api`, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        await response.json();
        setSubmitted(true);

    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers(value)
        //console.log(answers);
    }
    const formDisplay = (<div>
        <form onSubmit={async e => await saveAnswers(e)} className={gs.grid}>
            <label htmlFor="UserThoughts">Optional: Please provide your reasoning for your selection</label>
            <textarea name="UserThoughts" id="UserThoughts" onChange={handleChange} rows={4} cols={50} >

            </textarea>
            <button type="submit">Submit</button>
        </form>
    </div>)
    const thanksDisplay = (<div>
        <h3>
            Thank you for participating!
        </h3>
    </div>

    )
    return (
        <>
            {submitted?thanksDisplay:formDisplay}

        </>
    )
}
export default thoughts;