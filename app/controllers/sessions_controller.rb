class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
    if @user
      login(@user)
      render 'users/show'
    else
      render json: ["The username/password combination is incorrect"], status: 401
    end
  end

  def destroy
    if !current_user
      render json: ["not logged in"], status: 404
    else
      logout
      render json: {}
    end
  end
end
