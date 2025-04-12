import React from 'react';

export const Js = ({questionJs, toggleArrowJs, activeJsIndex}) => {
    return (
      <>
          <h2>JS</h2>
          {questionJs.map((item, index) => {
              return (
                  <div className="arrow" key={index}>
                      <div className="content">
                          {activeJsIndex[index] ? (
                              <>
                                  <p className="question"> {item.title}</p>
                                  <p  className="answer">{item.description}</p>
                                  <button  onClick={() => toggleArrowJs(index)}>&#9825;</button>

                              </>
                          ) : (
                              <>
                                  <p className="question">{item.title}</p>
                                  <button onClick={() => toggleArrowJs(index)}> &hearts;</button>
                              </>
                          )}
                      </div>
                  </div>
                  )
          })}
          </>
    );
};

