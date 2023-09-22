const db = require("../entities");
const data = db.user

const addData = async(req,res) =>{
    try {

        // Extract the admin data from the request body
        const {title,category,text,date } = req.body;
        console.log( title,category,text,date )

        // Create a new admin record in the database
        const newdata = await data.create({
           title,
           category,
           text,
           date
        });
        res.status(201).json({ message: 'event added successfully',status:true});
    }
    catch (err) {
        // Handle any errors that occur during the addition process
        console.error(err);
        res.status(500).json({ error: 'Failed to add data   ' });
    }
}

module.exports = {
    addData
}