Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  resources :users, only: [:create, :show]
  resource :session, only: [:create, :destroy]

  #I am using restful routes for the backend API
end
