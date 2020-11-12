class Attendee  < ApplicationRecord

  has_many :signups
  has_many :meetings, through: :signups

  validates :first_name, presence: true
  validates :last_name, presence: true

end
