import { useDispatch, useSelector } from 'react-redux'
import css from '../SearchBox/SearchBox.module.css'
import { ChangeFilter } from '../../redux/filtersSlice'
const SearchBox = () => {

const dispatch=useDispatch()
const filter = useSelector(state => state.filter.name)

  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Find contacts by name</h2>
      <input className={css.search} type="text" value={filter} onChange={e => dispatch(ChangeFilter(e.target.value))}/>
    </div>
  )
}

export default SearchBox