class Micropost < ActiveRecord::Base
	validates :message, presence: true, length: { in: 3..140}
	validates :email, presence: true
end
