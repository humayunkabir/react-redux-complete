import React from 'react';

// Stateless Component
// Functional Component
// UI Component
const Ninjas = ({ ninjas, deleteNinja }) => {
  // if-else Method: [if (condition) {} else {}]
  // const ninjaList = ninjas.map(ninja => {
  //   const { age, belt, name, id } = ninja;

  //   if (age > 20) {
  //     return (
  //       <div className="ninja" key={id}>
  //         <h3>Name: {name}</h3>
  //         <p>Age: {age}</p>
  //         <p>Belt: {belt}</p>
  //       </div>
  //     );
  //   }
  //   return null;
  // })

  // Ternary Operator Method: [condition ? () : ()] | ***Better Method***
  // const ninjaList = ninjas.map(ninja => {
  //   const { age, belt, name, id } = ninja;
  //   return age > 20 ? (
  //     <div className="ninja" key={id}>
  //       <h3>Name: {name}</h3>
  //       <p>Age: {age}</p>
  //       <p>Belt: {belt}</p>
  //     </div>
  //   ) : null;
  // });

  // return <div className="ninja-list">{ninjaList}</div>;
  return (
    <div className="ninja-list">
      {ninjas.map(ninja => {
        const { age, belt, name, id } = ninja;
        return age > 20 ? (
          <div className="ninja" key={id}>
            <div className="block">
              <h3>Name: {name}</h3>
              <p>Age: {age}</p>
              <p>Belt: {belt}</p>
              <button onClick={() => deleteNinja(id)}>Delete Ninja</button>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
