const express = require('express')
const app = express('')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/usermodel');

// midlewares
dotenv.config()
app.use(express.json())
app.use(express.urlencoded())

//beginning of our codes

app.get('/', (req, res) => {
    res.status(200).send('hello world it is my first day writing express code! and am excited')
})
//simple post method
// app.post('/api/users', (req, res) =>{
//     const{ username, password, tel, email}= req.body
//     const user= {
//         username, password, tel, email
//     }
//     // send response
//     res.status(200).json(user)


// })

// post endpoints to create a new user
app.post('/api/users', async (req, res) => {
    const { username, password, tel, email } = req.body

    //create a new user document
    const newUser = new User({
        username: username,
        password: password,
        tel: tel,
        email: email
    });


    //save the new user to MongoDB collection

    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

//delete route to delete user by ID
// app.delete('/api/users/:id', async(req, res) => {
//     const userId = req.params.id

//     try {
//         const deletedUser = await User.findByIdAndDelete(userId)
//         if (!deletedUser) {
//             //if user not found 
//             return res.status(404).json({ error: 'user not found' })
//         }

//         //if user is deleted 
//         res.status({message: 'user deleted'})
//     } catch (error) {

//         //handle any error that occurs during the deleting process
// res.status(500).json({error:'failed to delete user'})
//     }
// })


//deleting by id
app.delete('/api/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

app.get('/api/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        //find user by id
        const user = await User.findById(userId)

        if (!user) {
            //if user does not exist
            return res.status(404).json({ error: 'user not found' })
        }
        //if the user is found
        res.json(user)
    } catch (error) {
        //handle errors that happen in the retrieval process
        res.status(500).json({ error: 'failed to find user' })
    }
})

//updating a request with a unique identifier which is the id

app.put('/api/users/:id', async (req, res)=>{
    const userId = req.params.id;
    const updatedUserData =req.body;

    try{
        //find the user by id an update the data
        //We then use User.findByIdAndUpdate(userId, updatedUserData,
        // { new: true }) to find the user by their ID and update their data.
        // The { new: true } option ensures that the updated user data is returned 
        //after the update operation.
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true })

        if(!updatedUser){
            //if user not found
            return res.status(404).json({error:'user not found'})
        }
        //if user is found and updated
        res.json(updatedUser)
    }catch(error){
//handle any error that occurs during the uppdate 
res.status(500).json({error:'failed to update user'})
    }
    
    
})

//update request with no unique identifier
app.put('/api/users', async (req, res)=>{
    const updatedUserData= req.body;

    try{
        //update all users with the provided info
        await User.updateMany({}, updatedUserData)
        //successfull try
        res.json({message:'users successfully updated'})
    }catch(error){
        //handle errors that occur during the update process
        res.status(500).json({error:'failed to update users'})
    }
})

//starting server, linking mongodb and hiding our passwords n urls

const server = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, (errr) => {
        if (errr) {
            return console.log('Failed to connect to mongoDB', errr);
        }
        console.log('Connected to DB');
    })

    app.listen(process.env.PORT, () => console.log(`server is runnning on ${process.env.PORT}`))

}

server()

