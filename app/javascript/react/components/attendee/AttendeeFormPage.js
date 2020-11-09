import React, {useState} from "react"


const AttendeeFormPage = (props) => {
  
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
          Last Name:
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
          email:
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
        Cancle - Don't Save
      </button>

    </form>
  )



}

export default AttendeeFormPage