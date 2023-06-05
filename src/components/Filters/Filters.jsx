import { useSelector, shallowEqual } from 'react-redux'
import filters from '../../data/products.json';
import './Filters.css';

const selectFilters = (state) => state.filters;

function Filters() {
  const filterss = useSelector(selectFilters, shallowEqual);
  
  return (
    <div className='filters-container'>
      {filters?.map(({ id, title, description, image }) => (
        <div key={id} className='filter-card'>
          <img src={image} className='filter-img'/>
          <div>
            <div className='filter-title'>{title}</div>
            <div className='filter-desc'>{description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filters;
