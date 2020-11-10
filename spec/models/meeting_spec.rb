require 'rails_helper'

RSpec.describe Meeting, type: :model do

  it {should have_valid(:name).when("New Years Eve - Ball 1999") }
  it {should have_valid(:name).when("a")}
  it {should_not have_valid(:name).when(nil) }
  it {should_not have_valid(:name).when("")}

end
