import { baseApi } from "@/redux/api/baseApi";

const carsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () =>({
                method: 'GET',
                url: 'cars'
            }),
            providesTags: ['cars']
        }),
        addCars: builder.mutation({
            query: (data) =>({
                method: 'POST',
                url:'cars',
                body: data
            }),
            invalidatesTags: ['cars'],
        }),
        getSingleCar: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `cars/${id}` 
            }),
            providesTags: ['cars'],
        }),
        deleteCar: builder.mutation({
            query: (id) => ({
              url: `cars/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['cars'],
        }),
        updateCar: builder.mutation({
            query: ({ id, ...data }) => ({
              method: 'PUT',
              url: `cars/${id}`,
              body: data,
            }),
            invalidatesTags: ['cars'],
        }),
        returnCar: builder.mutation({
            query: (data) => ({
              method: 'PUT',
              url: 'cars/return',
              body: data
            }),
            invalidatesTags: ['cars'],
        }),
      
    })
})

export const {useGetCarsQuery, useAddCarsMutation, useGetSingleCarQuery, useDeleteCarMutation, useUpdateCarMutation, useReturnCarMutation} = carsApi
export default carsApi