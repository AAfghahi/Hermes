json.array! @workouts do |workout|
    json.partial! 'workout', workout:workout
end
