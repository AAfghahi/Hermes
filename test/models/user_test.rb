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
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
