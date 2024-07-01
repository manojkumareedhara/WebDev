import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import SpecialOffers from "./sections/SpecialOffers";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import PopularProducts from "./sections/PopularProducts";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <selection className="xl:padding-l wide:padding-r padding-r" >
      <Hero />

    </selection>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;