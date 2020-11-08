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
    binding.pry
  end

  def create
    binding.pry
  end

  def destroy
    binding.pry
  end

end