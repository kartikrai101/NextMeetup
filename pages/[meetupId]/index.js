import { Fragment } from "react"; // importing Fragment component from the 'react' library
import MeetupDetail from "../../components/meetups/MeetupDetail"; // importing the 
// meetup detail component from the components folder

function MeetupDetails(){ 
    return <MeetupDetail 
        image="https://www.italiandualcitizenship.net/wp-content/uploads/2019/02/what-you-should-know-about-the-colosseum.jpg"
        title="The Colosseum"
        address="Piazza del Colosseo, 1, 00184 Roma RM, Italy"
        description="The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age."
    />
};

export default MeetupDetails; 