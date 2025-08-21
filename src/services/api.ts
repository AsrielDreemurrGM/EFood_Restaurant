import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type CheckoutResponse = {
  orderId: string;
};

export type CheckoutPayload = {
  products: {
    id: number;
    price: number;
  }[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://e-food-api.vercel.app/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<HomeProducts[], void>({
      query: () => 'jsons/restaurants.json'
    }),
    purchase: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: 'api/checkout',
        method: 'POST',
        body
      })
    })
  })
});

export const { useGetRestaurantsQuery, usePurchaseMutation } = api;

export default api;
