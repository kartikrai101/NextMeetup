import { MongoClient } from 'mongodb'; // importing the MongoClient object

async function handler(req, res){  // we can use the async keyword here to make this an
    // asynchronous function so that we can await the promise returned by the 
    // MongoClient.connect function 

    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://kartik_rai:kartik_rai@cluster0.3jlusdt.mongodb.net/nextdb?retryWrites=true&w=majority')

        const db = client.db(); 

        const meetupsCollection = db.collection('meetups'); 

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close(); 

        res.status(201).json({ message: 'Meetup Inserted!' }); 
    }

};

export default handler; 