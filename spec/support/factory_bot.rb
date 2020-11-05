require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:username) {|n| "user#{n}name"}
    displayname{'my name'}
    password { 'password' }
    password_confirmation { 'password' }
  end

end
