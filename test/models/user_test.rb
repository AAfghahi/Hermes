<<<<<<< HEAD
=======
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
#  location_lat    :float
#  location_long   :float
#  age             :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
>>>>>>> master
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
