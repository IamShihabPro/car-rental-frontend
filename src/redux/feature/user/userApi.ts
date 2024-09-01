import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUsers: builder.query({
      query: () =>({
          method: 'GET',
          url: 'auth'
      }),
      providesTags: ['users']
  }),
    getSingleUser: builder.query({
      query: (id) => ({
          method: 'GET',
          url: `auth/${id}` 
      }),
      providesTags: ['users'],
  }),
    getSingleUserByEmail: builder.query({
      query: (email) => ({
          method: 'GET',
          url: `auth/user/${email}` 
      }),
      providesTags: ['users'],
  }),

  updateUser: builder.mutation({
    query: ({ id, ...data }) => ({
      method: 'PUT',
      url: `auth/user/${id}`,
      body: data,
    }),
    invalidatesTags: ['users'],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetAllUsersQuery, useGetSingleUserQuery, useGetSingleUserByEmailQuery, useUpdateUserMutation } = userApi;