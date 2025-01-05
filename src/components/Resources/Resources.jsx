import "./Resources.css";
import Sidebar from "../Sidebar/Sidebar";
import ResourceList from "../../assets/Wildlife_Resource_List.pdf";

function Resources() {
  return (
    <main className="resources">
      <section className="resources__content">
        <h2 className="resources__title">Resources</h2>
        <h3 className="resources__subtitle">AHA! Resource List</h3>
        <p className="resources__description">
          AHA! maintains a comprehensive list of humane resources in our region.
          To find a referral to an organization or individual that can help you
          with your animal issue (domestic or wildlife), call us at
          <strong> 847-960-8689.</strong>
          <br />
          <br />
          If you know of a resource you’d like to recommend—be it an individual,
          a spay/neuter clinic, a subject matter expert, a website, an
          organization, a book, or other resource—please contact us to tell us
          about it.
          <br />
          <br />
          Here are a few of our favorite resources for you to check out.
        </p>
        <h3 className="resources__subtitle">Feral Cat Information</h3>
        <h4 className="resources__subtitle">
          TNR (Trap-Neuter-Release) Assistance
        </h4>
        <ul className="resources__list">
          <li>
            <strong>Lake County:</strong> Spay and Stay is Lake County’s
            resource for all things TNR (trap/neuter/return). Low cost spay
            neuter for ferals, sheltering advice, and many more resources.
            <a
              href="http://www.spayandstay.org"
              target="_blank"
              className="resources__link"
            >
              http://www.spayandstay.org
            </a>
            .
          </li>
          <li>
            <strong>McHenry County:</strong> Contact{" "}
            <a
              href="http://www.asap-usa.org/"
              target="_blank"
              className="resources__link"
            >
              Animal Services and Assistance Programs
            </a>
            . (815) 568-2921
          </li>
          <li>
            <strong>Tree House Community Cats Program:</strong>{" "}
            <a
              href="https://www.treehouseanimals.org/programs/community-cats"
              target="_blank"
              className="resources__link"
            >
              https://www.treehouseanimals.org/programs/community-cats
            </a>
          </li>
        </ul>
        <h4 className="resources__subtitle">Shelter Ideas</h4>
        <ul className="resources__list">
          <li>
            Pre-made shelter you can order.{" "}
            <a
              href="http://www.feralvilla.com/"
              target="_blank"
              className="resources__link"
            >
              http://www.feralvilla.com/
            </a>
          </li>
          <li>
            Lightweight and easy to make:{" "}
            <a
              href="http://www.neighborhoodcats.org/HOW_TO_FERAL_CAT_WINTER_SHELTER"
              target="_blank"
              className="resources__link"
            >
              http://www.neighborhoodcats.org/HOW_TO_FERAL_CAT_WINTER_SHELTER
            </a>
          </li>
          <li>
            Plans for a substantial, build-your-own shelter are found{" "}
            <a
              href="https://www.alleycat.org/resources/how-to-build-an-outdoor-shelter/"
              target="_blank"
              className="resources__link"
            >
              here
            </a>
            .
          </li>
          <li>
            Clever shelter using easy-to-find materials:{" "}
            <a
              href="http://www.spayandstay.org/wintershelter.htm"
              target="_blank"
              className="resources__link"
            >
              http://www.spayandstay.org/wintershelter.htm
            </a>
          </li>
        </ul>
        <h4 className="resources__subtitle">Feral Cat Reference</h4>
        <ul className="resources__list">
          <li>
            Alley Cat Allies is the national feral cat organization. Be sure to
            check out their Feral Friends network to locate feral cat programs
            in your area.{" "}
            <a
              href="http://www.alleycat.org"
              target="_blank"
              className="resources__link"
            >
              http://www.alleycat.org
            </a>
          </li>
        </ul>
        <h3 className="resources__subtitle">Holistic Pet Care</h3>
        <ul className="resources__list">
          <li>
            For a good basic primer on pet nutrition, visit All the Best Pet
            Care‘s pet nutrition library.{" "}
            <a
              href="http://www.allthebestpetcare.com/information-library/"
              target="_blank"
              className="resources__link"
            >
              http://www.allthebestpetcare.com/information-library/
            </a>
          </li>
          <li>
            The American Holistic Veterinary Medical Association website
            includes a search feature for locating a holistic vet in your area.{" "}
            <a
              href="http://www.ahvma.org/"
              target="_blank"
              className="resources__link"
            >
              http://www.ahvma.org/
            </a>
          </li>
          <li>
            Animal Wellness Magazine is a great resource for holistic pet care.{" "}
            <a
              href="http://www.animalwellnessmagazine.com/index.php"
              target="_blank"
              className="resources__link"
            >
              http://www.animalwellnessmagazine.com/index.php
            </a>
          </li>
          <li>
            Dr. Pitcairn’s fabulous book{" "}
            <a
              href="https://a.co/d/5NECqLW"
              target="_blank"
              className="resources__link"
            >
              Natural Health for Dogs and Cats
            </a>{" "}
            should be in every pet owner’s library.
          </li>
          <li>
            Healthy Pet Net features high quality dog and cat food, supplements,
            and pet safe cleaning products.{" "}
            <a
              href="http://www.healthypetnet.com"
              target="_blank"
              className="resources__link"
            >
              http://www.healthypetnet.com
            </a>
          </li>
          <li>
            The Whole Dog Journal helps you achieve total wellness for your dog.{" "}
            <a
              href="http://www.whole-dog-journal.com/</li>"
              target="_blank"
              className="resources__link"
            >
              http://www.whole-dog-journal.com/
            </a>
          </li>
          <li>
            Dr. Martin Goldstein’s book The{" "}
            <a
              href="https://a.co/d/crzp7Ts"
              target="_blank"
              className="resources__link"
            >
              Nature of Animal Healing
            </a>{" "}
            is one of AHA!’s faves.
          </li>
        </ul>
        <h3 className="resources__subtitle">
          Wildlife Rescue, Rehab, and Information
        </h3>
        <ul className="resources__list">
          <li>
            AHA!’s{" "}
            <a href={ResourceList} target="_blank" className="resources__link">
              Wildlife Resource List
            </a>{" "}
            for northern Illinois
          </li>
          <li>
            Flint Creek Wildlife Rehabilitation:{" "}
            <a
              href="http://www.flintcreekwildlife.org/"
              target="_blank"
              className="resources__link"
            >
              http://www.flintcreekwildlife.org/
            </a>
          </li>
          <li>
            Information about the wonderful Fellow Mortals Wildlife
            Rehabilitation organization can be found at{" "}
            <a
              href="http://www.fellowmortals.org/"
              target="_blank"
              className="resources__link"
            >
              http://www.fellowmortals.org/
            </a>
          </li>
          <li>
            The book{" "}
            <a
              href="https://a.co/d/3QPX7sN"
              target="_blank"
              className="resources__link"
            >
              Wild Neighbors
            </a>{" "}
            tells how to live harmoniously with your neighborhood wildlife.
          </li>
        </ul>
        <h3 className="resources__subtitle">Pet Food Resources</h3>
        <ul className="resources__list">
          <li>
            Lisa A. Pierson, DVM explains feline diabetes.{" "}
            <a
              href="https://catinfo.org/feline-diabetes/"
              target="_blank"
              className="resources__link"
            >
              https://catinfo.org/feline-diabetes/
            </a>
          </li>
        </ul>
        <h3 className="resources__subtitle">Animal Advocacy and Connections</h3>
        <ul className="resources__list">
          <li>
            A no-kill nation is within our reach. Visit the No Kill Advocacy
            center to see how.{" "}
            <a
              href="http://www.nokilladvocacycenter.org/"
              target="_blank"
              className="resources__link"
            >
              http://www.nokilladvocacycenter.org/
            </a>
          </li>
          <li>
            Read Nathan Winograd’s book{" "}
            <a
              href="https://a.co/d/fmH9Taf"
              target="_blank"
              className="resources__link"
            >
              Redemption
            </a>{" "}
            to learn more about achieving a no-kill nation.
          </li>
          <li>
            The Animal Legal Defense Fund has been winning cases on behalf of
            animals for more than 25 years.{" "}
            <a
              href="http://www.aldf.org/"
              target="_blank"
              className="resources__link"
            >
              http://www.aldf.org/
            </a>
          </li>
          <li>
            Farm animal reform is brought to light by wonderful organizations
            like The Farm Sanctuary.{" "}
            <a
              href="http://www.farmsanctuary.org/"
              target="_blank"
              className="resources__link"
            >
              http://www.farmsanctuary.org/
            </a>
          </li>
          <li>
            The Best Friends Network is a great place to connect with other
            animal lovers nationwide.{" "}
            <a
              href="http://network.bestfriends.org/"
              target="_blank"
              className="resources__link"
            >
              http://network.bestfriends.org/
            </a>
          </li>
        </ul>
        <h3 className="resources__subtitle">Pet Care and Pet Behavior</h3>
        <ul className="resources__list">
          <li>
            Pet insurance can be a great help when it comes to pet healthcare
            costs. However, before you buy, access this comprehensive guide to
            pet insurance providers, how they work, what they cover, and how to
            choose the right one for your pet:
            <a
              href="https://www.consumersadvocate.org/pet-insurance"
              target="_blank"
              className="resources__link"
            >
              https://www.consumersadvocate.org/pet-insurance
            </a>
          </li>
          <li>
            Keeping pets safe at home:{" "}
            <a
              href="https://householdquotes.co.uk/keeping-pets-safe/"
              target="_blank"
              className="resources__link"
            >
              https://householdquotes.co.uk/keeping-pets-safe/
            </a>
          </li>
          <li>
            Traveling by car with your pet? Review these important tips:{" "}
            <a
              href="https://www.titleproloans.com/resources/pets-and-car-travel-safety/"
              target="_blank"
              className="resources__link"
            >
              https://www.titleproloans.com/resources/pets-and-car-travel-safety/
            </a>
          </li>
          <li>
            A Guide to Traveling With Pets Internationally.{" "}
            <a
              href="https://www.advantage.com/blog/a-guide-to-traveling-with-pets-internationally/"
              target="_blank"
              className="resources__link"
            >
              https://www.advantage.com/blog/a-guide-to-traveling-with-pets-internationally/
            </a>
          </li>
          <li>
            Why do pets need dental care? Check out the reasons, and lots of
            great advice, here:{" "}
            <a
              href="https://www.emergencydentistsusa.com/pet-dental-care/"
              target="_blank"
              className="resources__link"
            >
              https://www.emergencydentistsusa.com/pet-dental-care/
            </a>
          </li>
          <li>
            Cats International website:
            <a
              href="http://www.catsinternational.org/index.html"
              target="_blank"
              className="resources__link"
            >
              http://www.catsinternational.org/index.html
            </a>
            . Cats International behavior hotline:{" "}
            <strong>262-375-8852.</strong>
          </li>
          <li>
            A Stress-Free Way For Trimming Your Dog’s Toenails article from{" "}
            <a
              href="https://www.dogsnaturallymagazine.com/"
              target="_blank"
              className="resources__link"
            >
              DogsNaturally
            </a>{" "}
            has visuals to show you the proper way to trim, so you don’t hurt
            your pup:{" "}
            <a
              href="http://www.dogsnaturallymagazine.com/trimming-your-dogs-toenails"
              target="_blank"
              className="resources__link"
            >
              http://www.dogsnaturallymagazine.com/trimming-your-dogs-toenails
            </a>
          </li>
          <li>
            Another great article about first aid for a dog’s broken nail can be
            found at{" "}
            <a
              href="https://pethelpful.com/dogs/Dog-First-Aid-Dealing-with-a-Broken-Nail"
              target="_blank"
              className="resources__link"
            >
              https://pethelpful.com/dogs/Dog-First-Aid-Dealing-with-a-Broken-Nail
            </a>
          </li>
        </ul>
      </section>
      <section className="resources__sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default Resources;
