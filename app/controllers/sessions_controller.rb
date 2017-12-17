class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
    if @user
      login(@user)
      render 'users/login'
    else
      @message = "Invalid username or password"
      render 'users/error'
    end
  end

end
