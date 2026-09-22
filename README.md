# वारी सह्याद्रीची — Trekking Website Backend

## Included
- Node.js backend using only Node built-in modules (no npm dependency required)
- Booking API: `POST /api/bookings`
- Trek API: `GET /api/treks`
- Admin login: `POST /api/admin/login`
- Admin booking list and status updates
- Trek management API
- Admin dashboard: `/admin`
- Frontend booking form connected to backend
- Current package price updated to **₹1399** for Harishchandragad and Ratangad

## Run locally
1. Install Node.js 18+.
2. Open this folder in terminal.
3. Run `node server.js` or `npm start`.
4. Open `http://localhost:3000`.
5. Admin panel: `http://localhost:3000/admin`

Default local admin credentials:
- Username: `admin`
- Password: `admin123`

For real hosting, change these using environment variables:
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `PORT`

## Images
The current HTML expects an `images/` folder containing the existing logo and Sahyadri images. Put that folder inside `public/` so paths such as `images/logo.jpeg` work.

## Data
Local booking/trek data is stored in `data/db.json`. For production with many bookings, this can later be moved to MySQL/PostgreSQL without changing the public-facing booking flow.
