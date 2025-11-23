# 🛒 EShop - Complete E-Commerce Application

A modern, full-featured e-commerce web application built with Angular 18. This application provides a complete shopping experience with product browsing, cart management, admin panel, and user authentication.

## 🌐 Live Demo

**View the live application:** [https://abanoub-magdi.github.io/Complete_E-Shop/](https://abanoub-magdi.github.io/Complete_E-Shop/)

## ✨ Features

- 🛍️ **Product Catalog** - Browse products with category filtering
- 🔍 **Product Details** - View detailed information about each product
- 🛒 **Shopping Cart** - Add products to cart and manage items
- 👤 **User Authentication** - Login system with role-based access
- 🔐 **Admin Panel** - Manage products (add, delete, filter)
- 🎨 **Modern UI** - Built with Bootstrap 5 and Angular Material
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with lazy loading
- 🔄 **Auto Deployment** - CI/CD with GitHub Actions

## 🛠️ Technologies Used

- **Frontend Framework:** Angular 18.2.0
- **UI Libraries:** 
  - Bootstrap 5.3.3
  - Angular Material 18.2.12
- **Language:** TypeScript 5.5.2
- **State Management:** RxJS 7.8.0
- **API:** FakeStoreAPI (https://fakestoreapi.com/)
- **Deployment:** GitHub Pages with GitHub Actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (install globally: `npm install -g @angular/cli`)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abanoub-Magdi/Complete_E-Shop.git
   cd Complete_E-Shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development Server

Run the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:

```bash
# Development build
npm run build

# Production build (for GitHub Pages)
npm run build:prod
```

The build artifacts will be stored in the `dist/e-shop/browser/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/              # Admin panel components
│   ├── carts/              # Shopping cart module
│   ├── Interceptors/       # HTTP interceptors
│   ├── login/              # Login component
│   ├── products/           # Products module
│   │   ├── components/
│   │   │   ├── all-products/
│   │   │   └── products-details/
│   │   └── services/
│   └── shared/             # Shared components and services
│       ├── components/
│       │   ├── footer/
│       │   ├── header/
│       │   └── spinner/
│       └── services/
├── environments/           # Environment configuration
└── styles.scss             # Global styles
```

## 🔧 Configuration

### Environment Variables

The application uses environment files for configuration:

- **Development:** `src/environments/environment.ts`
- **Production:** `src/environments/environment.prod.ts`

Current API configuration:
```typescript
apiUrl: 'https://fakestoreapi.com/'
```

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Automatic Deployment

- The deployment workflow runs automatically on every push to the `main` branch
- The workflow builds the Angular app and deploys it to GitHub Pages
- A `404.html` file is automatically created to handle client-side routing

### Manual Deployment

1. Build for production:
   ```bash
   npm run build:prod
   ```

2. The built files are in `dist/e-shop/browser/`

3. Deploy to your hosting service

### Enable GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. Save the changes

## 🧪 Testing

Run unit tests:

```bash
npm test
# or
ng test
```

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production (GitHub Pages)
- `npm test` - Run unit tests
- `ng generate component component-name` - Generate a new component

## 🔐 Authentication & Authorization

- **Login:** Access the login page at `/login`
- **Admin Access:** Admin users can access the admin panel at `/admin`
- **Route Guards:** Admin routes are protected with `AdminGuard`

## 🛒 Features in Detail

### Product Management
- View all products
- Filter by category
- View product details
- Add products to cart

### Shopping Cart
- Add/remove items
- View cart total
- Submit cart to server

### Admin Panel
- Add new products
- Delete products
- Filter products by category
- Manage product inventory

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abanoub Magdi**

- GitHub: [@Abanoub-Magdi](https://github.com/Abanoub-Magdi)
- Repository: [Complete_E-Shop](https://github.com/Abanoub-Magdi/Complete_E-Shop)

## 🙏 Acknowledgments

- [FakeStoreAPI](https://fakestoreapi.com/) for providing the test API
- [Angular](https://angular.io/) team for the amazing framework
- [Bootstrap](https://getbootstrap.com/) for the UI components

---

⭐ If you like this project, please give it a star on GitHub!
