// import { useDispatch, useSelector } from 'react-redux';
// import { setLocation, selectLocation } from '../../redux/locationSlice';
import locationCss from './LocationInput.module.css';

const LocationInput = () => {
  // const dispatch = useDispatch();
  // const location = useSelector(selectLocation);

  // const handleChange = (event) => {
  //   dispatch(setLocation(event.target.value));
  // };

  return (
    <>
      <input
        className={locationCss.input}
        type="text"
        id="location"
        // value={location}
        // onChange={handleChange}
        placeholder="City"
      />
    </>
  );
};

export default LocationInput;
