module ApplicationHelper

	def findPhoto
		url = Gravatar.new("atphinn@gmail.com").image_url
		return url
	end
end
