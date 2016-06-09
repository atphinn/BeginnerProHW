module ApplicationHelper

	def findPhoto
		url = Gravatar.new(current_user.email).image_url
		return url
	end
end
