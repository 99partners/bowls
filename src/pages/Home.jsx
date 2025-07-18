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
  const [selectedView, setSelectedView] = useState("image");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

    return () => clearInterval(timer);
  }, []);

  const bowls = [
    // Rice Bowls
    {
      id: 1,
      name: "Paneer Tikka Rice Bowl",
      category: "rice",
      price: { small: 99, large: 299 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c36a4b?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519671282429-b44660ead0a0?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1601050690597-c7b7a3986d8d?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1599971815742-4e7647c7b2df?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1630409346820-4e5b9f0086c6?w=400&h=400&fit=crop",
      description:
        "The classic combo features creamy yellow dal fry. Ingredients: Lentils, Cumin, Rice, Onions, Ghee.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    // Weight Loss Bowls
    {
      id: 7,
      name: "Zucchini Noodle Bowl",
      category: "weight_loss",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f43a9d9390?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519996529931-28324d484a8e?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519624213695-0a2826b708f1?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1547592166-23ac45744c94?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1596459003363-3cd4f7d641c9?w=400&h=400&fit=crop",
      description:
        "Kidney beans, black beans, vinaigrette. Ingredients: Kidney Beans, Black Beans, Vinaigrette.",
      rating: 4.6,
      popular: false,
      prep_time: "10-12 min",
    },
    // Fruit Bowls
    {
      id: 13,
      name: "Tropical Paradise Bowl",
      category: "fruit",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://images.unsplash.com/photo-1541592106381-6c0ce07a6e61?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1557800636-25a7a33e4d6e?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1621574024140-b3e4c4c5a6e8?w=400&h=400&fit=crop",
      description:
        "Watermelon, cantaloupe, honeydew, lime zest. Ingredients: Watermelon, Cantaloupe, Honeydew, Lime.",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
    // Protein Bowls
    {
      id: 19,
      name: "Sprouted Chana Power Bowl",
      category: "protein",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://images.unsplash.com/photo-1490645935147-1c72983e162f?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1511690743698-a16cb3b8a193?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1593560708920-61dd98c36a4b?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519624213695-0a2826b708f1?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
      description:
        "Soya in spicy gravy, brown rice. Ingredients: Soya Chunks, Brown Rice, Spices.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    // Heart Care Bowls
    {
      id: 25,
      name: "Turmeric Lentil Bowl",
      category: "heart_care",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://images.unsplash.com/photo-1630409346820-4e5b9f0086c6?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519996529931-28324d484a8e?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1596459003363-3cd4f7d641c9?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1511690743698-a16cb3b8a193?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519624213695-0a2826b708f1?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1490645935147-1c72983e162f?w=400&h=400&fit=crop",
      description:
        "Quinoa, sautéed spinach, walnuts. Ingredients: Quinoa, Spinach, Walnuts.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    // Immunity Booster Bowls
    {
      id: 31,
      name: "Turmeric Lentil Bowl",
      category: "immunity",
      price: { small: 199, large: 499 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        "https://images.unsplash.com/photo-1630409346820-4e5b9f0086c6?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519996529931-28324d484a8e?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1596459003363-3cd4f7d641c9?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1511690743698-a16cb3b8a193?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519624213695-0a2826b708f1?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1490645935147-1c72983e162f?w=400&h=400&fit=crop",
      description:
        "Quinoa, sautéed spinach, walnuts. Ingredients: Quinoa, Spinach, Walnuts.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    // Add-Ons
    {
      id: 37,
      name: "Honey Yogurt Dip",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        "https://images.unsplash.com/photo-1519731964299-1c3732a9d7f1?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1519731964299-1c3732a9d7f1?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1553787499-6f913386a997?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1594631252845-00614f7e1f16?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1603048297172-cb320b790777?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1594631252845-00614f7e1f16?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1623689048103-8c6f1e8674a8?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1603048297172-cb320b790777?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
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
        "https://images.unsplash.com/photo-1606491032769-36a5760f3b7b?w=400&h=400&fit=crop",
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

      {/* Menu Section */}
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
                {item.popular && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Popular
                  </div>
                )}

                <div
                  className="relative overflow-hidden h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 aspect-square mx-auto mb-2 sm:mb-3 rounded-full cursor-pointer"
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
                <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-xs">
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-orange-500 mb-2 sm:mb-0">
                    {item.price.one_size
                      ? `₹${item.price.one_size}`
                      : `Small: ₹${item.price.small} / Large: ₹${item.price.large}`}
                  </span>
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
                <div className="flex justify-between items-center w-full max-w-xs mt-2 text-xs sm:text-sm text-gray-600">
                  <span>Rating: {item.rating}/5</span>
                  <span>Prep: {item.prep_time}</span>
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

            {/* Image View */}
            {selectedView === "image" && (
              <div className="h-full w-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[80%] sm:w-[60%] md:w-[50%] max-w-[500px] aspect-square rounded-full">
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

            {/* Details View */}
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
