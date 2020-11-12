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
    
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className = "medium-12 cell">
          <label
            className = ""
            htmlFor ="firstName">
              First Name:
          </label>
          </div>
          <div className = "medium-6 cell">
          <input 
            className = "" 
            type = "text"
            placeholders = ".medium-6.cell"
            name = "firstName"
            id = "firstName"
            onChange= {onChangeHandle}
            value = {formFields.firstName}
          />
          </div>
          <label
            className = "medium-12 cell"
            htmlFor ="lastName">
              Last Name:
          </label>
          <div className = "medium-6 cell">
          <input 
            className = "" 
            type = "text"
            placeholders = ".medium-6.cell"
            name = "lastName"
            id = "lastName"
            onChange= {onChangeHandle}
            value = {formFields.lastName}
          />    
          </div>  
          <label
            className = "medium-12 cell"
            htmlFor ="email">
              email:
          </label>
          <div className = "medium-6 cell">
          <input 
            className = "" 
            type = "text"
            placeholders = ".medium-6.cell"
            name = "email"
            id = "email"
            onChange= {onChangeHandle}
            value = {formFields.email}
          />
          </div>
 
        </div>
      </div>

      <div className = "button-group">
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
      </div>

    </form>
  )



}

export default AttendeeFormPage