require 'rails_helper'

RSpec.describe User, type: :model do

  it {should have_valid(:email).when("user@fake.com")}

  describe "#deactivated?" do
    it "is not an deactivated if the role is not deactivated" do
      user = FactoryBot.create(:user, role: :member)
      expect(user.deactivated?).to eq(false)
    end


    it "is an deactivated if the role is deactivated" do
      user = FactoryBot.create(:user, role: :deactivated)
      expect(user.deactivated?).to eq(true)
    end
  end

  describe "#member?" do
    it "is not a member if the role is not memeber" do
      user = FactoryBot.create(:user, role: :deactivated)
      expect(user.member?).to eq(false)
    end


    it "is a member if the role is memeber" do
      user = FactoryBot.create(:user, role: :member)
      expect(user.member?).to eq(true)
    end
  end

  describe "#organizer?" do
    it "is not an organizer if the role is not organizer" do
      user = FactoryBot.create(:user, role: :member)
      expect(user.organizer?).to eq(false)
    end


    it "is an organizer if the role is organizer" do
      user = FactoryBot.create(:user, role: :organizer)
      expect(user.organizer?).to eq(true)
    end
  end

  describe "#admin?" do
    it "is not an admin if the role is not admin" do
      user = FactoryBot.create(:user, role: :member)
      expect(user.admin?).to eq(false)
    end

    it "is an admin if the role is admin" do
      user = FactoryBot.create(:user, role: :admin)
      expect(user.admin?).to eq(true)
    end
  end

  describe "#superuser?" do
    it "is not a superuser if the role is not superuser" do
      user = FactoryBot.create(:user, role: :member)
      expect(user.superuser?).to eq(false)
    end

    it "is a superuser if the role is superuser" do
      user = FactoryBot.create(:user, role: :superuser)
      expect(user.superuser?).to eq(true)
    end
  end

  pending "Update models to do functions for multiple levels? "

end
