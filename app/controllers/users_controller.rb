class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    existingUser = User.find_by(user_name: params[:user][:user_name]);
    #this create method is reached when the signup button tries to post to the API.
    #I create an active record user object with the user parameters that were received.
    #To see if it is a valid signup I have to check the database if there is an existing user
    #with the same username. If the existing user i retreive is nil, the user will be successfully logged in
    #as long as it passes model level (and db level) validations. Model validations can be found in the
    #user.rb model under the models folder.

    if (!existingUser && @user.save)
      login(@user)
      #login method is inherited from application controller
      render :show
      #the show template will be rendered if successful (show.html.erb under views/users/) and JBuilder is used
      #to build the appropriate JSON response object that will be sent to the front end.
    else
      @message = "Username already exists"
      render :error
      # for convenience purposes and to fit the requirements of the excercise, a errors.html.erb file under views/users/
      #has been created to make a distinction in the type of JSON response that is sent back. Rails does not like to send
      # a fictional status level of -1 from the controller.
    end
  end


  def user_params
    params.require(:user).permit(:name, :user_name, :password)
  end
  #I am using strong parameters to pick and choose the parameters my API accepts

end
