const TaskModel = require('../models/todomodel')


module.exports.getTask = async (req, res) => {
    const toDotask = await TaskModel.find()
    res.send(toDotask)
}

module.exports.saveTask = (req, res) => {
    const todo = req.body
    TaskModel.create(todo)

        .then((data) => {
            console.log('saved successfuly...!');
            res.status(200).send(data)
        })
        .catch((error) => {
            console.log(error);
            res.send({ error, msg: 'something went wrong!' })
        })
}

module.exports.updatetask = (req, res) => {

    const id = req.params
    const task = req.body

    TaskModel.findByIdAndUpdate(id, { task })
        .then(() => res.send('Updated successfully'))
        .catch((error) => {
            console.log(error);
            res.send({ error, msg: 'something went wrong' })
        })
}

module.exports.deletetask = (req, res) => {
    const { id } = req.params

    TaskModel.findByIdAndDelete(id)
        .then(() =>
            res.send('Deleted successfully')
        )
        .catch((error)=>{
            console.log(error);
            res.send({error,msg:'Something went wrong'})
        })
}