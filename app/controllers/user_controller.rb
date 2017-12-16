class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ['Invalid inputs'], status: 422
    end
  end


  def user_params
    params.require(:user).permit(:name, :user_name, :password)
  end

end
