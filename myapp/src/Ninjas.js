import React from 'react';

// Stateless Component
// Functional Component
// UI Component
const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => {
    const { age, belt, name, id } = ninja;

    return (
      <div className="ninja" key={id}>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Belt: {belt}</p>
      </div>
    );
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
