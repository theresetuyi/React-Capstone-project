import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AfricaImage from '../images/africa.svg';
import AsiaImage from '../images/asia.svg';
import EuropeImage from '../images/europe.svg';
import OceaniaImage from '../images/oceania.svg';
import NorthAmericaImage from '../images/north america.svg';
import SouthAmericaImage from '../images/south america.svg';
import AntarcticaImage from '../images/antarctica.svg';
import { getCountries } from '../redux/countries/countriesSlice';
import '../styles/Continents.css';

function Continents() {
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
      image: AfricaImage,
    },
    {
      id: uuidv4(),
      name: 'Asia',
      map: '',
      image: AsiaImage,
    },
    {
      id: uuidv4(),
      name: 'Europe',
      map: '',
      image: EuropeImage,
    },
    {
      id: uuidv4(),
      name: 'Oceania',
      map: '',
      image: OceaniaImage,
    },
    {
      id: uuidv4(),
      name: 'North America',
      map: '',
      image: NorthAmericaImage,
    },
    {
      id: uuidv4(),
      name: 'South America',
      map: '',
      image: SouthAmericaImage,
    },
    {
      id: uuidv4(),
      name: 'Antarctica',
      map: '',
      image: AntarcticaImage,
    },
  ];

  const filteredContinents = searchTerm
    ? continentsData
      .filter((continent) => continent.name.toLowerCase()
        .includes(searchTerm.toLowerCase()))
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
}

export default Continents;
