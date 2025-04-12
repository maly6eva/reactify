import React from 'react';

export const QuestionsSection = ({title, question, toggleArrow, activeIndex, children}) => {
    return (
        <>
            <h2>{title}</h2>
            {question.map((item, index) => {
                return (
                    <div className="arrow" key={index}>
                        <div className="content">
                            {activeIndex[index] ? (
                                <>
                                    <p className="question"> {item.title}</p>
                                    <p  className="answer">{item.description}</p>
                                    <button  onClick={() => toggleArrow(index)}>&#9825;</button>

                                </>
                            ) : (
                                <>
                                    <p className="question">{item.title}</p>
                                    <button onClick={() => toggleArrow(index)}> &hearts;</button>
                                </>
                            )}
                        </div>
                    </div>
                )
            })}
            {children}
        </>
    );
};
