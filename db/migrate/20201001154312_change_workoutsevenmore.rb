class ChangeWorkoutsevenmore < ActiveRecord::Migration[5.2]
  def change
    change_column :workouts, :workout_name, :string, :null=> false
  end
end
