const initState = {
  posts: [
    {
      id: 1,
      title: 'buy some milk',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum dolore veniam doloribus perferendis perspiciatis consequuntur illo magnam ipsa eos velit repellendus praesentium non, totam iste recusandae, quis, neque dolor.'
    },
    {
      id: 2,
      title: 'play mario kart',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque quia voluptas corrupti mollitia atque earum. Ipsum officia sapiente incidunt, alias suscipit minima accusamus dignissimos praesentium exercitationem odio sint non.'
    }
  ]
};
const rootReducer = (state = initState, action) => {
  return state;
};
export default rootReducer;
