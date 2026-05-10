const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

export interface Service { id: number; title: string; slug: string; description: string; icon: string; image?: string; status: string; }
export interface Project { id: number; title: string; slug: string; category: string; description: string; image: string; client: string; year: number; status: string; }
export interface CaseStudy { id: number; title: string; slug: string; summary: string; image: string; challenge: string; solution: string; results: string; status: string; }
export interface Blog { id: number; title: string; slug: string; excerpt: string; content: string; image: string; author: string; status: string; created_at?: string; }
export interface ContactPayload { name: string; email: string; phone?: string; company?: string; message: string; }

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", Accept: "application/json", ...(init?.headers ?? {}) },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`);
  const json = await res.json();
  return (json.data ?? json) as T;
}

export const getServices = () => api<Service[]>("/services");
export const getProjects = () => api<Project[]>("/projects");
export const getCaseStudies = () => api<CaseStudy[]>("/case-studies");
export const getBlogs = () => api<Blog[]>("/blogs");
export const submitContact = (payload: ContactPayload) =>
  api<{ ok: boolean }>("/contact", { method: "POST", body: JSON.stringify(payload), cache: "no-store" });
