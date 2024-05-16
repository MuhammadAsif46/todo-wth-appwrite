import React, {useState, useEffect} from 'react'
import {databases} from '../appwrite/appwriteConfig'

function Todos() {
    const [todos, setTodos] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
      const getTodos = databases.listDocuments("6644dcd20016b8e86331","6644dd10002abf5f5cbd")
    
      getTodos.then(
        function(response){
          console.log(response);
            setTodos(response.documents)
        },
        function(error){
            console.log(error);
        }
      )
      setLoader(false)
    }, [])

    const deleteTodo = (id) => {
       const promise = databases.deleteDocument("6644dcd20016b8e86331","6644dd10002abf5f5cbd", id)
       promise.then(
        function(response){
            console.log(response);
        },
        function(error){
            console.log(error);
        }
      )
    }
    

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          
              {todos &&  todos.map(item => (
                <div key={item.$id} >
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => {
                        deleteTodo(item.$id)
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              )) }
            
        </div>
      )}
    </div>
  )
}

export default Todos