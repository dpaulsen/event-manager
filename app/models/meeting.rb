class Meeting < ApplicationRecord
  
  has_many :signups
  has_many :attendees, through: :signups

  validates :name, presence: true

end