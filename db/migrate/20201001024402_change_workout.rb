class ChangeWorkout < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :distance, :integer
  end
end
