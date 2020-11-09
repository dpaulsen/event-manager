
class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :fullName

  def firstName
    object.first_name
  end

  def lastName
    object.last_name
  end

  def fullName
    return "#{object.first_name} #{object.last_name}"
  end

end
