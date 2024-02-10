import { useDispatch } from 'react-redux';
import styles from '../Filter/filter-module.css';
import { setFilter } from '../../../redux/filter/filter-slice';

const Filter = () => {
  
  const dispatch = useDispatch();
  
  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };


    return (
      <input
        className={styles.input}
        onChange={changeFilter}
        name="filter"
        placeholder="Search"
        type="text"
      />
    );
}

export default Filter;