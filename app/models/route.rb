# == Schema Information
#
# Table name: routes
#
#  id               :bigint           not null, primary key
#  origin_lat       :float            not null
#  origin_lng       :float            not null
#  destination_lat  :float            not null
#  destination_lng  :float            not null
#  route_name       :string           not null
#  activity_type    :string           not null
#  description      :text             not null
#  distance         :float            not null
#  user_id          :integer          not null
#  elevation        :integer          not null
#  estimated_time   :float            not null
#  encoded_polyline :string           not null
#  image_url        :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Route < ApplicationRecord
    validates :origin_lat, :origin_lng, :destination_lat, presence:true
    validates :destination_lng, :route_name, :activity_type, :description, :distance, :user_id, :elevation, :image_url, :encoded_polyline, presence:true
    
    belongs_to :user
  
    

end
