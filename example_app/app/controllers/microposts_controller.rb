class MicropostsController < ApplicationController

	def new
		@micropost = Micropost.new
	end

	def edit
		@micropost = Micropost.find(params[:id])
	end
	def update
		@micropost = Micropost.find(params[:id])
		if @micropost.update_attributes(permit_post)
			flash[:green] = "Edited !"
			redirect_to micropost_path(permit_post)
			else
				flash[:red] = @micropost.errors.full_messages[0]
				redirect_to edit_micropost_path(@micropost)
			end
	end

	def create
		
		@micropost = Micropost.new(permit_post)
		if @micropost.save
		redirect_to micropost_path(@micropost)
		flash[:green] = "wining"

		else
			flash[:red] = @micropost.errors.full_messages[0]
			redirect_to new_micropost_path
		end
	end

	def show
		@micropost = Micropost.find(params[:id])
	end

	def destroy
		@micropost = Micropost.find(params[:id])
		@micropost.delete
		flash[:red] = "post Deleted"
		redirect_to microposts_path
	end

	def index
		@microposts = Micropost.all
	end
	# We need code to only accept certin data
	private

	def permit_post
		params.require(:micropost).permit(:email,:message)
	end
		
	
end
