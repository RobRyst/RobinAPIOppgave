'use client'
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

const Animals = () => {
    const [catfacts, setCatFacts] = useState([])
    const [data, setData] = useState("") 

    useEffect(() => {
        axios.get("./api/catfacts")
          .then((response) => {
            const data = response.data;
            console.log(data);
            setCatFacts(data);
          })
          .catch((error) => {
            console.error("Error fetching cat facts: ", error);
          });
      }, []);

      async function postCatFacts() {
        try {
            const response = await axios.post("./api/catfacts", { text: data }); // Send the text in the "data" state
            console.log('POST Request Response:', response.data);
            setCatFacts([...catfacts, response.data]);
            setData("");
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    }
    
    return (
        <>
        <Head>
            <title>CAT FACTS</title>
        </Head>
            <h1>CAT FACTS</h1>
            <section>
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button onClick={postCatFacts}>Post Cat Fact</button>
                <ul>
                    {catfacts.map((catFact) => (
                        <li key={catFact._id}>{catFact.text}</li>
                    ))}
                </ul>
            </section>
            
        </>
    )
}

export default Animals;