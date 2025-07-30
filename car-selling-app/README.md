# CarHub - Advanced Car Selling Web Application

A modern, full-stack car marketplace built with Next.js 14, TypeScript, Prisma, and Tailwind CSS. This application provides a comprehensive platform for buying and selling cars with advanced features and a beautiful user interface.

## 🚀 Features

### Core Features
- **User Authentication**: Secure sign-up/sign-in with NextAuth.js
- **Car Listings**: Browse cars with advanced search and filtering
- **Detailed Car Pages**: Comprehensive car information with image galleries
- **User Dashboard**: Manage your listings and profile
- **Messaging System**: Communication between buyers and sellers
- **Favorites**: Save cars for later viewing
- **Responsive Design**: Optimized for all devices

### Advanced Features
- **Advanced Search & Filters**: Filter by make, model, price, location, fuel type, etc.
- **Image Upload**: Multiple image support with Cloudinary integration
- **Booking System**: Schedule test drives and inspections
- **User Ratings & Reviews**: Build trust in the marketplace
- **Admin Panel**: Manage users, listings, and platform settings
- **Real-time Messaging**: Instant communication between users
- **Payment Integration**: Secure payment processing (planned)

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Framer Motion**: Smooth animations and transitions

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Prisma**: Modern database toolkit and ORM
- **SQLite**: Development database (easily switchable to PostgreSQL)
- **NextAuth.js**: Authentication library

### Additional Libraries
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **bcryptjs**: Password hashing
- **Cloudinary**: Image upload and management
- **Sharp**: Image processing

## 🏗️ Project Structure

```
car-selling-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── cars/              # Car listing pages
│   │   └── dashboard/         # User dashboard
│   ├── components/            # Reusable React components
│   ├── lib/                   # Utility functions and configurations
│   └── types/                 # TypeScript type definitions
├── prisma/                    # Database schema and migrations
├── public/                    # Static assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-selling-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.example` to `.env` and update the values:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"
   
   # NextAuth.js
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
   CLOUDINARY_API_KEY="your-cloudinary-api-key"
   CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📊 Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users**: User accounts with authentication
- **Cars**: Vehicle listings with detailed specifications
- **CarImages**: Multiple images per car listing
- **Messages**: Communication between buyers and sellers
- **Favorites**: User's saved car listings
- **Bookings**: Test drive and inspection appointments

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works perfectly on all devices
- **Advanced Search**: Multiple filter options with real-time results
- **Image Galleries**: Interactive car photo viewers
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Loading States**: Proper feedback during data loading
- **Error Handling**: User-friendly error messages

## 🔒 Security Features

- **Authentication**: Secure user authentication with NextAuth.js
- **Password Hashing**: bcrypt for secure password storage
- **Input Validation**: Zod schemas for data validation
- **CSRF Protection**: Built-in Next.js security features
- **SQL Injection Prevention**: Prisma ORM protection

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Database
- Development: SQLite (included)
- Production: PostgreSQL recommended
- Update `DATABASE_URL` in `.env` file

### Image Storage
- Development: Local storage
- Production: Cloudinary recommended
- Configure Cloudinary credentials in `.env`

### Authentication
- Configure NextAuth.js providers
- Set up OAuth providers (Google, GitHub, etc.)
- Update authentication callbacks as needed

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/signin` - User sign-in
- `POST /api/auth/signout` - User sign-out

### Cars
- `GET /api/cars` - Get all cars with filters
- `POST /api/cars` - Create new car listing
- `GET /api/cars/[id]` - Get specific car
- `PUT /api/cars/[id]` - Update car listing
- `DELETE /api/cars/[id]` - Delete car listing

### Messages
- `GET /api/messages` - Get user messages
- `POST /api/messages` - Send message
- `PUT /api/messages/[id]` - Mark message as read

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors who made this project possible

## 📞 Support

If you have any questions or need help, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

**Built with ❤️ using modern web technologies**
