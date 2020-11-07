
class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :fullName

  def firstName
    first_name
  end

  def lastName
    last_name
  end

  def fullName
    return "#{first_name} #{last_name}"
  end

end
