import { useRouter } from 'next/router'; // importing the useRouter hook from next/router
import NewMeetupForm from '../../components/meetups/NewMeetupForm'; 

function NewMeetupPage (){

    async function onAddMeetupHandler(enteredMeetupData){ 

        const router = useRouter(); // defining the router object
        
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.replace('/');  // replacing the current page's url with the '/' path in the
        // url and using the replace method instead of 'push' so that user cannot 
        // return to the previous page after being sent to '/' (home page)
    }
    
    return ( 
        <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    );
};

export default NewMeetupPage;
