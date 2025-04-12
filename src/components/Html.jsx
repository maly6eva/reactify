import React from 'react';

export const Html = ({questionHtml, toggleArrowHtml, activeHtmlIndex}) => {
    return (
        <>
            <h2>HTML</h2>
            {questionHtml.map((item, index) => {
                return (
                    <div className="arrow" key={index}>
                        <div className="content">
                            {activeHtmlIndex[index] ? (
                                <>
                                    <p className="question"> {item.title}</p>
                                    <p  className="answer">{item.description}</p>
                                    <button  onClick={() => toggleArrowHtml(index)}>&#9825;</button>

                                </>
                            ) : (
                                <>
                                    <p className="question">{item.title}</p>
                                    <button onClick={() => toggleArrowHtml(index)}> &hearts;</button>
                                </>
                            )}
                        </div>
                    </div>
                )
            })}

        </>
    );
};

