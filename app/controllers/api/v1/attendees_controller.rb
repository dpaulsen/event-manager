class Api::V1::AttendeesController < ApiController

  def index
    #binding.pry
    render json: Attendee.all
  end

  def show
    #binding.pry
    attendee = Attendee.find(params[:id])
    render json: attendee  , serializer: AttendeeSerializer  #notworking TODO
  end

  def update
    #binding.pry

    attendee = Attendee.find(params[:id])
    attendee.update_attributes(attendee_params)
    render json: attendee , serializer: AttendeeSerializer
  end

  def create
    #binding.pry
    attendee = Attendee.new(attendee_params)

    if attendee.save
      render json: attendee
    else
      render json: { errors: review.errors.full_messages.to_sentence }
    end
  end

  def destroy
    #binding.pry
    attendee = Attendee.find(params[:id])
    attendee.destroy
    render json: attendee
  end

  private

  def attendee_params
    
    x = params.permit(:firstName, :lastName, :email)
    y = {
      :first_name => x[:firstName],
      :last_name => x[:lastName],
      :email => x[:email]
    }
    
    #binding.pry
    return y
  end

end