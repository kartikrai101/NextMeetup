import Head from 'next/head'; // importing the Head component from the Head package
import { MongoClient } from 'mongodb'; 

import MeetupList from '../components/meetups/MeetupList'; 
import { Fragment } from 'react';

function HomePage(props){

    return <Fragment>
        {/* Using the head component along with the MeetupList component */}
                <Head>
                    {/* adding the title and description to our homepage */}
                    <title>NextMeetup</title>
                    <meta name="description" content="Browse a huge list of highly
                    active meetup places..." />
                </Head>
                <MeetupList meetups={props.meetups} /> 
            </Fragment>
};

export async function getStaticProps(){


    const client = await MongoClient.connect('mongodb+srv://kartik_rai:kartik_rai@cluster0.3jlusdt.mongodb.net/nextdb?retryWrites=true&w=majority')

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray(); 
    
    client.close(); 

    return {
        props: { 
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
};

export default HomePage; 