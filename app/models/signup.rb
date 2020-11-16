class Signup < ApplicationRecord

  belongs_to :attendee
  belongs_to :meeting

  enum status: { no: -2, cancle: -1, abstain: 0, interested: 1, yes: 2}
  
  validates :attendee, presence: true
  validates :meeting, presence: true
  validates :status, presence: true

  validates :attendee, uniqueness: {scope: :meeting} 

end
