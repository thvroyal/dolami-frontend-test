"use server";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Product } from "@/types/product";

type SearchParams = {
  search?: string;
  category?: string;
};

type SelectedCategory = typeof categories[0] | (typeof categories[0]['children'][0] & { 
  parent: typeof categories[0] 
});

export async function getSelectedCategory(categoryId?: string) {
  if (!categoryId) return null;
  
  return categories.reduce((found, parent) => {
    if (found) return found;
    if (parent.id === categoryId) return parent;
    const childCategory = parent.children.find(child => child.id === categoryId);
    return childCategory ? { ...childCategory, parent } : null;
  }, null as null | SelectedCategory);
}

export async function queryProducts(searchParams: SearchParams) {
  const selectedCategory = await getSelectedCategory(searchParams.category);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = !searchParams.search || 
      product.name.toLowerCase().includes(searchParams.search.toLowerCase());
    
    const matchesCategory = !selectedCategory || (
      'children' in selectedCategory
        ? product.categories[0] === selectedCategory.name
        : product.categories[1] === selectedCategory.name
    );

    return matchesSearch && matchesCategory;
  });

  return {
    products: filteredProducts,
    selectedCategory
  };
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((product) => product.id === id);
}
