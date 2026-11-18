import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
const siteUrl = "https://www.hempongroup.co.ke";
export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {url:siteUrl,changeFrequency:"monthly",priority:1},
  {url:`${siteUrl}/services`,changeFrequency:"monthly",priority:.85},
  ...services.map((s)=>({url:`${siteUrl}/services/${s.slug}`,changeFrequency:"monthly" as const,priority:.8})),
  {url:`${siteUrl}/products`,changeFrequency:"weekly",priority:.9},
  ...products.map((p)=>({url:`${siteUrl}/products/${p.slug}`,changeFrequency:"monthly" as const,priority:.8})),
  {url:`${siteUrl}/privacy-policy`,changeFrequency:"yearly",priority:.2},
  {url:`${siteUrl}/terms`,changeFrequency:"yearly",priority:.2},
 ];
}
