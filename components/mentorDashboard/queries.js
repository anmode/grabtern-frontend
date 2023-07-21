import { divide } from 'lodash';
import React, { useState } from 'react';

function Queries(){
    const [pendingQueries, setPendingQueries] = useState([]);
    const [answeredQueries, setAnsweredQueries] = useState([]);

    function handleSubmit(query){
        //Add the query to the pending list of pendingQueries
        setPendingQueries([...pendingQueries, query]);
    }
    function handleAnswer(query){
        //Moves the query from the list of pending queries to the list of answered queries
        const index = pendingQueries.indexOf(query);
        pendingQueries.splice(index, 1);
        answeredQueries.push(query);

    }
    return(
        <div>
            <h1>Queries</h1>
            <h2>Pending</h2>
            {pendingQueries.map((query) => {
                <div key={query}>
                    <h3>{query}</h3>
                    <button onClick={() => handleAnswer(query)}>Answer</button>
                </div>

            })}
            <h2>Answered</h2>
            {answeredQueries.map((query)=>{
                <div key={query}>
                    <h3>{query}</h3>
                </div>
            })}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter your query'/>
                <button type='submit'>Submit</button>

            </form>
        </div>

    );
}
export default Queries;