require 'rails_helper'

RSpec.describe Attendee, type: :model do

  it {should have_valid(:first_name).when("Joe") }
  it {should have_valid(:last_name).when("Doe") }

end
