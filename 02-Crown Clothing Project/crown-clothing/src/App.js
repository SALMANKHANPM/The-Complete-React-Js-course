import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container" key={id}>
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
