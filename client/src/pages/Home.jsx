import { ArrowRight, Heart, Users, Star, Globe, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import fruitbowl from "../assets/fruitbowl.png";
import logo from "../assets/99 Bowls New.png";
import { useScrollContext } from "../ScrollContext";
import { useIsMobile } from "../hooks/use-mobile";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [selectedView, setSelectedView] = useState("image");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const { showHeroLogo, scrollProgress } = useScrollContext();
  const isMobile = useIsMobile();
  const [showMenuSection, setShowMenuSection] = useState(true);
  const location = useLocation();

  // Smooth scroll to anchor on hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show only hero section on mobile until user scrolls
  useEffect(() => {
    if (!isMobile) {
      setShowMenuSection(true);
      return;
    }
    setShowMenuSection(false);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowMenuSection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const bowls = [
    {
      id: 1,
      name: "Paneer Tikka Rice Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.c2d204ed-7866-448c-872b-db00f5029128.png",
      description:
        "Tasty paneer tikka pieces with flavorful rice. Ingredients: Paneer, Basmati Rice, Tomatoes, Spices.",
      rating: 4.9,
      popular: true,
      prep_time: "15-20 min",
    },
    {
      id: 2,
      name: "Mexican Rice Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.d9277489-74d0-4da6-a8db-753595c796c2.png",
      description:
        "Zesty and vibrant blend of Mexican-spiced rice. Ingredients: Rice, Bell Peppers, Corn, Salsa.",
      rating: 4.7,
      popular: true,
      prep_time: "12-18 min",
    },
    {
      id: 3,
      name: "Punjabi Chole Rice Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.6c87cc69-8f32-4ab0-a48e-b85d2473a32d.png",
      description:
        "Tangy Punjabi chickpea with steamed rice. Ingredients: Chickpeas, Masala, Rice, Tomatoes.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 4,
      name: "Rajma Chawal Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.ae38d081-e276-4d47-8b70-60fe5d9e76bd.png",
      description:
        "Kidney beans in a thick gravy with steamed rice. Ingredients: Kidney Beans, Tomatoes, Rice, Spices.",
      rating: 4.8,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 5,
      name: "Dal Makhani Rice Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.1be1138a-c62a-4912-9f03-f5d2bf0baa59.png",
      description:
        "Black lentils in a creamy gravy, served with rice. Ingredients: Black Lentils, Cream, Rice, Spices.",
      rating: 4.7,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 6,
      name: "Dal Fry Jeera Rice Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.e8131657-f48e-42ee-86ca-f5e4a5cd9a28.png",
      description:
        "The classic combo features creamy yellow dal fry. Ingredients: Lentils, Cumin, Rice, Onions, Ghee.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 7,
      name: "Zucchini Noodle Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.e7a7e1cf-3d2b-4a88-8f78-3d5ff78c0024.png",
      description:
        "Zucchini noodles, cherry tomatoes, pesto. Ingredients: Zucchini, Cherry Tomatoes, Pesto Sauce.",
      rating: 4.5,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 8,
      name: "Cucumber Lentil Salad Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.513578f9-3c14-4a05-83e3-c94d4687833d.png",
      description:
        "Boiled lentils, cucumber, lemon dressing. Ingredients: Lentils, Cucumber, Lemon, Olive Oil.",
      rating: 4.6,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 9,
      name: "Mushroom Quinoa Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.ea08f5dd-0d3d-41b4-8571-a884a92e5016.png",
      description:
        "Sautéed mushrooms, spinach, quinoa. Ingredients: Mushrooms, Spinach, Quinoa.",
      rating: 4.5,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 10,
      name: "Broccoli-Tofu Steam Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.701ab0fd-e65c-4da7-81b7-0be509f95725.png",
      description:
        "Steamed broccoli, tofu, lemon rice. Ingredients: Broccoli, Tofu, Rice, Lemon.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 11,
      name: "Clear Soup Veggie Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.09052638-4766-4a1b-a761-99ff4ff49582.png",
      description:
        "Vegetable broth, seasonal steamed veggies. Ingredients: Carrots, Beans, Broth.",
      rating: 4.5,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 12,
      name: "Mixed Bean Salad Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.c8cb8838-74fc-433c-8a37-ee140742216b.png",
      description:
        "Kidney beans, black beans, vinaigrette. Ingredients: Kidney Beans, Black Beans, Vinaigrette.",
      rating: 4.6,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 13,
      name: "Tropical Paradise Bowl",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.d45f553e-f4f7-437a-8bf1-e5ee72c8e19a.png",
      description:
        "Mango, pineapple, kiwi, coconut flakes. Ingredients: Mango, Pineapple, Kiwi, Coconut.",
      rating: 4.9,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 14,
      name: "Berry Blast Bowl",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.b1c8eefb-3688-4c6a-982b-94ee6c22c401.png",
      description:
        "Strawberries, blueberries, raspberries, honey drizzle. Ingredients: Strawberries, Blueberries, Raspberries, Honey.",
      rating: 4.8,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 15,
      name: "Apple Cinnamon Delight",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.f47a6697-b96b-452c-a573-c2809c06b56c.png",
      description:
        "Apple slices, cinnamon, yogurt, granola. Ingredients: Apples, Cinnamon, Yogurt, Granola.",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
    {
      id: 16,
      name: "Citrus Sunshine Bowl",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.c9bdec69-14b1-4b23-b96c-00bc08a6d65d.png",
      description:
        "Orange segments, grapefruit, pomegranate, mint. Ingredients: Oranges, Grapefruit, Pomegranate, Mint.",
      rating: 4.8,
      popular: false,
      prep_time: "5-10 min",
    },
    {
      id: 17,
      name: "Banana Nut Bowl",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.42e995bc-bb54-4944-b60e-355256f2c9a3.png",
      description:
        "Banana, walnuts, dates, chia seeds. Ingredients: Banana, Walnuts, Dates, Chia Seeds.",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
    {
      id: 18,
      name: "Melon Medley Bowl",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.d2ae7400-b6c0-4dea-b4f2-912271886240.png",
      description:
        "Watermelon cantaloupe, honeydew, lime zest. Ingredients: Watermelon, Cantaloupe, Honeydew, Lime.",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
    {
      id: 19,
      name: "Sprouted Chana Power Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.4f97b985-b333-48c0-bfbe-b6fd9748ae2a.png",
      description:
        "Protein-packed sprouts, roasted peanuts, lime. Ingredients: Chana Sprouts, Peanuts, Lime, Spices.",
      rating: 4.7,
      popular: true,
      prep_time: "10-15 min",
    },
    {
      id: 20,
      name: "Greek Yogurt Chickpea Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.12aa897b-8699-4dcd-9d8f-d6fee49d7434.png",
      description:
        "Chickpeas, herbed yogurt, quinoa. Ingredients: Chickpeas, Yogurt, Quinoa, Herbs.",
      rating: 4.9,
      popular: true,
      prep_time: "12-15 min",
    },
    {
      id: 21,
      name: "Tofu Bhurji Super Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.645de432-a22f-4cf2-ad8e-de83ffd7c173.png",
      description:
        "Scrambled tofu, multigrain rice, veggies. Ingredients: Tofu, Rice, Mixed Vegetables.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 22,
      name: "Paneer-Tofu Combo Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.2b333cfa-0869-41dd-94da-2a53fbd77a68.png",
      description:
        "Grilled paneer + tofu, lentil base. Ingredients: Paneer, Tofu, Lentils, Spices.",
      rating: 4.7,
      popular: false,
      prep_time: "12-15 min",
    },
    {
      id: 23,
      name: "Lentil & Quinoa Athlete Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.cc5df020-be71-444f-88be-97050092c4cd.png",
      description:
        "Red lentils, quinoa, steamed greens. Ingredients: Lentils, Quinoa, Spinach.",
      rating: 4.8,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 24,
      name: "Soya Chunk Curry Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.c02a052b-b04f-4144-aa42-58e1d48cb645.png",
      description:
        "Soya in spicy gravy, brown rice. Ingredients: Soya Chunks, Brown Rice, Spices.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 25,
      name: "Turmeric Lentil Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.3b1e7a44-b7b2-439f-ab86-da9366a60ebd.png",
      description:
        "Golden dal, steamed greens (zero cream). Ingredients: Lentils, Turmeric, Spinach.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 26,
      name: "Oats & Roasted Veggie Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.b3927527-2e32-40a2-ac97-021cc2800f42.png",
      description:
        "Steel-cut oats, flax seeds, herbs. Ingredients: Oats, Flax Seeds, Mixed Vegetables, Herbs.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 27,
      name: "Avocado-Black Bean Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.41b92d9f-83fe-4432-9dc9-24f78a699230.png",
      description:
        "Avocado, black beans, lime, no oil. Ingredients: Avocado, Black Beans, Lime.",
      rating: 4.8,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 28,
      name: "Mediterranean Chickpea Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.c0b95872-bb86-4a8e-b1ba-ad653b316267.png",
      description:
        "Olives, feta, olive oil, brown rice. Ingredients: Chickpeas, Olives, Feta, Brown Rice.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 29,
      name: "Barley Veggie Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.3e8de57f-ca0c-4ace-a184-c1c70cde74fd.png",
      description:
        "Barley, assorted veggies, light herbs. Ingredients: Barley, Mixed Vegetables, Herbs.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 30,
      name: "Quinoa Spinach Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.06cc8a14-68b5-4d73-804d-3734dc048d6a.png",
      description:
        "Quinoa, sautéed spinach, walnuts. Ingredients: Quinoa, Spinach, Walnuts.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 31,
      name: "Turmeric Lentil Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.48cd81a3-02cb-43e2-83b7-a5980c76d80e.png",
      description:
        "Golden dal, steamed greens (zero cream). Ingredients: Lentils, Turmeric, Spinach.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 32,
      name: "Oats & Roasted Veggie Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.00c95c63-aae7-45c8-a3a6-716ee4ccff38.png",
      description:
        "Steel-cut oats, flax seeds, herbs. Ingredients: Oats, Flax Seeds, Mixed Vegetables, Herbs.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 33,
      name: "Avocado-Black Bean Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.76013472-25c3-4e77-801b-3e08c5347539.png",
      description:
        "Avocado, black beans, lime, no oil. Ingredients: Avocado, Black Beans, Lime.",
      rating: 4.8,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 34,
      name: "Mediterranean Chickpea Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.2501082f-c6ce-4507-b6df-d5bb096a7061.png",
      description:
        "Olives, feta, olive oil, brown rice. Ingredients: Chickpeas, Olives, Feta, Brown Rice.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 35,
      name: "Barley Veggie Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.0774fb76-de0b-4381-b284-dc545a096a64.png",
      description:
        "Barley, assorted veggies, light herbs. Ingredients: Barley, Mixed Vegetables, Herbs.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 36,
      name: "Quinoa Spinach Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://bing.com/th/id/BCO.efa58b2d-4d1e-4dba-9dc8-013d1fe20992.png",
      description:
        "Quinoa, sautéed spinach, walnuts. Ingredients: Quinoa, Spinach, Walnuts.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 37,
      name: "Honey Yogurt Dip",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.7584e3b5-e9b1-46fe-b63a-735e3687e937.png",
      description:
        "Creamy yogurt with a sweet honey twist. Ingredients: Yogurt, Honey.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 38,
      name: "Protein Boost",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.4029c053-8a65-461b-a0f7-c9eb7e45f253.png",
      description:
        "Extra protein to power up your bowl. Ingredients: Protein Powder, Nuts.",
      rating: 4.6,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 39,
      name: "Herbal Infusion",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.bb9686e3-ff5d-4934-80a1-c3f5e09c7002.png",
      description:
        "Refreshing herbal infusion drink. Ingredients: Mixed Herbs, Water.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 40,
      name: "Chia Seed Power",
      category: "addons",
      price: { one_size: 20 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.449c377c-8f1a-481b-b517-e874d1472434.png",
      description: "Nutrient-rich chia seeds topping. Ingredients: Chia Seeds.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 41,
      name: "Fresh Herb Garnish",
      category: "addons",
      price: { one_size: 15 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.bdc501c9-ec59-4b41-89eb-c68de9034ef1.png",
      description:
        "Fresh herbs to enhance flavor. Ingredients: Cilantro, Parsley.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 42,
      name: "Spice Kick",
      category: "addons",
      price: { one_size: 15 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.e6ce9ad8-e6f0-47fa-84e4-e6a638d09461.png",
      description:
        "Spicy seasoning for extra zing. Ingredients: Chili Powder, Spices.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 43,
      name: "Immunity Shot",
      category: "addons",
      price: { one_size: 35 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.656d3668-e705-4daa-962f-17ce360f566b.png",
      description:
        "Boost your immunity with this shot. Ingredients: Ginger, Turmeric, Lemon.",
      rating: 4.6,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 44,
      name: "Spiced Buttermilk (Chaas)",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.69d3d395-9d77-4357-8338-65cd1b49c94d.png",
      description:
        "Cool, spiced buttermilk drink. Ingredients: Yogurt, Spices, Water.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 45,
      name: "Fresh Lime Soda/Jaljeera",
      category: "addons",
      price: { one_size: 35 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.b417493b-0a72-4b18-8ed9-f08a70509f47.png",
      description:
        "Refreshing lime soda or jaljeera. Ingredients: Lime, Soda, Spices.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 46,
      name: "Roasted Makhana (Fox Nuts)",
      category: "addons",
      price: { one_size: 40 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.bc3d1719-c098-4a84-b774-c59af540970a.png",
      description: "Crunchy roasted fox nuts. Ingredients: Makhana, Spices.",
      rating: 4.6,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 47,
      name: "Aloe Vera Shot",
      category: "addons",
      price: { one_size: 40 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.544f0969-11b3-4818-921f-70cb70711ce7.png",
      description:
        "Soothing aloe vera health shot. Ingredients: Aloe Vera, Lemon.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 48,
      name: "Mini Moong Dal Halwa",
      category: "addons",
      price: { one_size: 60 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.a09a791b-5a38-45b8-802b-f0f24af54768.png",
      description:
        "Sweet moong dal halwa dessert. Ingredients: Moong Dal, Sugar, Ghee.",
      rating: 4.7,
      popular: false,
      prep_time: "10 min",
    },
    {
      id: 49,
      name: "Sukhadi Bite",
      category: "addons",
      price: { one_size: 40 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.3b5f1030-1daa-4ac7-a9f3-87c61b6e4f2f.png",
      description:
        "Traditional Gujarati sweet bite. Ingredients: Jaggery, Wheat Flour, Ghee.",
      rating: 4.6,
      popular: false,
      prep_time: "10 min",
    },
    {
      id: 50,
      name: "Dudhi Halwa Scoop",
      category: "addons",
      price: { one_size: 60 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.f3a27ed9-7c7c-49b9-8b48-cb6de251e18d.png",
      description:
        "Delicious bottle gourd halwa. Ingredients: Dudhi, Sugar, Ghee.",
      rating: 4.7,
      popular: false,
      prep_time: "10 min",
    },
    {
      id: 51,
      name: "Gulab Jamun (1 pc)",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        "https://bing.com/th/id/BCO.b33f842a-f7e2-4de2-8373-9dbd0ee7fe80.png",
      description:
        "Soft, sweet gulab jamun. Ingredients: Milk Solids, Sugar Syrup.",
      rating: 4.8,
      popular: false,
      prep_time: "5 min",
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
    { id: "all", name: "All Items" },
    { id: "rice", name: "Rice Bowls" },
    { id: "weight_loss", name: "Weight Loss Bowls" },
    { id: "fruit", name: "Fruit Bowls" },
    { id: "protein", name: "Protein Bowls" },
    { id: "heart_care", name: "Heart Care Bowls" },
    { id: "immunity", name: "Immunity Booster Bowls" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? bowls
      : bowls.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for modal (left/right arrows and escape)
  React.useEffect(() => {
    if (!selectedBowl) return;
    function handleKeyDown(e) {
      if (e.key === "ArrowRight" && selectedView === "image") {
        setSelectedView("details");
      } else if (e.key === "ArrowLeft" && selectedView === "details") {
        setSelectedView("image");
      } else if (e.key === "Escape") {
        setSelectedBowl(null);
        setSelectedView("image");
        document.body.style.overflow = "";
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBowl, selectedView]);

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const deltaX = touchStart - touchEnd;
      if (deltaX > 50 && selectedView === "image") {
        setSelectedView("details");
      } else if (deltaX < -50 && selectedView === "details") {
        setSelectedView("image");
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleShare = async (item, event) => {
    const shareData = {
      title: item.name,
      text: `${item.description.split(".")[0]}. Check it out at 99 Bowls!`,
      url: `https://99bowls.com/menu/${item.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = encodeURIComponent(
          `${shareData.title}: ${shareData.text} ${shareData.url}`
        );
        const shareOptions = [
          { name: "WhatsApp", url: `https://wa.me/?text=${shareText}` },
          {
            name: "Twitter",
            url: `https://twitter.com/intent/tweet?text=${shareText}`,
          },
          {
            name: "Facebook",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareData.url
            )}`,
          },
          {
            name: "Copy Link",
            action: () => {
              navigator.clipboard.writeText(
                `${shareData.title}: ${shareData.text} ${shareData.url}`
              );
              alert("Link copied to clipboard!");
            },
          },
        ];

        const shareMenu = shareOptions.map((option) => (
          <button
            key={option.name}
            onClick={() =>
              option.action
                ? option.action()
                : window.open(option.url, "_blank")
            }
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            {option.name}
          </button>
        ));

        const shareMenuContainer = document.createElement("div");
        shareMenuContainer.className =
          "absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg";
        shareMenuContainer.style.top = "100%";
        shareMenuContainer.style.left = "0";
        ReactDOM.render(shareMenu, shareMenuContainer);
        event.currentTarget.appendChild(shareMenuContainer);

        const handleOutsideClick = (e) => {
          if (!shareMenuContainer.contains(e.target)) {
            shareMenuContainer.remove();
            document.removeEventListener("click", handleOutsideClick);
          }
        };
        document.addEventListener("click", handleOutsideClick);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
      <section
        id="hero"
        className="relative z-10 min-h-[60vh] flex flex-col lg:flex-row items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 pt-16 md:pt-20"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            viewBox="0 0 320 1440"
            preserveAspectRatio="none"
            className="absolute top-0 right-0 h-full w-full lg:w-[95%]"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M200,1440 C90,980 240,0 50,0 L320,0 L320,1440 Z"
            ></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center w-full max-w-7xl">
          <div className="animate-fade-in relative mt-0 sm:-mt-8 md:-mt-16 lg:-mt-24 flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:justify-start mb-8 sm:mb-12 md:mb-16">
              <img
                src={logo}
                alt="99 Bowls Logo"
                className="w-24 sm:w-32 md:w-40 lg:w-56 object-contain"
                style={{
                  transform: `scale(${1 - 0.5 * scrollProgress}) translateY(${
                    -60 * scrollProgress
                  }px)`,
                  opacity: 1 - scrollProgress,
                  transition:
                    "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
                  pointerEvents: scrollProgress === 1 ? "none" : "auto",
                }}
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-6 leading-tight text-center lg:text-left -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
                <span>
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                    Taste bhi,
                  </span>
                  <br />

                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-600 bg-clip-text text-transparent pl-2 sm:pl-7">
                    &nbsp; Health bhi
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-8 max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed text-center lg:text-left">
                More than a meal — it's a step toward better health for all.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
              <img
                src={fruitbowl}
                alt="Fresh fruit bowl"
                className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
                loading="lazy"
              />
              <div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 rounded-full border border-orange-200 mt-4 sm:mt-6 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-700"
                style={{
                  whiteSpace: "nowrap",
                  fontSize: isMobile ? "0.85rem" : undefined,
                  paddingLeft: isMobile ? "0.75rem" : undefined,
                  paddingRight: isMobile ? "0.75rem" : undefined,
                  paddingTop: isMobile ? "0.35rem" : undefined,
                  paddingBottom: isMobile ? "0.35rem" : undefined,
                }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                <span>Kindness with Every Order</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
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

      {/* Only show menu section if allowed (mobile: after scroll, desktop: always) */}
      {showMenuSection && (
        <section
          id="menu"
          className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Menu
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-600">
                Browse our selection of fresh, healthy bowls and add-ons
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 mb-8 sm:mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div
                  className="relative overflow-hidden h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 aspect-square mx-auto mb-2 sm:mb-3 rounded-full cursor-pointer"
                  onClick={() => {
                    setSelectedBowl(item);
                    setSelectedView("image");
                  }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400.png?text=Image+Not+Found";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                  </div>

                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
                    {item.description.split(".")[0] + "."}
                  </p>
                  <div className="flex gap-1 sm:gap-2">
                    <Link
                      to={`https://www.swiggy.com/search?query=${item.name}`}
                      className="bg-orange-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Swiggy
                    </Link>
                    <Link
                      to={`https://www.zomato.com/search?query=${item.name}`}
                      className="bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zomato
                    </Link>
                    <button
                      onClick={(e) => handleShare(item, e)}
                      className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative"
                    >
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vision, Mission, and Core Values Section */}
      {showMenuSection && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Purpose
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-full sm:max-w-2xl mx-auto">
                Discover the vision, mission, and values that drive 99 Bowls to
                nourish both bodies and communities.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* Vision */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Vision
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  To be the leading choice for healthy, nourishing, and
                  convenient food that empowers individuals to live their best
                  lives—one bowl at a time. We envision a world where nutritious
                  meals are accessible to everyone, fostering vibrant
                  communities, healthier lifestyles, and sustainable choices.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Mission
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  At 99 Bowls, we're dedicated to providing healthy, fresh, and
                  delicious food delivered right to your doorstep. Our carefully
                  crafted menu—from Rice Bowls to Immunity Boosters—is designed
                  to fuel your body and mind with energy, supporting wellness
                  goals across the spectrum. We promise no compromise on
                  quality, ensuring every bowl is packed with goodness. By
                  prioritizing sustainability and empowering women in business,
                  we aim to build a more inclusive and healthier society—while
                  nourishing both bodies and communities.
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Core Values
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-100 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Freshness & Quality First
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We're committed to providing only the freshest,
                        highest-quality ingredients in every bowl. No shortcuts,
                        no compromises—just food that's as nourishing as it is
                        delicious.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Health-Centric Innovation
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We create bowls that cater to diverse wellness
                        needs—whether it's weight loss, immunity boosting, heart
                        health, or muscle-building. Every recipe is thoughtfully
                        designed to support your journey toward a healthier
                        lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Community-Driven Impact
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        At 99 Bowls, food is more than just fuel—it's a way to
                        bring people together. We're proud to support local
                        communities, offering free meals to thousands and
                        creating spaces where health and well-being are the
                        focal point.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-purple-100 rounded-full flex items-center justify-center">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Empowerment Through Choice
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We believe in the power of choice, whether it's through
                        our customizable bowls or our commitment to women's
                        empowerment. By partnering with female franchisee
                        owners, we create opportunities for women to lead and
                        thrive in business.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Sustainability & Responsibility
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        Our food choices are rooted in sustainability—ensuring
                        we make responsible sourcing decisions, and our
                        packaging is eco-friendly. We're dedicated to nurturing
                        both personal health and the health of our planet.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Integrity in Every Bite
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We stand behind every bowl, delivering on our promise of
                        taste, energy, and health benefits. What you see is what
                        you get—pure, wholesome, and honest food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Reviews Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-orange-500 mb-4">
                  Expert Reviews
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="font-semibold text-gray-800 mb-1">
                      Dr. Anjali Mehta, Nutritionist
                    </div>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-600 text-sm">
                      "99Bowls offers a perfect balance of taste and nutrition.
                      Their focus on fresh ingredients and healthy recipes is
                      commendable!"
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="font-semibold text-gray-800 mb-1">
                      Chef Rahul Singh, Culinary Expert
                    </div>
                    <div className="text-yellow-400 mb-2">★★★★☆</div>
                    <p className="text-gray-600 text-sm">
                      "The variety and creativity in their bowls make healthy
                      eating exciting. Highly recommended for anyone looking for
                      nutritious options."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="font-semibold text-gray-800 mb-1">
                      Dr. Priya Sharma, Dietician
                    </div>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-600 text-sm">
                      "I appreciate their commitment to sustainability and
                      community health. 99Bowls is setting a new standard in the
                      food industry."
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Reels Section */}
              <div className="mb-12 overflow-hidden">
                <h3 className="text-xl font-bold text-orange-500 mb-4">
                  Video Reels
                </h3>
                <div className="relative overflow-hidden">
                  <div className="animate-scroll-horizontal hover:pause-scroll flex">
                    {[
                      "https://www.youtube.com/embed/7ghhRHRP6t4",
                      "https://www.youtube.com/embed/oAVJ9mQUZd8",
                      "https://www.youtube.com/embed/I1_vgJjvlu4",
                      "https://www.youtube.com/embed/XwdqEC2jOnk",
                      "https://www.youtube.com/embed/6p8kSjNg464",
                      "https://www.youtube.com/embed/1aBcD3eF5gH",
                      "https://www.youtube.com/embed/8hIjK9lL2mN",
                      "https://www.youtube.com/embed/4pQrS7tUvWw",
                      // Duplicate for seamless loop
                      "https://www.youtube.com/embed/7ghhRHRP6t4",
                      "https://www.youtube.com/embed/oAVJ9mQUZd8",
                      "https://www.youtube.com/embed/I1_vgJjvlu4",
                      "https://www.youtube.com/embed/XwdqEC2jOnk",
                      "https://www.youtube.com/embed/6p8kSjNg464",
                      "https://www.youtube.com/embed/1aBcD3eF5gH",
                      "https://www.youtube.com/embed/8hIjK9lL2mN",
                      "https://www.youtube.com/embed/4pQrS7tUvWw",
                    ].map((embedUrl, index) => (
                      <div
                        key={`${index}-${embedUrl}`}
                        className="flex-shrink-0 w-48 h-80 rounded-lg overflow-hidden shadow relative group mx-2"
                      >
                        <iframe
                          src={`${embedUrl}?autoplay=1&mute=1&loop=1&playlist=${
                            embedUrl.split("/embed/")[1]
                          }&controls=0&playsinline=1`}
                          className="w-full h-full object-cover"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/60">
                          <button
                            className="bg-white text-black px-3 py-1 rounded-full font-semibold"
                            onClick={() =>
                              window.open(
                                `https://youtube.com/shorts/${
                                  embedUrl.split("/embed/")[1]
                                }`,
                                "_blank"
                              )
                            }
                          >
                            Watch
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              <style>
                {`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll-horizontal {
                  animation: scroll 40s linear infinite;
                  width: max-content;
                }
                .animate-scroll-horizontal:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>
        </section>
      )}

      {selectedBowl && (
        <>
          {/* Prevent background scroll when modal is open */}
          <style>{`body { overflow: hidden !important; }`}</style>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedBowl(null);
                setSelectedView("image");
                document.body.style.overflow = "";
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
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10"
              onClick={() => {
                setSelectedBowl(null);
                setSelectedView("image");
                document.body.style.overflow = "";
              }}
            >
              ×
            </button>

            {selectedView === "image" && (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src={selectedBowl.image}
                  alt={selectedBowl.name}
                  className="object-contain max-w-[90vw] max-h-[90vh] rounded-full shadow-2xl"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400.png?text=Image+Not+Found";
                  }}
                />
                <div className="flex gap-2 mt-4">
                  <span className={`w-3 h-3 rounded-full ${selectedView === 'image' ? 'bg-orange-500' : 'bg-gray-400'} inline-block transition-all`}></span>
                  <span className={`w-3 h-3 rounded-full ${selectedView === 'details' ? 'bg-orange-500' : 'bg-gray-400'} inline-block transition-all`}></span>
                </div>
                <p
                  className="text-xs sm:text-sm text-gray-300 mt-6 cursor-pointer text-center"
                  onClick={() => setSelectedView("details")}
                >
                  Swipe right or click for details
                </p>
              </div>
            )}

            {selectedView === "details" && (
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2 mt-4">
                  <span className={`w-3 h-3 rounded-full ${selectedView === 'image' ? 'bg-orange-500' : 'bg-gray-400'} inline-block transition-all`}></span>
                  <span className={`w-3 h-3 rounded-full ${selectedView === 'details' ? 'bg-orange-500' : 'bg-gray-400'} inline-block transition-all`}></span>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-90 p-4">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-center text-white">
                    {selectedBowl.name}
                  </h3>
                  <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-4 text-center">
                    {selectedBowl.description.split("Ingredients:")[0].trim()}.
                  </p>
                  {selectedBowl.description.includes("Ingredients:") && (
                    <div className="text-center">
                      <h4 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 text-white">
                        Ingredients:
                      </h4>
                      <p className="text-xs sm:text-base md:text-lg text-gray-300">
                        {selectedBowl.description.split("Ingredients:")[1].trim()}
                      </p>
                    </div>
                  )}
                  <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-1 sm:mb-2 text-center">
                    Sizes: {selectedBowl.sizes.join(" / ")}
                  </p>
                  <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-4 text-center">
                    Price:{" "}
                    {selectedBowl.price.one_size
                      ? `₹${selectedBowl.price.one_size}`
                      : `Small: ₹${selectedBowl.price.small} / Large: ₹${selectedBowl.price.large}`}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-gray-300 mt-4 cursor-pointer text-center"
                    onClick={() => setSelectedView("image")}
                  >
                    Swipe left or click to go back
                  </p>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-full sm:max-w-2xl mx-auto">
              Real stories from our amazing community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-2 sm:mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-xs sm:text-base font-semibold text-gray-800">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        id="blogs"
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Blogs
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              Insights, tips, and stories from the 99 Bowls community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold text-gray-800 mb-1">
                5 Reasons to Choose Healthy Bowls
              </div>
              <div className="text-gray-400 text-xs mb-2">
                by Team 99Bowls | July 2024
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                Discover why healthy bowls are the best choice for your daily
                nutrition and how they can transform your lifestyle.
              </p>
              <a
                href="#"
                className="text-orange-500 mt-2 text-sm font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold text-gray-800 mb-1">
                How We Source Our Ingredients Sustainably
              </div>
              <div className="text-gray-400 text-xs mb-2">
                by Priya S. | June 2024
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                A behind-the-scenes look at our sustainable sourcing practices
                and our commitment to the environment.
              </p>
              <a
                href="#"
                className="text-orange-500 mt-2 text-sm font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold text-gray-800 mb-1">
                Empowering Women Through Food
              </div>
              <div className="text-gray-400 text-xs mb-2">
                by Anjali M. | May 2024
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                Learn how 99Bowls is creating opportunities for women
                entrepreneurs and making a difference in the community.
              </p>
              <a
                href="#"
                className="text-orange-500 mt-2 text-sm font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
