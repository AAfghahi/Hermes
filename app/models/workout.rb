# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  route_id      :integer
#  user_id       :integer          not null
#  elevation     :integer
#  activity_type :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  distance      :integer
#  duration      :integer
#  workout_name  :string
#
class Workout < ApplicationRecord
    validates :user_id, :duration, :elevation, :activity_type, :description, :distance, :workout_name, presence:true

    belongs_to :user 
  
end
