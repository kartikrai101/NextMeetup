import { Fragment } from "react"; 
import MeetupDetail from "../../components/meetups/MeetupDetail"; 

function MeetupDetails(props){ 
    return <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
};

export async function getStaticPaths() {
    return { 
        fallback: false, // setting the fallback value here to be false
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
};

export async function getStaticProps(context){ 

    const meetupId = context.params.meetupId;

    return {    
        props: {
            meetupData: {
                image: 'https://www.italiandualcitizenship.net/wp-content/uploads/2019/02/what-you-should-know-about-the-colosseum.jpg',
                id: meetupId,
                title: 'The Colosseum',
                address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
                description: 'The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.'
            }
        }
    }
};

export default MeetupDetails; 