class Api::RoutesController < ApplicationController
    before_action :ensure_logged_in

    def index
        @routes = current_user.routes 
        render :index 
    end

    def create
      
        @route = Route.new(route_params)
        
        @route.user_id = current_user.id

        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status:422
        end
    end


    def update 
        @route = Route.find(params[:id])
        user = User.find_by(params[:user_id])
        debugger
        if user == current_user && @route.update(route_params)
            render :index
        else
            render json: @route.errors.full_messages, status: 422
        end
    end

    def show
        @route = Route.find(params[:id])
        render :show 
    end

    def destroy
        @route = Route.find(params[:id])
        @route.destroy
        render :index
    end

    private

    def route_params
        params.require(:route).permit(
            :origin_lat,
            :origin_lng,
            :destination_lat,
            :destination_lng,
            :route_name, 
            :activity_type,
            :description, 
            :distance, 
            :user_id, 
            :elevation,
            :estimated_time,
            :encoded_polyline, 
            :image_url
        )
    end

end