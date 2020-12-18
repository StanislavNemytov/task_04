/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';
import { data } from '../../dataForDnDWithId2.json';
// import BaseScreen from '../BaseScreen/BaseScreen';
// import PintScreen from '../PintScreen/PintScreen';
import './App.scss';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [state, setState] = useState(data);
  const [modal, setModal] = useState(null);
  const [draggable, setDraggable] = useState(true);
  const carouselStyle = {
    gridTemplateColumns: `repeat(${Object.keys(state).length - 1}, 100%)`,
    left: `${currentScreen * -100}%`,
  };

  return (
    <div className="gadget">
      <div className="gadget__shell" />
      <div className="screen">
        {/* <label
          htmlFor="draggable"
          style={{
            position: 'absolute',
            top: '-24px',
            left: '0',
            color: 'black',
          }}
        >
          draggable:
          <input
            name="draggable"
            id="draggable"
            type="checkbox"
            checked={draggable}
            onChange={() => handleDraggable()}
          />
        </label>
        <div className="screen__item carousel">
          <div className="carousel__length" style={carouselStyle}>
            {state.screenOrder.map(item => (
              <BaseScreen
                key={item}
                allApps={state[item]}
                draggable={draggable}
                onDragEnd={onDragEnd}
              />
            ))}
          </div>
          <div className="carousel__dots">
            {state.screenOrder.map((_, index) => {
              const key = `dot-${index}`;
              const className = `dot ${
                index === currentScreen ? 'active' : ''
              }`;
              return (
                <button
                  type="button"
                  key={key}
                  className={className}
                  onClick={() => setCurrentScreen(index)}
                >
                  {index}
                </button>
              );
            })}
          </div>
        </div>
        <PintScreen pint={state.menu} handleClick={handleClick} />
        {modal && (
          <div
            className={`modal ${modal.toClose ? 'modal--closing' : ''}`}
            onClick={onClickOutside}
            onKeyPress={() => {}}
            role="button"
            tabIndex={-1}
          >
            <div className="modal__content">
              <button className="modal__close" onClick={onClose} type="button">
                X
              </button>
              <img
                className="modal__img"
                src={
                  require(`../../src/assets/images/icons/${modal.content}.png`)
                    .default
                }
                alt={modal.content}
              />
              <p>{modal.content}</p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
export default App;
