'use server';

import API from "@/static/API";
import { revalidateTag } from "next/cache";

import type { Product } from "@/types";

export const addProduct = async (event: FormData) => {
  const product = event.get("product")?.toString();
  const price = event.get("price")?.toString();

  if (!product || !price) return;
  const newProduct: Product = { product, price };

  try {
    await postNewProduct(newProduct);
    refreshProductsCache();
  } catch (error) {
    console.error("상품 추가 오류:", error);
  }
};


const postNewProduct = async (product: Product) => {
  await fetch(API.PRODUCT, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const refreshProductsCache = () => {
  revalidateTag("products");
};