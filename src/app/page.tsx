
import { HeroSection, Navbar, FoodDrinkLayout, Merchandise, Business, Afflicate, Sloution, CardandCoupons, Newsletter, Product, PodCast }
  from "../components"
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";


export default function Home() {
  return (
    <>

      <HydrationOverlay>
        <HeroSection />
        <Navbar />
        <FoodDrinkLayout />
        <Merchandise />
        <Business />
        <PodCast />
        <Afflicate />
        <Sloution />
        <CardandCoupons />
        <Product />
        <Newsletter />
      </HydrationOverlay >
    </>
  );
}
