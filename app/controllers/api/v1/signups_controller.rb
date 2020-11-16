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

  def update
    attendee_id = params[:attendee_id]
    check_list = params[:check_list]
    meeting_list = params[:meeting_list]

    binding.pry
    
    meeting_list.each do |meeting| 
      binding.pry
      if (meeting[:status] == nil) 
        if (check_list[meeting[:id]] != nil)
          binding.pry
          # Singup.new ( )

      elsif ((meeting[:status] == 2)  != check_list[meeting[:id]])
        binding.pry
        # Singup.find( ??)
      end

    end


  end

end