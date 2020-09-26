# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  birthday        :datetime
#  session_token   :string           not null
#  first_name      :string
#  last_name       :string
#  gender          :string
#  weight          :integer
#  height          :integer
#  location_lat    :decimal(, )
#  location_long   :decimal(, )
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer
#
class User < ApplicationRecord
    validates :email, :session_token, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length: {minimum: 6}, allow_nil:true
    attr_reader :password
    
    before_validation :ensure_session_token

    has_many :routes

    def self.generate_session_token
        SecureRandom::urlsafe_base64()
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user= User.find_by(email: email)
        if user && user.is_password?(password) 
            return user 
        else
            return nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
