---
description: How to create a new service or content page with the standard Outsight layout.
---

1. **Step 1: Content Extraction**
   - Extract content and translate it into professional Turkish business language.
   - Look for key metrics and expertise areas.

2. **Step 2: Component Creation**
   - Create `{PageName}.jsx` and `{PageName}.css` in `src/pages/`.
   - Use the designated Hero structure from `.agent/DESIGN_STANDARDS.md`:
     - `height: 70vh`, `min-height: 500px`.
     - Centered white text (H1: 4.5rem, P: 1.6rem).
     - No extra labels.

3. **Step 3: Styling**
   - Implement section padding at `3rem 0`.
   - Use `Public Sans` font via global variables.
   - Maintain the "Kearney-inspired" editorial style.

4. **Step 4: Integration**
   - Add the route to `App.jsx`.
   - Add the link to `Navbar.jsx` (under the correct mega-menu column).
   - Add the service to the `Services.jsx` listing array.
