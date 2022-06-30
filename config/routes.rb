Rails.application.routes.draw do



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



  root "bots#index"



  post "/", to: "bots#index"

end

