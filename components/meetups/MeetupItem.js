import {useRouter} from 'next/router'; // importing the useRouter hook from the
// next/router library

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {

  const router = useRouter(); // defining the router object using the useRouter hook

  function showDetailsHandler (){ // defining the handler function that will be invoked 
    // when the Show Details button is clicked

    router.push('/' + props.id ); // pushing this route in the url when the Show Details
    // button is clicked. Here id is actually the meetup id that we are expecting as
    // a prop to this component

  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>

          {/* attaching this button to the showDetailsHandler function  */}
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
