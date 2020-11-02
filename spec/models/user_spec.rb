require 'rails_helper'

RSpec.describe User, type: :model do

  it {should have_valid(:email).when("user@fake.com")}

  pending "add some user roles"

  pending "add some examples to (or delete) #{__FILE__}"
end
