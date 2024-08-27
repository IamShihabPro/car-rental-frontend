import { baseApi } from "@/redux/api/baseApi";

const carsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () =>({
                method: 'GET',
                url: 'cars'
            }),
            providesTags: ['cars']
        })
    })
})

export const {useGetCarsQuery} = carsApi
export default carsApi