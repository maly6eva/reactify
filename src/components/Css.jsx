import React from 'react';

export const Css= ({questionCss, toggleArrowCss, activeCssIndex}) => {
    return (
      <>
          <h2>Css</h2>
          {questionCss.map((item, index) => {
              return (
                  <div className="arrow" key={index}>
                      <div className="content">
                          {activeCssIndex[index] ? (
                              <>
                                  <p className="question"> {item.title}</p>
                                  <p  className="answer">{item.description}</p>
                                  <button  onClick={() => toggleArrowCss(index)}>&#9825;</button>

                              </>
                          ) : (
                              <>
                                  <p className="question">{item.title}</p>
                                  <button onClick={() => toggleArrowCss(index)}> &hearts;</button>
                              </>
                          )}
                      </div>
                  </div>
                  )
          })}
          </>
    );
};

