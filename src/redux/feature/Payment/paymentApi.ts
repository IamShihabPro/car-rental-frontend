import { baseApi } from "@/redux/api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cretePayment: builder.mutation({
        query: (data) => ({
          method: "POST",
          url: '/payment',
          body: data,
        }),
        invalidatesTags: ['payment'],
      }),

  }),
});

export const { useCretePaymentMutation } = paymentApi;