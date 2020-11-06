class Api::V1::AttendeesController < ApiController

  def index
    render json: Attendee.all
  end

end