class Api::WorkoutsController < ApplicationController
    def index 
        @workouts = current_user.workouts
        render :index
    end

    def create
        @workout = Workout.new(workout_params)
        @workout.user_id = current_user.id 

        if @workout.save
            render :show
        else
            render json: @workout.errors.full_message, status:422
        end
    end

    def update
        @workout = Workout.find(params[:id])
        user = @workout.user_id

        if user == current_user.id && @workout.update(workout_params)
            render :show
        else
            render json: @workout.errors.full_messages, status:422
        end
    end

    def show 
        @workout = Workout.find(params[:id])
        render :show
    end

    def destroy 
        @workout = Workout.find(params[:id])
        @workout.destroy 
        render :index 
    end

    private 
    def workout_params
        params.require(:workout).permit(
            :route_id,
            :user_id, 
            :duration, 
            :elevation, 
            :activity_type, 
            :description
        )
    end
end