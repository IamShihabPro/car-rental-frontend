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
        })
    })
})

export const {useGetCarsQuery, useAddCarsMutation} = carsApi
export default carsApi