# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  route_id      :integer
#  user_id       :integer          not null
#  duration      :datetime         not null
#  elevation     :integer
#  activity_type :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Workout < ApplicationRecord
    validates :user_id, :duration, :elevation, :activity_type, :description, presence:true

    belongs_to :user 
    belongs_to :routes
end
