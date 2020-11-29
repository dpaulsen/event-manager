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
    # remove ? 
    # binding.pry
    # puts " in update"
    attendee_id = params[:attendee_id]
    check_list = params[:check_list]
    meeting_list = params[:meeting_list]
  
    meeting_list.each do |meeting| 

      if (meeting[:status] == nil) 
        if (check_list[meeting[:id].to_s] != nil)

          m = Meeting.find_by(id: meeting[:id])
          a = Attendee.find_by(id: attendee_id)
          s = Signup.new( meeting: m, 
                          attendee: a, 
                          status: check_list[meeting[:id].to_s] ? :yes : :no
          )
          s.save

        end

      elsif ((meeting[:status] == 2)  != check_list[meeting[:id].to_s])

        s = Signup.find_by(meeting: meeting[:id], attendee: attendee_id)
        s.status = (check_list[meeting[:id].to_s]) ? :yes : :no
         s.save
      end

    end

    render json: {attendeeId: attendee_id}
  end

  def custom

    attendee_id = params[:attendee_id]
    check_list = params[:check_list]
    meeting_list = params[:meeting_list]
  
    meeting_list.each do |meeting| 

      if (meeting[:status] == nil) 
        if (check_list[meeting[:id].to_s] != nil)

          m = Meeting.find_by(id: meeting[:id])
          a = Attendee.find_by(id: attendee_id)
          s = Signup.new( meeting: m, 
                          attendee: a, 
                          status: check_list[meeting[:id].to_s] ? :yes : :no
          )
          s.save

        end

      elsif ((meeting[:status] == 2)  != check_list[meeting[:id].to_s])

        s = Signup.find_by(meeting: meeting[:id], attendee: attendee_id)
        s.status = (check_list[meeting[:id].to_s]) ? :yes : :no
         s.save
      end

    end

    render json: {attendeeId: attendee_id}
  end


end