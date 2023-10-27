//el código as es para asignarle un nuevo nombre a la variable ej tasks as data ahora la podemos llamar data
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
function App() {


  return (
    <main className='bg-zinc-900 h-screen'>
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  )
}

export default App