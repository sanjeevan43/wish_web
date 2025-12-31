# Ramanujan Magic Square Wishes - Workflow & Routing

## 🔄 **Application Flow**

### **Page Structure**
```
/ (Landing Page)
├── /create (Wish Form)
├── /animate (Animation & GIF Generation)
├── /share/:shareId (Shared Wish View)
└── /* (404 Not Found)
```

## 📋 **User Journey Workflows**

### **1. New User Creating a Wish**
```
Landing Page (/) 
    ↓ [Click "Begin the Memory"]
Wish Form (/create)
    ↓ [Fill form + Submit]
Animation Page (/animate)
    ↓ [Generate GIF + Share]
Shareable Link (/share/:id)
```

### **2. Receiving a Shared Wish**
```
Shared Link (/share/:id)
    ↓ [View animation]
    ↓ [Optional: Create own wish]
Wish Form (/create)
```

### **3. Editing an Existing Wish**
```
Animation Page (/animate)
    ↓ [Click "Edit Wish"]
Wish Form (/create) [Pre-filled]
    ↓ [Modify + Submit]
Animation Page (/animate) [Updated]
```

## 🧭 **Navigation Components**

### **Fixed Navigation Bar**
- **Home**: Returns to landing page
- **Create Wish**: Direct access to form
- **Logo**: Always links to home
- **Auto-hide**: Hidden on shared wish pages

### **Breadcrumb Logic**
- Landing → Create → Animate → Share
- Back buttons maintain context
- State preservation between pages

## 🔗 **Routing Implementation**

### **Route Definitions**
```javascript
/ → LandingPage
/create → WishForm  
/animate → MagicSquareAnimation
/share/:shareId → SharedWish
/* → NotFound (404)
```

### **State Management**
- **React Router State**: Passes wish data between pages
- **URL Parameters**: Encoded wish data in share links
- **Local Storage**: Fallback for data persistence

### **Data Flow**
```
Form Data → Router State → Animation Component
     ↓
Encoded Data → Share URL → Decoded Data
```

## 📱 **Mobile Workflow**

### **Touch-Optimized Navigation**
- Large touch targets (44px minimum)
- Swipe-friendly transitions
- Responsive navigation collapse

### **Mobile-Specific Features**
- Native share API integration
- Touch gesture support
- Optimized canvas rendering

## 🔄 **Error Handling**

### **Missing Data Redirects**
- No wish data → Redirect to /create
- Invalid share ID → Show error page
- Broken links → 404 page with recovery options

### **Fallback Mechanisms**
- Local storage backup
- URL parameter validation
- Graceful degradation

## 🎯 **Key Features**

### **Shareable Links**
- Base64 encoded wish data
- No server dependency
- Instant sharing capability

### **State Preservation**
- Form data maintained during navigation
- Animation settings preserved
- User preferences remembered

### **Progressive Enhancement**
- Works without JavaScript (basic HTML)
- Enhanced with React Router
- Native features when available

## 🚀 **Performance Optimizations**

### **Code Splitting**
- Route-based lazy loading
- Component-level splitting
- Dynamic imports for heavy features

### **Caching Strategy**
- Static asset caching
- Component memoization
- Efficient re-renders

## 🔧 **Development Workflow**

### **Adding New Routes**
1. Define route in `router.jsx`
2. Create component in `components/`
3. Add navigation links
4. Update workflow documentation

### **State Management**
1. Use `useLocation` for receiving data
2. Use `useNavigate` for transitions
3. Maintain data in route state
4. Fallback to URL parameters

This routing system provides a seamless, intuitive user experience while maintaining the magical, emotional feel of the application.