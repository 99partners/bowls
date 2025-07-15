// "use client";

// import { ArrowRight, Heart, Users, Star, Globe } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import fruitbowl from "../assets/fruitbowl.png"; // Adjust path as needed
// import fruitbowl1 from "../assets/fruitbowl1.png";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const Index = () => {
//   const [counters, setCounters] = useState({
//     meals: 0,
//     customers: 0,
//     donations: 0,
//   });

//   // useEffect(() => {
//   //   const targetValues = { meals: 12500, customers: 8750, donations: 12500 };
//   //   const duration = 3000;
//   //   const steps = 100;
//   //   const stepTime = duration / steps;

//   //   let currentStep = 0;
//   //   const timer = setInterval(() => {
//   //     currentStep++;
//   //     const progress = currentStep / steps;

//   //     setCounters({
//   //       meals: Math.floor(targetValues.meals * progress),
//   //       customers: Math.floor(targetValues.customers * progress),
//   //       donations: Math.floor(targetValues.donations * progress),
//   //     });

//   //     if (currentStep >= steps) {
//   //       clearInterval(timer);
//   //     }
//   //   }, stepTime);

//   //   return () => clearInterval(timer);
//   // }, []);

//   useEffect(() => {
//   const baseValues = { meals: 12500, customers: 8750, donations: 12500 };
//   const lastStored = JSON.parse(localStorage.getItem("counterData")) || {
//     meals: baseValues.meals,
//     customers: baseValues.customers,
//     donations: baseValues.donations,
//     lastUpdated: new Date().toISOString(),
//   };

//   const now = new Date();
//   const lastUpdateTime = new Date(lastStored.lastUpdated);
//   const msPerDay = 24 * 60 * 60 * 1000;
//   const daysPassed = Math.floor((now - lastUpdateTime) / msPerDay);

//   let updatedData = { ...lastStored };

//   if (daysPassed >= 1) {
//     for (let i = 0; i < daysPassed; i++) {
//       updatedData.meals += Math.floor(Math.random() * 11) + 10; // 10-20
//       updatedData.customers += Math.floor(Math.random() * 11) + 5; // 5-15
//       updatedData.donations += Math.floor(Math.random() * 11) + 10; // 10-20
//     }
//     updatedData.lastUpdated = now.toISOString();
//     localStorage.setItem("counterData", JSON.stringify(updatedData));
//   }

//   const duration = 3000;
//   const steps = 100;
//   const stepTime = duration / steps;

//   let currentStep = 0;
//   const timer = setInterval(() => {
//     currentStep++;
//     const progress = currentStep / steps;

//     setCounters({
//       meals: Math.floor(updatedData.meals * progress),
//       customers: Math.floor(updatedData.customers * progress),
//       donations: Math.floor(updatedData.donations * progress),
//     });

//     if (currentStep >= steps) {
//       clearInterval(timer);
//     }
//   }, stepTime);

//   return () => clearInterval(timer);
// }, []);

