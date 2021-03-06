class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:show]

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    def show
        @user = User.find(params[:id])
        render :show
    end


    private

    def user_params
        params.require(:user).permit(
            :username, 
            :email, 
            :password, 
            :birthday, 
            :first_name, 
            :last_name, 
            :gender, 
            :age, 
            :weight, 
            :height, 
            :location_lat, 
            :location_long)
    end

end