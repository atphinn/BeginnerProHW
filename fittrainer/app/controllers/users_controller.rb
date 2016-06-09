class UsersController < ApplicationController
  def profile
  end

  def payment
  end

  def stats
  end

  private

		def permit_event
			params.require(:event).permit(:title, :description, :price, :time, :cover, :confirm)
		end
end
