class Api::V1::MeetingsController < ApiController

  def index
    render json: Meeting.all
  end

  def show
    meeting = Meeting.find(params[:id])
    render json: meeting
  end

end
