class Api::V1::AttendeesController < ApiController

  def index
    binding.pry
    render json: Attendee.all
  end

  def show
    binding.pry

    render json: Attendee.find(params[:id])
  end

end