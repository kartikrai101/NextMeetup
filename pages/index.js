import MeetupList from '../components/meetups/MeetupList'; 

const DUMMY_MEETUPS = [ 
  {
      id: 'm1',
      title: 'The Colosseum',
      image: 'https://www.italiandualcitizenship.net/wp-content/uploads/2019/02/what-you-should-know-about-the-colosseum.jpg',
      address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
      description: 'The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.'
  },
  {
      id: 'm2',
      title: 'Trevi Fountain', 
      image: 'https://cdn.statically.io/img/travelconnectexperience.net/f=auto%2Cq=80/wp-content/uploads/2021/09/trevi-fountain-and-colosseum-rome.jpg',
      address: 'Piazza di Trevi, 00187 Roma RM, Italy',
      description: 'The Trevi Fountain is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others.'
  }  
];

function HomePage(props){

    return <MeetupList meetups={props.meetups} /> 
};

export async function getServerSideProps(context){ // defining the getServerSideProps
    // function and you get this context object in the argument that has some 
    // information about the request that was made when the user requested for this page
    // and the response

    const req = context.req;
    const res = context.res; 

    // fetch data from an API

    return{ // returning the props object to this functional component
        props:{
            meetups: DUMMY_MEETUPS
        }
    };
}

// export async function getStaticProps(){
//     //fetch data from an API

//     return {
//         props: { 
//             meetups: DUMMY_MEETUPS
//         },
//         reValidate: 10 
//     }
// }

export default HomePage; 