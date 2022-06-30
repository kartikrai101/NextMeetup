import Head from 'next/head'; // importing the Head tag from next 

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'; 

function NewMeetupPage (){
    const router = useRouter();

    async function onAddMeetupHandler(enteredMeetupData){ 

        
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.replace('/'); 
    }
    
    return ( 
        <Fragment>
            <Head>
                {/* adding the title and description to our homepage */}
                <title>Add New Meetup</title>
                <meta 
                    name="description"
                    content="Add your own meetups and create amazing opportunities!"
                />
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </Fragment>
    );
};

export default NewMeetupPage;
