import React, {useEffect, useState} from 'react';

import './App.css';

type propsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todys,settodos] = useState<Array<propsType>>([])
    console.log( "Hello")


    const onClickHandler = () => {
        settodos([])
    }

    useEffect(() => {
        //onClickHandler()
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => settodos(json))
    },[])


    return (
        <div className='App'>

            <ul>
                {todys.map(e => {
                    return (
                        <div>
                            <li>{e.id}</li>
                            <li>{e.title}</li>
                            <li>{e.userId}</li>
                        </div>
                    )
                })}
            </ul>

            <button onClick={onClickHandler}> Clean posts</button>
        </div>
    )
        ;
}

export default App;
