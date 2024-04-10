import TableComponent from './components/TableComponent'
import { ProviderModal } from './context/providerModal'
import './App.css'

function App() {

  return (

    <>
      <ProviderModal>
        <div className='container d-flex flex-column mt-5 gap-5 text-center justify-content-center align-items-center'>
          <TableComponent />
        </div>
      </ProviderModal>
    </>
  )
}

export default App
