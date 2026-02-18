# TODO List for Real Estate Broker Website

## 1. Environment Setup
- [x] Create .env.example with required variables
- [x] Update package.json scripts for Prisma (migrate, generate, seed)
- [x] Set up Prisma client in lib/prisma.ts

## 2. Authentication (NextAuth)
- [x] Configure NextAuth with Prisma adapter, credentials provider
- [x] Create auth pages (/admin login)
- [x] Middleware for protecting admin routes

## 3. Database and Seed
- [ ] Run Prisma migrate to create DB tables
- [ ] Create seed script for 8 example properties

## 4. UI Components
- [x] Create reusable components: Button, Card, Modal, Toast, Pagination, Skeleton in src/components/ui/
- [x] Integrate Lucide React icons and Framer Motion animations

## 5. Public Pages
- [x] / (index): Hero, About, Services, Featured Properties, Testimonials, Areas, Contact, Footer
- [x] /acheter: Buy form with validation, DB save, email
- [x] /vendre: Sell form similar
- [x] /proprietes: Property list with filters, pagination, sorting
- [x] /proprietes/[slug]: Property details with gallery, JSON-LD

## 6. Admin Dashboard
- [ ] /admin/proprietes: Table with CRUD (add/edit/delete properties, upload images)
- [ ] /admin/leads: View and mark leads as handled

## 7. API Routes
- [x] /api/auth/[...nextauth]
- [x] /api/properties: GET/POST
- [ ] /api/properties/[id]: GET/PUT/DELETE
- [x] /api/leads: POST/GET/PUT
- [ ] /api/upload for images

## 8. SEO and Metadata
- [ ] Update layout.tsx with global metadata
- [ ] Add metadata to each page
- [ ] Create sitemap.xml, robots.txt
- [ ] Add JSON-LD schemas

## 9. Forms and Validation
- [ ] Implement react-hook-form + zod for all forms
- [ ] Email sending with Nodemailer

## 10. Styling and UX
- [ ] Tailwind responsive design, premium colors
- [ ] Animations with Framer Motion
- [ ] Accessibility features

## Followup
- [ ] Run Prisma migrate and seed
- [ ] Test locally
- [ ] Ensure responsive and fast loading
