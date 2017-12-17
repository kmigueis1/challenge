class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user || User.find_by(session_token: session[:session_token])
    #rails makes the session token stored in the browsers cookies available. The session token is
    #generated in the user model and will determine the current user.
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
    #user that was logged in is stored in an instance variable here that will be accessible elsewhere through the
    #current_user helper method.
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
