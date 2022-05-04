const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 1,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 1,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 1,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 1,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="catergory-container">
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
