Rails.application.routes.draw do
  root 'homes#index'

  get '/attendees', to: 'homes#index'
  get  '/attendees/:id', to: 'homes#index'
  
  get '/events/', to: 'homes#index'
  get '/scrapbooks/', to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :attendees, only: [:index, :show, :update, :create, :destroy]
    end
  end

end
