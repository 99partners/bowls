import { ArrowRight, Heart, Users, Star, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fruitbowl from "../assets/fruitbowl.png";
import logo from "../assets/99 Bowls New.png";
import { useScrollContext } from "../ScrollContext";

const Index = () => {
  const [counters, setCounters] = useState({
    meals: 0,
    customers: 0,
    donations: 0,
  });

  const [selectedBowl, setSelectedBowl] = useState(null);
  const [selectedView, setSelectedView] = useState("image");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const { showHeroLogo, scrollProgress } = useScrollContext();

  useEffect(() => {
    const baseValues = { meals: 12500, customers: 8750, donations: 12500 };
    const lastStored = JSON.parse(localStorage.getItem("counterData")) || {
      meals: baseValues.meals,
      customers: baseValues.customers,
      donations: baseValues.donations,
      lastUpdated: new Date("2025-07-11").toISOString(),
    };

    const now = new Date("2025-07-15T22:29:00+05:30");
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    { id: "addons", name: "Add-Ons" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? bowls
      : bowls.filter((item) => item.category === selectedCategory);

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
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
          <div className="animate-fade-in relative">
            <div className="flex justify-start mb-6 sm:mb-8 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
              <img
                src={logo}
                alt="99 Bowls Logo"
                className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain"
                style={{
                  transform: `scale(${1 - 0.5 * scrollProgress}) translateY(${-60 * scrollProgress}px)` ,
                  opacity: 1 - scrollProgress,
                  transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                  pointerEvents: scrollProgress === 1 ? 'none' : 'auto',
                }}
                loading="lazy"
              />
            </div>
            <div className="-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span>
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                    Taste bhi,
                  </span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-600 bg-clip-text text-transparent pl-7">
                    Health bhi
                  </span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed">
                More than a meal — it’s a step toward better health for all.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
              <img
                src={fruitbowl}
                alt="Fresh fruit bowl"
                className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
                loading="lazy"
              />
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-200 mt-6 sm:mt-8 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Kindness with Every Order
                </span>
              </div>
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
              Browse our selection of fresh, healthy bowls and add-ons
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
                  {item.description.split(".")[0] + "."}
                </p>
                <div className="flex gap-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-black text-white p-4 sm:p-6 rounded-lg w-full h-full flex flex-col items-center justify-center relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              onClick={() => {
                setSelectedBowl(null);
                setSelectedView("image");
              }}
            >
              ×
            </button>

            {selectedView === "image" && (
              <div className="h-full w-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[90%] sm:w-[70%] md:w-[60%] max-w-[600px] aspect-square rounded-full">
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
                  className="text-xs sm:text-sm text-gray-400 mt-4 cursor-pointer"
                  onClick={() => setSelectedView("details")}
                >
                  Swipe right or click for details
                </p>
              </div>
            )}

            {selectedView === "details" && (
              <div className="h-full w-full flex flex-col items-center justify-center bg-gray-900 p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 text-center">
                  {selectedBowl.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 text-center">
                  {selectedBowl.description.split("Ingredients:")[0].trim()}.
                </p>
                {selectedBowl.description.includes("Ingredients:") && (
                  <div className="text-center">
                    <h4 className="text-base sm:text-xl md:text-2xl font-semibold mb-2">
                      Ingredients:
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                      {selectedBowl.description.split("Ingredients:")[1].trim()}
                    </p>
                  </div>
                )}
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 text-center">
                  Sizes: {selectedBowl.sizes.join(" / ")}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 text-center">
                  Price:{" "}
                  {selectedBowl.price.one_size
                    ? `₹${selectedBowl.price.one_size}`
                    : `Small: ₹${selectedBowl.price.small} / Large: ₹${selectedBowl.price.large}`}
                </p>
                <p
                  className="text-xs sm:text-sm text-gray-400 mt-4 cursor-pointer"
                  onClick={() => setSelectedView("image")}
                >
                  Swipe left or click to go back
                </p>
              </div>
            )}
          </div>
        </div>
      )}

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
                everyone. That's why for every bowl you order, we donate an meal
                to people in need.
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
    </div>
  );
};

export default Index;
