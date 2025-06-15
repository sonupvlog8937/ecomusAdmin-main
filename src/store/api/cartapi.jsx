import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://mobile-backend-8rzi.onrender.com/api/" }),
  endpoints: (builder) => ({
    getAllCartItem: builder.query({
      query: () => ({
        url:'cart',
        method:'GET'
      })
    }),
    deleteCart: builder.mutation({
        query: (id) => ({
          url: `cart/${id}`,
          method:'DELETE'
        })
      }),
  }),
})

export const { useGetAllCartItemQuery,useDeleteCartMutation } = cartApi