
import { useDispatch } from "react-redux"
import css from "./App.module.css"
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contactsOps"



function App() {

const dispatch = useDispatch()

useEffect(()=>{ dispatch(fetchContacts()) }, [dispatch])


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm 
      />
      <SearchBox 
      />
      <ContactList
       />
    </div>
  )
}

export default App
