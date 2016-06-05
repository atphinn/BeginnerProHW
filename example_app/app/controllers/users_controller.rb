class UsersController < ApplicationController
  def create

 	@user = User.new(permit_user)
 	if @user.save
 		flash[:green] = "created"
 		redirect_to root_url
 	else
 		flash[:red] = "failed"
 		redirect_to new_user_path
  end
end


  def new
  	@user = User.new
  	
  end

  def index
  	@users = User.all
  end

  private

  def permit_user
  	params.require(:user).permit(:username,:email,:password)
end

end
