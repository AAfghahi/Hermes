class ChangeWorkoutAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :duration
    add_column :workouts, :duration, :integer
  end
end
