import React from "react"
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MultiCards from "@/components/MultiCards/MultiCards";

const places = [
  {
      id: 1,
      title: "Appartement 1",
      description: "4 personnes · 2 chambres · 2 lits · 1 salle de bain",
      image: "https://imgs.search.brave.com/U8MU2cDSYW4Uj0tl5ZPTvfY7pUMgMFY_8gewud0z4E4/rs:fit:1200:810:1/g:ce/aHR0cHM6Ly93d3cu/cmVnZW50LWhvbGlk/YXlzLmNvLnVrL3Vw/bG9hZC1maWxlcy9w/cm9kdWN0LWhvdGVs/cy1nYWxsZXJ5L2xl/LW1lcmlkaWVuLWJy/aXN0b2wtaG90ZWwt/cG9sYW5kXzIuanBn",
      rating: 4.5,
      price: 143,
      location: "Paris, France",
      type: "Appartement",
  },
  {
    id: 2,
    title: "Villa La Loca",
    description: "8 personnes · 6 chambres · 8 lits · 2 salle de bain",
    image: "https://imgs.search.brave.com/36gVizz7mf8c7J0IC-VvPsk9yM0bMR6KuEgI34Kh1Nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTdl/NDJkZWFmZTQyMmIz/ZTI5YjdlNzkwL21h/c3Rlci9wYXNzL0pX/X0xvc0NhYm9zXzIw/MTVfTWFpbkV4dGVy/aW9yLmpwZw",
    rating: 4.5,
    price: 248,
    location: "Marseille, France",
    type: "Villa",
  },
  {
    id: 2,
    title: "Villa La Loca",
    description: "8 personnes · 6 chambres · 8 lits · 2 salle de bain",
    image: "https://imgs.search.brave.com/36gVizz7mf8c7J0IC-VvPsk9yM0bMR6KuEgI34Kh1Nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTdl/NDJkZWFmZTQyMmIz/ZTI5YjdlNzkwL21h/c3Rlci9wYXNzL0pX/X0xvc0NhYm9zXzIw/MTVfTWFpbkV4dGVy/aW9yLmpwZw",
    rating: 4.5,
    price: 248,
    location: "Marseille, France",
    type: "Villa",
  },
  {
    id: 2,
    title: "Villa La Loca",
    description: "8 personnes · 6 chambres · 8 lits · 2 salle de bain",
    image: "https://imgs.search.brave.com/36gVizz7mf8c7J0IC-VvPsk9yM0bMR6KuEgI34Kh1Nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTdl/NDJkZWFmZTQyMmIz/ZTI5YjdlNzkwL21h/c3Rlci9wYXNzL0pX/X0xvc0NhYm9zXzIw/MTVfTWFpbkV4dGVy/aW9yLmpwZw",
    rating: 4.5,
    price: 248,
    location: "Marseille, France",
    type: "Villa",
  },
  {
    id: 2,
    title: "Villa La Loca",
    description: "8 personnes · 6 chambres · 8 lits · 2 salle de bain",
    image: "https://imgs.search.brave.com/36gVizz7mf8c7J0IC-VvPsk9yM0bMR6KuEgI34Kh1Nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTdl/NDJkZWFmZTQyMmIz/ZTI5YjdlNzkwL21h/c3Rlci9wYXNzL0pX/X0xvc0NhYm9zXzIw/MTVfTWFpbkV4dGVy/aW9yLmpwZw",
    rating: 4.5,
    price: 248,
    location: "Marseille, France",
    type: "Villa",
  },
  {
    id: 2,
    title: "Villa La Loca",
    description: "8 personnes · 6 chambres · 8 lits · 2 salle de bain",
    image: "https://imgs.search.brave.com/36gVizz7mf8c7J0IC-VvPsk9yM0bMR6KuEgI34Kh1Nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTdl/NDJkZWFmZTQyMmIz/ZTI5YjdlNzkwL21h/c3Rlci9wYXNzL0pX/X0xvc0NhYm9zXzIw/MTVfTWFpbkV4dGVy/aW9yLmpwZw",
    rating: 4.5,
    price: 248,
    location: "Marseille, France",
    type: "Villa",
  },
]

const HomePage = () => {
  return (
    <div>
      <MultiCards places={places} />
    </div>
  )
}

export default HomePage