//   const bowlCategories = [
//     {
//       name: "Rice Bowls",
//       description: "Hearty, nutritious rice bowls with fresh ingredients",
//       image:
//         "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
//       price: "From ₹199",
//       popular: true,
//     },
//     {
//       name: "Sprout Bowls",
//       description: "Fresh, protein-rich sprout bowls packed with vitamins",
//       image:
//         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
//       price: "From ₹199",
//       popular: false,
//     },
//     {
//       name: "Fruit Bowls",
//       description: "Sweet, refreshing fruit combinations",
//       image: fruitbowl1,
//       price: "From ₹299",
//       popular: false,
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       text: "Not only is the food amazing, but knowing that I'm helping feed children makes every meal special.",
//       rating: 5,
//     },
//     {
//       name: "Mike Chen",
//       text: "The rice bowls are incredibly fresh and filling. Love the mission behind 99 Bowls!",
//       rating: 5,
//     },
//     {
//       name: "Emily Davis",
//       text: "Best salad bowls in town! The social impact aspect makes it even better.",
//       rating: 5,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
//       {/* Hero Section */}
//       <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
//         {/* S-Curve Vertical Right Background */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <svg
//             viewBox="0 0 320 1440"
//             preserveAspectRatio="none"
//             className="absolute top-0 right-0 h-full w-[95%]"
//           >
//             {/* <path
//               fill="#FFA500"
//               fillOpacity="1"
//               d="M200,0 C100,460 240,1480 10,1440 L320,1440 L320,0 Z"
//             ></path> */}
//             <path
//               fill="#FFFFFF"
//               fillOpacity="1"
//               d="M200,1440 C90,980 240,0 50,0 L320,0 L320,1440 Z"
//             ></path>
//           </svg>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl">
//           {/* Content Left */}
//           <div className="animate-fade-in">
//             <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-200 mb-6 sm:mb-8">
//               <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
//               <span className="text-xs sm:text-sm font-medium text-gray-700">
//                 Order One, Donate One
//               </span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Nourish
//               </span>
//               <br />
//               <span className="text-gray-800">Communities</span>
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed">
//               Delicious bowls delivered to your door. For every bowl you order,
//               we donate one to people in need. Good food, great cause.
//             </p>
//             {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
//               <Link
//                 to="/services"
//                 className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
//               >
//                 <span className="relative z-10 flex items-center justify-center">
//                   Order Now
//                   <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </Link>
//               <Link
//                 to="/about"
//                 className="group relative border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
//               >
//                 <span className="relative z-10">Learn More</span>
//                 <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </Link>
//             </div> */}
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
//               <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-500 hover:shadow-lg transition-all duration-300">
//                 <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
//                   {counters.meals.toLocaleString()}+
//                 </div>
//                 <div className="text-sm sm:text-base text-gray-600 font-medium">
//                   Meals Delivered
//                 </div>
//               </div>
//               <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-500 hover:shadow-lg transition-all duration-300">
//                 <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">
//                   {counters.customers.toLocaleString()}+
//                 </div>
//                 <div className="text-sm sm:text-base text-gray-600 font-medium">
//                   Happy Customers
//                 </div>
//               </div>
//               <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-green-500 hover:shadow-lg transition-all duration-300">
//                 <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">
//                   {counters.donations.toLocaleString()}+
//                 </div>
//                 <div className="text-sm sm:text-base text-gray-600 font-medium">
//                   Meals Donated
//                 </div>
//               </div>
//             </div> */}
//           </div>

//           {/* Fruit Bowl Right */}
//           <div className="hidden lg:flex items-center justify-center">
//             <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
//               <img
//                 src={fruitbowl}
//                 alt="Fresh fruit bowl"
//                 className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//         <style>{`
//             @keyframes gentle-rotate {
//               from { transform: rotate(0deg); }
//               to { transform: rotate(360deg); }
//             }
//             .animate-gentle-rotate {
//               animation: gentle-rotate 200s linear infinite;
//             }
//           `}</style>
//       </section>

