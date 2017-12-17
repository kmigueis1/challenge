class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    existingUser = User.find_by(user_name: params[:user][:user_name]);
    if (!existingUser && @user.save)
      login(@user)
      render :show
    else
      @message = "Username already exists"
      render :error
    end
  end


  def user_params
    params.require(:user).permit(:name, :user_name, :password)
  end

end
