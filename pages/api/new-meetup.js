import { MongoClient } from 'mongodb'; // importing the MongoClient object

async function handler(req, res){  // we can use the async keyword here to make this an
    // asynchronous function so that we can await the promise returned by the 
    // MongoClient.connect function 

    if(req.method === 'POST'){
        const data = req.body;

        // see that we have written the password and remember that you need to use
        // Also, we have used the name 'nextdb' for our database here in the line below

        const client = await MongoClient.connect('mongodb+srv://kartik_rai:kartik_rai@cluster0.3jlusdt.mongodb.net/nextdb?retryWrites=true&w=majority')

        const db = client.db(); // to get a hold of that database that we are connecting
        // to here

        const meetupsCollection = db.collection('meetups'); // this will select the 
        // collection named meetups and if there isn't one then it will create it

        const result = await meetupsCollection.insertOne(data); // inserting the data
        // object that we get from the request body into the collection

        console.log(result); // console loggin the value of the result

        client.close(); 

        res.status(201).json({ message: 'Meetup Inserted!' }); 
    }

};

export default handler; 