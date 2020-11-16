class Api::V1::MeetingsController < ApiController

  def index

    unless (params.key?(:attendee_id))
      render json: Meeting.all
    else

      sql = 'SELECT meetings.id, meetings.name, signups.id AS "signupId", signups.status' +
            ' FROM meetings LEFT OUTER JOIN signups ON meetings.id = signups.meeting_id ' +
            "AND signups.attendee_id = #{params[:attendee_id]}"
      meeting_array = ActiveRecord::Base.connection.execute(sql)

      render json: meeting_array
    end
  end

  def show
    meeting = Meeting.find(params[:id])
    render json: meeting
  end

end
