# React Password Generator

A modern, user-friendly password generator built with React and Material-UI. This project demonstrates the implementation of secure password generation with customizable options and a clean, responsive user interface.

# Check the Demo

[Password Generator](https://annawu23.github.io/password-generator/)

## 🚀 Features

- Generate strong, secure passwords with customizable options
- Copy password to clipboard with one click
- Adjustable password length
- Toggle options for:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Real-time password strength indicator
- Responsive design for all devices
- Modern Material-UI components

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **UI Framework**: Material-UI (MUI) 7
- **Styling**:
  - SASS/SCSS
  - Emotion (CSS-in-JS)
- **Development Tools**:
  - ESLint for code quality
  - TypeScript for type safety
  - React Hooks for state management

## 💡 Key Learning Points

1. **React Hooks Implementation**

   - useState for managing component state
   - useEffect for handling side effects
   - Custom hooks for reusable logic

2. **Modern React Practices**

   - Functional components
   - Component composition
   - Props management
   - Event handling

3. **UI/UX Design**

   - Material Design principles
   - Responsive design implementation
   - User feedback mechanisms
   - Accessibility considerations

4. **Security Best Practices**
   - Secure random number generation
   - Password strength evaluation
   - Safe clipboard operations

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components
├── utils/         # Helper functions and utilities
├── App.jsx        # Main application component
├── main.jsx       # Application entry point
└── style.scss     # Global styles
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Security Features

- Cryptographically secure random number generation
- Configurable password complexity
- No password storage or transmission
- Client-side only processing

## 🎯 Future Improvements

- Password strength meter
- Password history (local storage)
- Export/Import settings
- Dark mode support
- Additional character sets
- Password pattern customization
