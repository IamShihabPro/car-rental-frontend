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
        cancelBookings: builder.mutation({
            query: (id) =>({
                method: 'PUT',
                url: `bookings/cancel/${id}`
            }),
            invalidatesTags: ['bookings'],
        }),
        updateBooking: builder.mutation({
            query: ({ id, ...data }) => ({
              method: 'PUT',
              url: `bookings/${id}`,
              body: data,
            }),
            invalidatesTags: ['bookings'],
        }),
    }) 
})

export const {useAddBookingsMutation, useGetBookingsQuery, useGetMyBookingsQuery, useCancelBookingsMutation, useUpdateBookingMutation} = bookingApi
export default bookingApi