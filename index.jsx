const app = document.getElementById("app")

const arrItems = [{text:"item pra fazer", completed:false}, {text:"Estudar react", completed:true}, {text:"fazer caminhada de manhã", completed:false}]


const styleCompleted = "line-through text-gray-400 border"


function OutlinePlusIcon({ size }) {
    return (
        <svg className="fill-slate-200" width={size} height={size} viewBox="0 0 1024 1024">
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" />
            <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" />
        </svg>
    )
}

function FaTrashAlt({ size }) {
    return (
        <svg className="fill-pink-800" width={size} height={size} viewBox="0 0 448 512">
            <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" />
        </svg>
    )

}


function Header() {
    return <h1 className="text-3xl font-bold text-center text-gray-800 p-2">
        Todo App
    </h1>
}

function Form() {
    return <form className="flex justify-between">
        <input type="text" placeholder="Add Todo" className="border p-2 w-full text-xl" />
        <button className="border p-4 ml-2 bg-pink-800 rounded-full">
            <OutlinePlusIcon size={30} />
        </button>
    </form>
}


function TodoListItem({listItem}) {
    return (
        <li className={`flex justify-between bg-pink-100 p-4 my-2 capitalize ${listItem.completed ? styleCompleted : ''}`} >
            <div className="flex">
                <input type="checkbox" />
                <p className="ml-2 cursor-pointer">{listItem.text}</p>
            </div>
            <button className="cursor-pointer flex items-center">
                <FaTrashAlt size={20} />
            </button>
        </li>
    )
}
function ToDoList({arrItems}) {
    return (
        <ul>
            {arrItems.map((item)=>{
                return (
                    <TodoListItem listItem={item}/>
                )
            })}
        </ul>
    )
}


function Footer({arrItems}) {
    return (
    <p className="p-4 text-center">
        You have {arrItems.length} items
        </p>
    )
}

function HomePage() {
    return (
        <div className="h-screen w-screen p-4 bg-gradient-to-r from-pink-700 to-pink-950">
            <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
                <Header />
                <Form />
                <ToDoList arrItems={arrItems}/>
                <Footer arrItems={arrItems}/>
            </div>
        </div>
    )
}


ReactDOM.render(<HomePage />, app)
