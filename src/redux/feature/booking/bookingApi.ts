import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBookings: builder.mutation({
            query: (data) =>({
                method: 'POST',
                url:'bookings',
                body: data
            }),
            invalidatesTags: ['bookings'],
        }),
        getBookings: builder.query({
            query: () =>({
                method: 'GET',
                url: 'bookings'
            }),
            providesTags: ['bookings']
        }),
        getMyBookings: builder.query({
            query: () =>({
                method: 'GET',
                url: 'bookings/my-bookings'
            }),
            providesTags: ['bookings']
        }),
    }) 
})

export const {useAddBookingsMutation, useGetBookingsQuery, useGetMyBookingsQuery} = bookingApi
export default bookingApi