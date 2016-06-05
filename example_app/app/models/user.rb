class User < ActiveRecord::Base

	validates :password, presence: true, length: {in: 5..140}
	validates :email, presence: true, uniqueness: {case_sensitive:false}
	validates :User, presence: true, uniqueness: {case_sensitive:false}

	def downcase_fields
		self.email.downcase!
		self.username.downcase!
	end
end

