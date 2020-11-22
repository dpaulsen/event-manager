class Api::V1::UtilitiesController < ApiController

  def reset
    #binding.pry
    eval File.read("./db/seeds.rb")
    render json: {message: "Database reset."}

  end


end