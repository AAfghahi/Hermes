

export const fetchWorkouts = () =>{
    return $.ajax({
        url:'/api/workouts'
    });
};


export const fetchWorkout = workoutId =>{
    return $.ajax({
        url:`/api/workouts/${workoutId}`
    });
};

export const createWorkout = workout => {
    return $.ajax({
        url:'/api/workouts',
        method: 'POST',
        data:{workout}
    });
};

export const updateWorkout = workout =>{
    return $.ajax({
        url:`/api/workouts/${workout.id}`,
        method:'PATCH',
        data:{workout}
    });
};

export const deleteWorkout = (workoutId)=>{
    return $.ajax({
        url:`/api/workouts/${workoutId}`,
        method:'DELETE'
    });
};