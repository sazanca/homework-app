Rails.application.routes.draw do
  devise_for :users
  root to: 'posts#index'
  resource :users, only:[:edit, :update]
end
