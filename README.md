# Chuks Kitchen - Nigerian Food Delivery App

A modern React-based food delivery application for authentic Nigerian cuisine. Users can browse delicious Nigerian dishes, customize their orders, and manage their cart seamlessly.

![Chuks Kitchen App]

## Features

### User Authentication
- Sign Up / Sign In pages with form validation
- Password visibility toggle
- Social login options (Google, Facebook)

### Food Browsing
- Popular food categories grid
- Chef's specials section with detailed descriptions
- Search functionality for finding dishes
- New menu additions banner

### Food Customization
- Click on any food item to open detailed view
- Choose protein options (Fried Chicken, Grilled Fish, Beef)
- Add optional sides (Plantain, Coleslaw, Pepper Sauce)
- Special instructions textarea for dietary requirements
- Real-time price calculation based on selections

### Shopping Cart
- Add items from main page or detailed view
- View cart with all selected items and customizations
- Adjust quantities with + / - buttons
- Remove items individually
- Persistent cart storage using localStorage
- Real-time total price calculation

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes
- Touch-friendly buttons and controls

## Technologies Used

- React.js - Frontend library
- Tailwind CSS - Styling and responsive design
- React Router - Navigation and routing
- Context API - State management for cart
- LocalStorage - Persist cart data
- Vite - Build tool and development server

## Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # Reusable components
│   └── FoodDetailOverlay.jsx
├── context/             # Context providers
│   └── CartContext.jsx
├── pages/               # Page components
│   ├── Onboarding.jsx
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   ├── MainPage.jsx
│   └── CartPage.jsx
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/masha-a-m/chuks-kitchen.git
   cd chuks-kitchen
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser
   ```
   http://localhost:5173
   ```

## Deployment Instructions

### Deploy on Netlify (Recommended)

1. Build the project
   ```bash
   npm run build
   ```
   This creates a `dist` folder with production files.

2. Deploy via Netlify CLI
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy
   
   # For production deployment
   netlify deploy --prod
   ```

3. Or deploy via Netlify Dashboard
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Deploy on Vercel

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```
   Follow the prompts to complete deployment.

3. Or via Vercel Dashboard
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click "Deploy"

### Deploy on GitHub Pages

1. Install gh-pages
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update package.json
   ```json
   {
     "homepage": "https://yourusername.github.io/chuks-kitchen",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy
   ```bash
   npm run deploy
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Chuks Kitchen - hello@chukskitchen.com

Project Link: [https://github.com/masha-a-m/chuks-kitchen](https://github.com/masha-a-m/chuks-kitchen)

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from Emoji Unicode
- Nigerian culinary inspiration

---

Made with ❤️ for Nigerian food lovers everywhere
```

Copy and paste this entire content into your `README.md` file. Make sure to replace:
- `yourusername` with your actual GitHub username
- Add any specific deployment URLs when available
- Update the contact email if needed