import axios from 'axios'


const baseUrl = `http://localhost:5000`

//frontend and backend configuration and fetch data

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data=>', data);
            setToDo(data)
        })
        .catch(error => {
            console.log(error);
        });
}

// Input field
const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch(error => {
            console.log(error);
        });
}

// Update field
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

// Delete field
const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo)
        })
        .catch(error => {
            console.log(error);
        });
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }