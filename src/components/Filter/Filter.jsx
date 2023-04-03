import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';
import { filter } from 'Redux/ValueSlice';
import { getFilter } from 'Redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    return <FilterField>Find contact by Name
        <input type="text" value={value}
            onChange={(e) => { dispatch(filter(e.currentTarget.value)) }}
            onBlur={() => dispatch(filter(''))}></input></FilterField>
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}