class Api::V1::SignupsController < ApiController

  def index
    signups = Signup.all 
    render json: signups
  end

  def create
    attendee = Attendee.find(params[:attendee_id])
    meeting = Meeting.find(params[:meeting_id])
    status_choice = params[:status_choice]

     
    signup= Signup.find_or_initialize_by(attendee: attendee, meeting: meeting)
    if (signup.status == nil || signup.status != status_choice)
      signup.status = status_choice
    else
      signup.status = :abstain
    end

    if signup.save 
      render json: signup
    else
      render json: {errors: signup.errors.full_messages.to_sentence, meetingId: meeting.id}
    end
  end

end