import { useEffect, useState } from "react";
import ToDo from "./components/ToDo"
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/handleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  //For input field
  const [text, setText] = useState('');
  //For button and updateToDo
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllToDo(setToDo);

  }, []);

  //Updatemode Function
  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }


  return (
    <div className="">

      <div className="mx-auto px-8 flex max-w-5xl flex-col overflow-hidden rounded py-10 shadow-sm">
        <div className="w-full rounded-sm bg-black py-4 px-5 text-white shadow-sm lg:px-6">
          <h3>TODO - MongoDb -Reactjs - Vite - Node - Express</h3>
        </div>



        <div className="grow space-y-3 rounded-md bg-slate-100 p-5 lg:p-6">
          {/* Input Field */}
          <div className="space-y-1">
            <div className="flex items-center">
              <input
                className="block w-full rounded-l border border-gray-100 px-5 py-2.5 leading-6"
                placeholder="Add To List"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="inline-flex flex-none items-center justify-center space-x-2 rounded-r border border-gray-200 bg-gray-200 px-4 py-3 font-semibold leading-4 text-gray-700 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 active:border-gray-200 active:bg-gray-200"
                type="button"
                onClick={isUpdating ?
                  () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                  : () => addToDo(text, setText, setToDo)} >

                {isUpdating ? "Update" : "Add"}
              </button>
            </div>
          </div>

          {/* List Todo */}
          <div>
            {
              toDo.map((item) =>
                <ToDo
                  key={item._id}
                  text={item.text}
                  updateMode={() => updateMode(item._id, item.text)}
                  deleteToDo={() => deleteToDo(item._id, setToDo)}
                />
              )
            }
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
