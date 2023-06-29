import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getCountries } from '../redux/countries/countriesSlice';
import '../styles/Continents.css';

const Continents = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (name) => {
    dispatch(getCountries(name));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const continentsData = [
    {
      id: uuidv4(),
      name: 'Africa',
      map: '',
      image: '/images/Africa.svg',
    },
    {
      id: uuidv4(),
      name: 'Asia',
      map: '',
      image: '/images/Asia.svg',
    },
    {
      id: uuidv4(),
      name: 'Europe',
      map: '',
      image: '/images/Europe.svg',
    },
    {
      id: uuidv4(),
      name: 'Oceania',
      map: '',
      image: '/images/Oceania.svg',
    },
    {
      id: uuidv4(),
      name: 'North America',
      map: '',
      image: '/images/North America.svg',
    },
    {
      id: uuidv4(),
      name: 'South America',
      map: '',
      image: '/images/South America.svg',
    },
    {
      id: uuidv4(),
      name: 'Antarctica',
      map: '',
      image: '/images/Antarctica.svg',
    },
  ];

  const filteredContinents = searchTerm
    ? continentsData.filter((continent) =>
        continent.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : continentsData;

  return (
    <section className="continents">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search continents"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <ul className="items">
        {filteredContinents.map(({ id, name, image }) => (
          <li key={id}>
            <img src={image} alt="awesome" />
            <h2>{name}</h2>
            <Link to={`/${name}`}>
              <BsFillArrowRightCircleFill onClick={() => handleClick(name)} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Continents;
