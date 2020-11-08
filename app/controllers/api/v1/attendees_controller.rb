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
    binding.pry
  end

  def destroy
    binding.pry
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