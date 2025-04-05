import {useState} from 'react'

import './App.css'

const question = [
    {
        title: "Props - это...",
        description: "Props - это  это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.",
    },
    {
        title: "Money Forward",
        description: "Frontend and backend for a salary payout service on demand",
    },
]

function App() {
    const [activeIndex, setActiveIndex] = useState(null)


    function toggleArrow(index) {
        setActiveIndex(prev => (prev === index ? null : index))
    }

    return (
        <>
            <h1>Вопросики!</h1>
            {question.map((item, index) => (
                <div className="arrow" key={index}>
                    {activeIndex === index ? (
                        <>
                            <p>{item.title}</p>
                            <button onClick={() => toggleArrow(index)}>	&#9825;</button>
                        </>
                    ) : (
                        <>
                            <p>{item.description}</p>
                            <button onClick={() => toggleArrow(index)}>&hearts;</button>
                        </>
                    )}
                </div>
            ))}
        </>
    )
}


export default App
