class User < ApplicationRecord

  enum role: {deactivated: 0, member: 1, organizer: 2, admin: 3, superuser: 9999}
  after_initialize :set_default_role, :if => :new_record?

  def set_default_role
    self.role ||= :member
  end


  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
