import React, {useState} from "react"


const AttendeeFormPage = (props) => {
  debugger
  
  const attendee = props.attendee

  const [formFields, setFormFields] = useState({
    firstName: attendee.firstName !== null ? attendee.firstName : "",
    lastName: attendee.lastName !== null ? attendee.lastName : "",
    email: attendee.email !== null ? attendee.email : "",
  })

  const onChangeHandle = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const onSubmitHandle = (event) => {
    event.preventDefault();
    debugger
    props.submitAttendee(formFields)
  }

  debugger
  return( 
    <form onSubmit = {onSubmitHandle}>

      <label
        className = ""
        htmlFor ="firstName">
          First Name:
      </label>
      <input 
        className = "" 
        type = "text"
        name = "firstName"
        id = "firstName"
        onChange= {onChangeHandle}
        value = {formFields.firstName}
      />
      <label
        className = ""
        htmlFor ="lastName">
          First Name:
      </label>
      <input 
        className = "" 
        type = "text"
        name = "lastName"
        id = "lastName"
        onChange= {onChangeHandle}
        value = {formFields.lastName}
      />      
      <label
        className = ""
        htmlFor ="email">
          First Name:
      </label>
      <input 
        className = "" 
        type = "text"
        name = "email"
        id = "email"
        onChange= {onChangeHandle}
        value = {formFields.email}
      />

      <input 
        className ="button"
        type = "submit"
        value = "Save Attendee"
      
      />
      <button
        className ="button"
        type = "button"
        onClick = {props.onCancleHandler}
      >
        Don't Save XXX
      </button>

    </form>
  )



}

export default AttendeeFormPage