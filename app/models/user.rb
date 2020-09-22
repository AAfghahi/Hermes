# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  birthday        :datetime         not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  gender          :string           not null
#  age             :datetime         not null
#  weight          :integer          not null
#  height          :integer          not null
#  location_lat    :decimal(, )      not null
#  location_long   :decimal(, )      not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length: {minimum: 6}, allow_nil:true
    attr_reader :password
    
    before_validation :ensure_session_token

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

    def self.find_by_credentials(username, password)
        user= User.find_by(username: username)
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
