import SpecialButton from './SpecialButton.js';
import { specials } from '../../../data.js';

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div className="special-div">
      {specials.map(special =>
        <SpecialButton text={special} addSpecial={props.addSpecial}/>
      )}

    </div>
  );
};

export default Specials
