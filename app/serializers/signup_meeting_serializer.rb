class SignupMeetingSerializer < ActiveModel::Serializer
  attributes :id, :status, :meetingName

  def meetingName
    return object.meeting.name
  end

end