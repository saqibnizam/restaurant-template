import { ThemePreset, ThemeConfig } from '../models/restaurant-config.model';

export const THEME_PRESETS: Record<ThemePreset, Partial<ThemeConfig>> = {
  'Luxury': {
    primaryColor: '#D4AF37', // Gold
    secondaryColor: '#1A1A1A',
    backgroundColor: '#FFFFFF',
    textColor: '#1A1A1A',
    fontFamily: "'Playfair Display', serif"
  },
  'Modern Dark': {
    primaryColor: '#00D1FF',
    secondaryColor: '#121212',
    backgroundColor: '#121212',
    textColor: '#E0E0E0',
    fontFamily: "'Inter', sans-serif"
  },
  'Cafe Warm': {
    primaryColor: '#8B4513', // SaddleBrown
    secondaryColor: '#F5DEB3', // Wheat
    backgroundColor: '#FFF8DC', // Cornsilk
    textColor: '#4E2C0C',
    fontFamily: "'Cabin', sans-serif"
  },
  'Fresh Juice': {
    primaryColor: '#FF8C00', // DarkOrange
    secondaryColor: '#32CD32', // LimeGreen
    backgroundColor: '#F0FFF0', // Honeydew
    textColor: '#2E8B57',
    fontFamily: "'Quicksand', sans-serif"
  },
  'Elegant Hotel': {
    primaryColor: '#2C3E50', // MidnightBlue
    secondaryColor: '#BDC3C7', // Silver
    backgroundColor: '#F8F9FA',
    textColor: '#2C3E50',
    fontFamily: "'Montserrat', sans-serif"
  },
  'Fast Food Vibrant': {
    primaryColor: '#E63946', // Imperial Red
    secondaryColor: '#F1FAEE',
    backgroundColor: '#FFFFFF',
    textColor: '#1D3557',
    fontFamily: "'Poppins', sans-serif"
  },
  'Minimal Premium': {
    primaryColor: '#000000',
    secondaryColor: '#6C757D',
    backgroundColor: '#FFFFFF',
    textColor: '#212529',
    fontFamily: "'Work Sans', sans-serif"
  }
};
