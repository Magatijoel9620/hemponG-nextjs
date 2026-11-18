import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
import { caseStudies } from "@/lib/case-studies";
import { industries } from "@/lib/industries";
const siteUrl = "https://www.hempongroup.co.ke";
export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {url:siteUrl,changeFrequency:"monthly",priority:1},
  {url:`${siteUrl}/services`,changeFrequency:"monthly",priority:.85},
  ...services.map((s)=>({url:`${siteUrl}/services/${s.slug}`,changeFrequency:"monthly" as const,priority:.8})),
  {url:`${siteUrl}/products`,changeFrequency:"weekly",priority:.9},
  {url:`${siteUrl}/case-studies`,changeFrequency:"monthly",priority:.85},
  ...caseStudies.map((item)=>({url:`${siteUrl}/case-studies/${item.slug}`,changeFrequency:"monthly" as const,priority:.75})),
  {url:`${siteUrl}/industries`,changeFrequency:"monthly",priority:.8},
  ...industries.map((item)=>({url:`${siteUrl}/industries/${item.slug}`,changeFrequency:"monthly" as const,priority:.75})),
  {url:`${siteUrl}/insights`,changeFrequency:"weekly",priority:.8},
  ...products.map((p)=>({url:`${siteUrl}/products/${p.slug}`,changeFrequency:"monthly" as const,priority:.8})),
  {url:`${siteUrl}/privacy-policy`,changeFrequency:"yearly",priority:.2},
  {url:`${siteUrl}/terms`,changeFrequency:"yearly",priority:.2},
 ];
}
