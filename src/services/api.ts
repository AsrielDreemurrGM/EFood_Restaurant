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
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<HomeProducts[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
});

export const { useGetRestaurantsQuery, usePurchaseMutation } = api;

export default api;
