class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
    #this action is reached if the user is attempting to login. A username and password will be sent
    #to the API as data and accessible through params. Using active record, a user
    #with a password matching its password digest and username will be pulled from the database.
    #If a user with matching parameters does not exist in the database, @user will be nil,
    #and login will fail.
    if @user
      #if a user was found in the database with matching parameters (@user is not nil), it will be logged in.
      login(@user)
      render 'users/login'
    else
      @message = "Invalid username or password"
      render 'users/error'
      #again the error.html.erb view template under views/users/ is used to build the JSON response if the user
      #was not found in the database.
    end
  end

end
