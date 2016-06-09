module ApplicationHelper

	def findPhoto
		url = Gravatar.new(current_user.email).image_url
		return url
	end

	def findLargePhoto
		url = Gravatar.new(current_user.email).image_url
		url = url + "?s=220"
		return url
	end
end