//       {/* Bowl Categories */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Bowl Collection
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
//               Fresh, healthy, and delicious vegetarian bowls crafted with love
//               and delivered with purpose
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {bowlCategories.map((category, index) => (
//               <div
//                 key={category.name}
//                 className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
//               >
//                 {category.popular && (
//                   <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
//                     Most Popular
//                   </div>
//                 )}

//                 <div className="relative overflow-hidden h-32 w-32 sm:h-40 sm:w-40 aspect-square mx-auto mb-2 sm:mb-3 rounded-full">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
//                 </div>

//                 <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
//                   {category.name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
//                   {category.description}
//                 </p>
//                 <div className="flex justify-between items-center w-full max-w-xs">
//                   <span className="text-sm sm:text-base font-semibold text-orange-500">
//                     {category.price}
//                   </span>
//                   <Link
//                     to="/services"
//                     className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
//                     aria-label={`Order ${category.name}`}
//                   >
//                     Order Now
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
//                 Our{" "}
//                 <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                   Mission
//                 </span>
//               </h2>
//               <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
//                 At 99 Bowls, we believe that good food should be accessible to
//                 everyone. That's why for every bowl you order, we donate an
//                 identical meal to people in need through our partnership with
//                 local charities.
//               </p>

//               <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-700">
//                     1:1 donation ratio for every order
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-700">
//                     Supporting local communities
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                     <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-700">
//                     Sustainable and eco-friendly practices
//                   </span>
//                 </div>
//               </div>

//               <Link
//                 to="/about"
//                 className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
//                 aria-label="Learn more about our impact"
//               >
//                 Learn More About Our Impact
//                 <ArrowRight className="ml-2 w-4 h-4 sm:w-4 sm:h-4" />
//               </Link>
//             </div>

//             <div className="relative">
//               <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
//                 <img
//                   src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
//                   alt="Community impact"
//                   className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
//                   loading="lazy"
//                 />
//                 <div className="text-center">
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
//                     Making a Difference
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600">
//                     Together, we're building a world where no one goes hungry
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
//               What Our{" "}
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Customers Say
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
//               Real stories from our amazing community
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex mb-3 sm:mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="text-sm sm:text-base font-semibold text-gray-800">
//                   {testimonial.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-50 to-red-50">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
//             Ready to Make a Difference?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 sm:mb-8">
//             Order your favorite bowl today and help us feed people in
//             need. Every order counts, every meal matters.
//           </p>
//           <Link
//             to="/services"
//             className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
//             aria-label="Start ordering"
//           >
//             Start Ordering
//             <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;

// "use client";

// import { ArrowRight, Heart, Users, Star, Globe } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import fruitbowl from "../assets/fruitbowl.png";

// const Index = () => {
//   const [counters, setCounters] = useState({
//     meals: 0,
//     customers: 0,
//     donations: 0,
//   });

//   useEffect(() => {
//     const baseValues = { meals: 12500, customers: 8750, donations: 12500 };
//     const lastStored = JSON.parse(localStorage.getItem("counterData")) || {
//       meals: baseValues.meals,
//       customers: baseValues.customers,
//       donations: baseValues.donations,
//       lastUpdated: new Date("2025-07-11").toISOString(), // Fixed start date
//     };

//     const now = new Date("2025-07-12T14:35:00+05:30"); // Current date and time
//     const lastUpdateTime = new Date(lastStored.lastUpdated);
//     const msPerDay = 24 * 60 * 60 * 1000;
//     const daysPassed = Math.floor((now - lastUpdateTime) / msPerDay);

//     let updatedData = { ...lastStored };

//     if (daysPassed >= 1) {
//       for (let i = 0; i < daysPassed; i++) {
//         updatedData.meals += Math.floor(Math.random() * 11) + 10; // 10-20
//         updatedData.customers += Math.floor(Math.random() * 11) + 5; // 5-15
//         updatedData.donations += Math.floor(Math.random() * 11) + 10; // 10-20
//       }
//       updatedData.lastUpdated = now.toISOString();
//       localStorage.setItem("counterData", JSON.stringify(updatedData));
//     }

//     const duration = 3000;
//     const steps = 100;
//     const stepTime = duration / steps;

//     let currentStep = 0;
//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;

//       setCounters({
//         meals: Math.floor(updatedData.meals * progress),
//         customers: Math.floor(updatedData.customers * progress),
//         donations: Math.floor(updatedData.donations * progress),
//       });

//       if (currentStep >= steps) {
//         clearInterval(timer);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, []);

//   const bowls = [
//     {
//       id: 1,
//       name: "Paneer Tikka Rice",
//       category: "rice",
//       price: 249,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+1",
//       description:
//         "Spicy paneer tikka with fragrant basmati rice, grilled vegetables, and a creamy tomato sauce - 100% vegetarian",
//       rating: 4.9,
//       popular: true,
//       prep_time: "15-20 min",
//     },
//     {
//       id: 2,
//       name: "Mexican Fried Rice",
//       category: "rice",
//       price: 229,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+2",
//       description:
//         "Zesty fried rice with bell peppers, sweet corn, black beans, and a tangy salsa - a vegetarian Mexican delight",
//       rating: 4.7,
//       popular: true,
//       prep_time: "12-18 min",
//     },
//     {
//       id: 3,
//       name: "Dal Fry-Jeera Rice",
//       category: "rice",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+3",
//       description:
//         "Comforting dal fry with cumin-spiced jeera rice, served with fresh onions and a hint of ghee - pure vegetarian comfort",
//       rating: 4.6,
//       popular: false,
//       prep_time: "15-20 min",
//     },
//     {
//       id: 4,
//       name: "Rajma-Chawal",
//       category: "rice",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+4",
//       description:
//         "Hearty red kidney beans in a spiced tomato gravy, paired with fluffy basmati rice - a vegetarian North Indian classic",
//       rating: 4.8,
//       popular: false,
//       prep_time: "18-22 min",
//     },
//     {
//       id: 5,
//       name: "Dal Makhani Rice",
//       category: "rice",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+5",
//       description:
//         "Creamy dal makhani with black lentils and spices, served with aromatic basmati rice - rich vegetarian indulgence",
//       rating: 4.7,
//       popular: false,
//       prep_time: "18-22 min",
//     },
//     {
//       id: 6,
//       name: "Punjabi Chole-Rice",
//       category: "rice",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+6",
//       description:
//         "Spicy Punjabi chole with chickpeas in a tangy masala, paired with steamed basmati rice - vegetarian soul food",
//       rating: 4.6,
//       popular: false,
//       prep_time: "15-20 min",
//     },
//     {
//       id: 7,
//       name: "Brussels Sprouts Grain",
//       category: "sprout",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+7",
//       description:
//         "Roasted Brussels sprouts with quinoa, mixed greens, and a lemon-tahini dressing - wholesome vegetarian nutrition",
//       rating: 4.5,
//       popular: false,
//       prep_time: "10-15 min",
//     },
//     {
//       id: 8,
//       name: "Sattvik Buddha Bowl",
//       category: "sprout",
//       price: 249,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+8",
//       description:
//         "Sprouted moong, brown rice, roasted vegetables, and a sattvik yogurt dressing - pure vegetarian bliss",
//       rating: 4.9,
//       popular: true,
//       prep_time: "12-15 min",
//     },
//     {
//       id: 9,
//       name: "Usal Power Bowl",
//       category: "sprout",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+9",
//       description:
//         "Spicy Maharashtrian usal with sprouted lentils, quinoa, and fresh herbs - a vegetarian protein powerhouse",
//       rating: 4.7,
//       popular: true,
//       prep_time: "10-15 min",
//     },
//     {
//       id: 10,
//       name: "Chana Math Mix",
//       category: "sprout",
//       price: 199,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+10",
//       description:
//         "Sprouted chana and math beans with cucumber, tomatoes, and a tangy chaat masala - light vegetarian refreshment",
//       rating: 4.6,
//       popular: false,
//       prep_time: "10-12 min",
//     },
//     {
//       id: 11,
//       name: "Tropical Bliss Bowl",
//       category: "fruit",
//       price: 399,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+11",
//       description:
//         "Exotic mango, pineapple, and kiwi with a coconut yogurt drizzle and granola - a tropical vegetarian delight",
//       rating: 4.9,
//       popular: true,
//       prep_time: "5-10 min",
//     },
//     {
//       id: 12,
//       name: "Rainbow Fruit Medley",
//       category: "fruit",
//       price: 299,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+12",
//       description:
//         "Colorful mix of seasonal fruits like strawberries, bananas, and oranges with a honey-lime dressing - vegetarian refreshment",
//       rating: 4.8,
//       popular: true,
//       prep_time: "5-10 min",
//     },
//     {
//       id: 13,
//       name: "Exotic Fusion",
//       category: "fruit",
//       price: 599,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+13",
//       description:
//         "Premium dragon fruit, passion fruit, and lychee with a chia seed topping - a luxurious vegetarian treat",
//       rating: 4.9,
//       popular: false,
//       prep_time: "8-10 min",
//     },
//     {
//       id: 14,
//       name: "Mango Tango",
//       category: "fruit",
//       price: 299,
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowl+14",
//       description:
//         "Juicy mango chunks with blueberries and a mint-yogurt drizzle - a vibrant vegetarian fruit bowl",
//       rating: 4.7,
//       popular: false,
//       prep_time: "5-10 min",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       text: "Not only is the food amazing, but knowing that I'm helping feed children makes every meal special.",
//       rating: 5,
//     },
//     {
//       name: "Mike Chen",
//       text: "The rice bowls are incredibly fresh and filling. Love the mission behind 99 Bowls!",
//       rating: 5,
//     },
//     {
//       name: "Emily Davis",
//       text: "Best salad bowls in town! The social impact aspect makes it even better.",
//       rating: 5,
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const categories = [
//     { id: "all", name: "All Bowls" },
//     { id: "rice", name: "Rice Bowls" },
//     { id: "sprout", name: "Sprout Bowls" },
//     { id: "fruit", name: "Fruit Bowls" },
//   ];

//   const filteredBowls =
//     selectedCategory === "all"
//       ? bowls
//       : bowls.filter((bowl) => bowl.category === selectedCategory);

//   const bowlCategories = [
//     {
//       name: "Rice Bowls",
//       description: "Hearty, nutritious rice bowls with fresh ingredients",
//       image:
//         "https://via.placeholder.com/400x400.png?text=Rice+Bowls",
//       price: "From ₹199",
//       popular: true,
//     },
//     {
//       name: "Sprout Bowls",
//       description: "Fresh, protein-rich sprout bowls packed with vitamins",
//       image:
//         "https://via.placeholder.com/400x400.png?text=Sprout+Bowls",
//       price: "From ₹199",
//       popular: false,
//     },
//     {
//       name: "Fruit Bowls",
//       description: "Sweet, refreshing fruit combinations",
//       image:
//         "https://via.placeholder.com/400x400.png?text=Fruit+Bowls",
//       price: "From ₹299",
//       popular: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
//       {/* Hero Section */}
//       <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
//         {/* S-Curve Vertical Right Background */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <svg
//             viewBox="0 0 320 1440"
//             preserveAspectRatio="none"
//             className="absolute top-0 right-0 h-full w-[95%]"
//           >
//             <path
//               fill="#FFFFFF"
//               fillOpacity="1"
//               d="M200,1440 C90,980 240,0 50,0 L320,0 L320,1440 Z"
//             ></path>
//           </svg>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl">
//           {/* Content Left */}
//           <div className="animate-fade-in">
//             <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-200 mb-6 sm:mb-8">
//               <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
//               <span className="text-xs sm:text-sm font-medium text-gray-700">
//                 Order One, Donate One
//               </span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Nourish
//               </span>
//               <br />
//               <span className="text-gray-800">Communities</span>
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed">
//               Delicious bowls delivered to your door. For every bowl you order,
//               we donate one to people in need. Good food, great cause.
//             </p>
//           </div>

//           {/* Fruit Bowl Right */}
//           <div className="hidden lg:flex items-center justify-center">
//             <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
//               <img
//                 src={fruitbowl}
//                 alt="Fresh fruit bowl"
//                 className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//         <style>{`
//             @keyframes gentle-rotate {
//               from { transform: rotate(0deg); }
//               to { transform: rotate(360deg); }
//             }
//             .animate-gentle-rotate {
//               animation: gentle-rotate 200s linear infinite;
//             }
//           `}</style>
//       </section>

//       {/* Bowl Categories */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Bowl Collection
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
//               Fresh, healthy, and delicious vegetarian bowls crafted with love
//               and delivered with purpose
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {bowlCategories.map((category, index) => (
//               <div
//                 key={category.name}
//                 className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
//               >
//                 {category.popular && (
//                   <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
//                     Most Popular
//                   </div>
//                 )}

//                 <div className="relative overflow-hidden h-32 w-32 sm:h-40 sm:w-40 aspect-square mx-auto mb-2 sm:mb-3 rounded-full">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
//                 </div>

//                 <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
//                   {category.name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
//                   {category.description}
//                 </p>
//                 <div className="flex justify-between items-center w-full max-w-xs">
//                   <span className="text-sm sm:text-base font-semibold text-orange-500">
//                     {category.price}
//                   </span>
//                   <Link
//                     to="/services"
//                     className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
//                     aria-label={`Order ${category.name}`}
//                   >
//                     Order Now
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Explore Our{" "}
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Menu
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600">
//               Browse our selection of fresh, healthy bowls
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Menu Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredBowls.map((bowl) => (
//               <div
//                 key={bowl.id}
//                 className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
//               >
//                 {bowl.popular && (
//                   <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
//                     Popular
//                   </div>
//                 )}

//                 <div className="relative overflow-hidden h-32 w-32 sm:h-40 sm:w-40 aspect-square mx-auto mb-2 sm:mb-3 rounded-full">
//                   <img
//                     src={bowl.image}
//                     alt={bowl.name}
//                     className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
//                 </div>

//                 <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
//                   {bowl.name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
//                   {bowl.description}
//                 </p>
//                 <div className="flex justify-between items-center w-full max-w-xs">
//                   <span className="text-sm sm:text-base font-semibold text-orange-500">
//                     ₹{bowl.price}
//                   </span>
//                   <Link
//                     to="/services"
//                     className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
//                     aria-label={`Order ${bowl.name}`}
//                   >
//                     Order Now
//                   </Link>
//                 </div>
//                 <div className="flex justify-between items-center w-full max-w-xs mt-2 text-sm text-gray-600">
//                   <span>Rating: {bowl.rating}/5</span>
//                   <span>Prep: {bowl.prep_time}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
//                 Our{" "}
//                 <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                   Mission
//                 </span>
//               </h2>
//               <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
//                 At 99 Bowls, we believe that good food should be accessible to
//                 everyone. That's why for every bowl you order, we donate an
//                 identical meal to people in need through our partnership with
//                 local charities.
//               </p>

//               <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-700">
//                     1:1 donation ratio for every order
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-700">
//                     Supporting local communities
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                     <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
//                   </div>
//                   <span className="text-sm sm:text-base text-gray-700">
//                     Sustainable and eco-friendly practices
//                   </span>
//                 </div>
//               </div>

//               <Link
//                 to="/about"
//                 className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
//                 aria-label="Learn more about our impact"
//               >
//                 Learn More About Our Impact
//                 <ArrowRight className="ml-2 w-4 h-4 sm:w-4 sm:h-4" />
//               </Link>
//             </div>

//             <div className="relative">
//               <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
//                 <img
//                   src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
//                   alt="Community impact"
//                   className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
//                   loading="lazy"
//                 />
//                 <div className="text-center">
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
//                     Making a Difference
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600">
//                     Together, we're building a world where no one goes hungry
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
//               What Our{" "}
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                 Customers Say
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
//               Real stories from our amazing community
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex mb-3 sm:mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="text-sm sm:text-base font-semibold text-gray-800">
//                   {testimonial.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-50 to-red-50">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
//             Ready to Make a Difference?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 sm:mb-8">
//             Order your favorite bowl today and help us feed people in
//             need. Every order counts, every meal matters.
//           </p>
//           <Link
//             to="/services"
//             className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
//             aria-label="Start ordering"
//           >
//             Start Ordering
//             <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;

import { ArrowRight, Heart, Users, Star, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fruitbowl from "../assets/fruitbowl.png";

const Index = () => {
  const [counters, setCounters] = useState({
    meals: 0,
    customers: 0,
    donations: 0,
  });

  const [selectedBowl, setSelectedBowl] = useState(null);
  const [selectedView, setSelectedView] = useState("image"); // New state to manage view: "image" or "details"
  const [touchStart, setTouchStart] = useState(0); // For touch swipe detection

  useEffect(() => {
    const baseValues = { meals: 12500, customers: 8750, donations: 12500 };
    const lastStored = JSON.parse(localStorage.getItem("counterData")) || {
      meals: baseValues.meals,
      customers: baseValues.customers,
      donations: baseValues.donations,
      lastUpdated: new Date("2025-07-11").toISOString(),
    };

    const now = new Date("2025-07-15T22:29:00+05:30"); // Updated to 10:29 PM IST
    const lastUpdateTime = new Date(lastStored.lastUpdated);
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysPassed = Math.floor((now - lastUpdateTime) / msPerDay);

    let updatedData = { ...lastStored };

    if (daysPassed >= 1) {
      for (let i = 0; i < daysPassed; i++) {
        updatedData.meals += Math.floor(Math.random() * 11) + 10;
        updatedData.customers += Math.floor(Math.random() * 11) + 5;
        updatedData.donations += Math.floor(Math.random() * 11) + 10;
      }
      updatedData.lastUpdated = now.toISOString();
      localStorage.setItem("counterData", JSON.stringify(updatedData));
    }

    const duration = 3000;
    const steps = 100;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        meals: Math.floor(updatedData.meals * progress),
        customers: Math.floor(updatedData.customers * progress),
        donations: Math.floor(updatedData.donations * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const bowls = [
    {
      id: 1,
      name: "Paneer Tikka Rice",
      category: "rice",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c36a4b?w=400&h=400&fit=crop",
      description:
        "Spicy paneer tikka with fragrant basmati rice, grilled vegetables, and a creamy tomato sauce - 100% vegetarian. Ingredients: Paneer, Basmati Rice, Tomatoes, Bell Peppers, Cream.",
      rating: 4.9,
      popular: true,
      prep_time: "15-20 min",
    },
    {
      id: 2,
      name: "Mexican Fried Rice",
      category: "rice",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1519671282429-b44660ead0a0?w=400&h=400&fit=crop",
      description:
        "Zesty fried rice with bell peppers, sweet corn, black beans, and a tangy salsa - a vegetarian Mexican delight. Ingredients: Rice, Bell Peppers, Corn, Black Beans, Salsa.",
      rating: 4.7,
      popular: true,
      prep_time: "12-18 min",
    },
    {
      id: 3,
      name: "Dal Fry-Jeera Rice",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1630409346820-4e5b9f0086c6?w=400&h=400&fit=crop",
      description:
        "Comforting dal fry with cumin-spiced jeera rice, served with fresh onions and a hint of ghee - pure vegetarian comfort. Ingredients: Lentils, Cumin, Rice, Onions, Ghee.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 4,
      name: "Rajma-Chawal",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1599971815742-4e7647c7b2df?w=400&h=400&fit=crop",
      description:
        "Hearty red kidney beans in a spiced tomato gravy, paired with fluffy basmati rice - a vegetarian North Indian classic. Ingredients: Kidney Beans, Tomatoes, Rice, Spices.",
      rating: 4.8,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 5,
      name: "Dal Makhani Rice",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
      description:
        "Creamy dal makhani with black lentils and spices, served with aromatic basmati rice - rich vegetarian indulgence. Ingredients: Black Lentils, Cream, Rice, Spices.",
      rating: 4.7,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 6,
      name: "Punjabi Chole-Rice",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1601050690597-c7b7a3986d8d?w=400&h=400&fit=crop",
      description:
        "Spicy Punjabi chole with chickpeas in a tangy masala, paired with steamed basmati rice - vegetarian soul food. Ingredients: Chickpeas, Masala, Rice, Tomatoes.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 7,
      name: "Brussels Sprouts Grain",
      category: "sprout",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1519624213695-0a2826b708f1?w=400&h=400&fit=crop",
      description:
        "Roasted Brussels sprouts with quinoa, mixed greens, and a lemon-tahini dressing - wholesome vegetarian nutrition. Ingredients: Brussels Sprouts, Quinoa, Greens, Tahini.",
      rating: 4.5,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 8,
      name: "Sattvik Buddha Bowl",
      category: "sprout",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1511690743698-a16cb3b8a193?w=400&h=400&fit=crop",
      description:
        "Sprouted moong, brown rice, roasted vegetables, and a sattvik yogurt dressing - pure vegetarian bliss. Ingredients: Moong Sprouts, Brown Rice, Vegetables, Yogurt.",
      rating: 4.9,
      popular: true,
      prep_time: "12-15 min",
    },
    {
      id: 9,
      name: "Usal Power Bowl",
      category: "sprout",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1490645935147-1c72983e162f?w=400&h=400&fit=crop",
      description:
        "Spicy Maharashtrian usal with sprouted lentils, quinoa, and fresh herbs - a vegetarian protein powerhouse. Ingredients: Lentils, Quinoa, Herbs, Spices.",
      rating: 4.7,
      popular: true,
      prep_time: "10-15 min",
    },
    {
      id: 10,
      name: "Chana Math Mix",
      category: "sprout",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1519996529931-28324d484a8e?w=400&h=400&fit=crop",
      description:
        "Sprouted chana and math beans with cucumber, tomatoes, and a tangy chaat masala - light vegetarian refreshment. Ingredients: Chana, Math Beans, Cucumber, Tomatoes.",
      rating: 4.6,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 11,
      name: "Tropical Bliss Bowl",
      category: "fruit",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1541592106381-6c0ce07a6e61?w=400&h=400&fit=crop",
      description:
        "Exotic mango, pineapple, and kiwi with a coconut yogurt drizzle and granola - a tropical vegetarian delight. Ingredients: Mango, Pineapple, Kiwi, Yogurt, Granola.",
      rating: 4.9,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 12,
      name: "Rainbow Fruit Medley",
      category: "fruit",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop",
      description:
        "Colorful mix of seasonal fruits like strawberries, bananas, and oranges with a honey-lime dressing - vegetarian refreshment. Ingredients: Strawberries, Bananas, Oranges, Honey.",
      rating: 4.8,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 13,
      name: "Exotic Fusion",
      category: "fruit",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=400&fit=crop",
      description:
        "Premium dragon fruit, passion fruit, and lychee with a chia seed topping - a luxurious vegetarian treat. Ingredients: Dragon Fruit, Passion Fruit, Lychee, Chia Seeds.",
      rating: 4.9,
      popular: false,
      prep_time: "8-10 min",
    },
    {
      id: 14,
      name: "Mango Tango",
      category: "fruit",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1621574024140-b3e4c4c5a6e8?w=400&h=400&fit=crop",
      description:
        "Juicy mango chunks with blueberries and a mint-yogurt drizzle - a vibrant vegetarian fruit bowl. Ingredients: Mango, Blueberries, Yogurt, Mint.",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Not only is the food amazing, but knowing that I'm helping feed children makes every meal special.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "The rice bowls are incredibly fresh and filling. Love the mission behind 99 Bowls!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "Best salad bowls in town! The social impact aspect makes it even better.",
      rating: 5,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { id: "all", name: "All Bowls" },
    { id: "rice", name: "Rice Bowls" },
    { id: "sprout", name: "Sprout Bowls" },
    { id: "fruit", name: "Fruit Bowls" },
  ];

  const filteredBowls =
    selectedCategory === "all"
      ? bowls
      : bowls.filter((bowl) => bowl.category === selectedCategory);

  const bowlCategories = [
    {
      name: "Rice Bowls",
      description: "Hearty, nutritious rice bowls with fresh ingredients",
      image:
        "https://images.unsplash.com/photo-1519671282429-b44660ead0a0?w=400&h=400&fit=crop",
      price: "From ₹199",
      popular: true,
    },
    {
      name: "Sprout Bowls",
      description: "Fresh, protein-rich sprout bowls packed with vitamins",
      image:
        "https://images.unsplash.com/photo-1519624213695-0a2826b708f1?w=400&h=400&fit=crop",
      price: "From ₹199",
      popular: false,
    },
    {
      name: "Fruit Bowls",
      description: "Sweet, refreshing fruit combinations",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop",
      price: "From ₹299",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            viewBox="0 0 320 1440"
            preserveAspectRatio="none"
            className="absolute top-0 right-0 h-full w-[95%]"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M200,1440 C90,980 240,0 50,0 L320,0 L320,1440 Z"
            ></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-200 mb-6 sm:mb-8">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Order One, Donate One
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Nourish
              </span>
              <br />
              <span className="text-gray-800">Communities</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed">
              Delicious bowls delivered to your door. For every bowl you order,
              we donate one to people in need. Good food, great cause.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
              <img
                src={fruitbowl}
                alt="Fresh fruit bowl"
                className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes gentle-rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-gentle-rotate {
            animation: gentle-rotate 250s linear infinite;
          }
        `}</style>
      </section>

      {/* Category Filter */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Menu
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Browse our selection of fresh, healthy bowls
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBowls.map((bowl) => (
              <div
                key={bowl.id}
                className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
              >
                {bowl.popular && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Popular
                  </div>
                )}

                <div
                  className="relative overflow-hidden h-32 w-32 sm:h-40 sm:w-40 aspect-square mx-auto mb-2 sm:mb-3 rounded-full cursor-pointer"
                  onClick={() => {
                    setSelectedBowl(bowl);
                    setSelectedView("image");
                  }}
                >
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x400.png?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                  {bowl.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
                  {bowl.description.split(".")[0] + "."}
                </p>
                <div className="flex justify-between items-center w-full max-w-xs">
                  <span className="text-sm sm:text-base font-semibold text-orange-500">
                    ₹{bowl.price}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`https://www.swiggy.com/search?query=${bowl.name}`}
                      className="bg-orange-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Swiggy
                    </Link>
                    <Link
                      to={`https://www.zomato.com/search?query=${bowl.name}`}
                      className="bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zomato
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full max-w-xs mt-2 text-sm text-gray-600">
                  <span>Rating: {bowl.rating}/5</span>
                  <span>Prep: {bowl.prep_time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedBowl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedBowl(null);
              setSelectedView("image");
            }
          }}
          onWheel={(e) => {
            if (e.deltaX > 0 && selectedView === "image") {
              setSelectedView("details");
              e.preventDefault();
            } else if (e.deltaX < 0 && selectedView === "details") {
              setSelectedView("image");
              e.preventDefault();
            }
          }}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => {
            const touchMove = e.touches[0].clientX;
            const deltaX = touchStart - touchMove;
            if (deltaX > 70 && selectedView === "image") {
              setSelectedView("details");
            } else if (deltaX < -50 && selectedView === "details") {
              setSelectedView("image");
            }
          }}
          onTouchEnd={() => setTouchStart(0)}
        >
          <div className="bg-black text-white p-6 rounded-lg w-full h-full overflow-y-auto relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => {
                setSelectedBowl(null);
                setSelectedView("image");
              }}
            >
              ×
            </button>

            {/* Image View */}
            {selectedView === "image" && (
              <div className="h-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[500px] h-[500px] rounded-full">
                  <img
                    src={selectedBowl.image}
                    alt={selectedBowl.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x400.png?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full" />
                </div>
                <p
                  className="text-sm text-gray-400 mt-4 cursor-pointer"
                  onClick={() => setSelectedView("details")}
                >
                  Swipe right or click here for details
                </p>
              </div>
            )}

            {/* Details View */}
            {selectedView === "details" && (
              <div className="h-full flex flex-col items-center justify-center bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {selectedBowl.name}
                </h3>
                <p className="text-base text-white-700 mb-4">
                  {selectedBowl.description.split("Ingredients:")[0].trim()}.
                </p>
                {selectedBowl.description.includes("Ingredients:") && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      Ingredients:
                    </h4>
                    <p className="text-base text-white-700">
                      {selectedBowl.description.split("Ingredients:")[1].trim()}
                    </p>
                  </div>
                )}
                <p
                  className="text-sm text-gray-400 mt-4 cursor-pointer"
                  onClick={() => setSelectedView("image")}
                >
                  Swipe left or click here to go back
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At 99 Bowls, we believe that good food should be accessible to
                everyone. That's why for every bowl you order, we donate an
                identical meal to people in need through our partnership with
                local charities.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    1:1 donation ratio for every order
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Supporting local communities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Sustainable and eco-friendly practices
                  </span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Learn more about our impact"
              >
                Learn More About Our Impact
                <ArrowRight className="ml-2 w-4 h-4 sm:w-4 sm:h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                  alt="Community impact"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
                  loading="lazy"
                />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    Making a Difference
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Together, we're building a world where no one goes hungry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Real stories from our amazing community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-sm sm:text-base font-semibold text-gray-800">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 sm:mb-8">
            Order your favorite bowl today and help us feed people in need.
            Every order counts, every meal matters.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Start ordering"
          >
            Start Ordering
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
