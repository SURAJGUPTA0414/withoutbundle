{
  /* <div>
  <div id="heading1">hi</div>
  <div id="heading2">bye</div>
</div>; */
}

// Question 1: Nested Sections
// Create a parent <div> with id="main". Inside it, add two children:

// First child: <div> with id="header" and text "This is header".

// Second child: <div> with id="footer" and text "This is footer".

// 1 ans

// const heading = React.createElement("div", {id:'main'}, [
//   React.createElement("div", {id:'header'}, "This is header"),
//   React.createElement("div", {id:'footer'}, "This is footer"),
// ]);

//2
// 🔹 Question 2: Three-Level Nesting
// Make a parent <div> with id="outer". Inside it:

// A child <div> with id="middle".

// Inside middle, nest another <div> with id="inner" and text "Deep inside".

// const heading = React.createElement("div", {id:'outer'}, [
//   React.createElement("div", {id:'middle'}, [
//     React.createElement("div", {id:'inner'}, "Deep inside"),

//   ]),
// ]);

//3
// Question 3: Multiple Children with Attributes
// Create a parent <div> with id="container". Inside it:

// A <div> with className="left" and text "Left side".

// A <div> with className="right" and text "Right side".

// Each of those should also contain a nested <div> with text "Nested here".

// const heading = React.createElement("div", { id: "container" }, [
//   React.createElement("div", { className: "left" }, [
//     React.createElement("div", {}, "Left side"),
//     React.createElement("div", {}, "Nested here"),
//   ]),
//   React.createElement("div", { className: "right" }, [
//     React.createElement("div", {}, "Right side"),
//     React.createElement("div", {}, "Nested here"),
//   ]),
// ]);

//4

// Question 4: Dynamic IDs
// Build a parent <div> with three children:

// Each child should have an id like "box1", "box2", "box3".

// Each child should contain another <div> with text "Inside boxX".

// const heading = React.createElement("div", {id:'main'}, [
//   React.createElement("div", {id:'box1'}, React.createElement("div", {}, "Inside Box1"),),
//   React.createElement("div", {id:'box2'}, React.createElement("div", {}, "Inside Box2")),
//    React.createElement("div", {id:'box3'}, React.createElement("div", {}, "Inside Box3")),
// ]);

//5
// Question 5: Challenge — Mixed Nesting
// Create a parent <div> with id="page". Inside it:

// A <div> with id="nav" containing two nested <div> items: "Home" and "About".

// A <div> with id="content" containing one nested <div> with text "Main Content".

// A <div> with id="sidebar" containing one nested <div> with text "Links".

// const heading = React.createElement("div", { id: "page" }, [
//   React.createElement("div", { id: "nav" }, [
//     React.createElement("div", { id: "home" }, "home"),
//     React.createElement("div", { id: "about" }, "about")
//   ]),
//   React.createElement("div", { id: "content" }, [
//     React.createElement("div", { id: "main" }, "Main Content")
//   ]),
//   React.createElement("div", { id: "sidebar" }, [
//     React.createElement("div", { id: "links" }, "links")
//   ]),
// ]);

// document.getElementById('root').innerHTML = '<h1>Hello, World!</h1>';

// const heading = React.createElement("div", {}, 'hi');
// console.log(heading);

// jsx (transpiled before reaching to browser)  - parcel - babel

// jsx --> bebel transpiled --> react.createElement --> object --> html dom

//if multiple lines are there in jsx then we have to use ( ) paranthesis

//react element
// const jsxHeading = (<div>
//   hello jsx

// </div>);

//react component

// const TitleComponent = () => {
//   return(
//     <h1>hello from TitleComponent</h1>
//   );
// }

//component composition
// const HeadingComponent = () => {
//   return(<><h1>hello from component</h1>
//   <TitleComponent />
//   <TitleComponent></TitleComponent>
//   {TitleComponent()}
//   </>);
// }

//JSX ALSO PREVENTING malicious attacks like XSS

// const HeadingComponent2 = () => (
//   <h1>hello from component</h1>
// )

import React from "react";
import ReactDOM from "react-dom/client";

const HeadersComponent = () => {
  return (
    <div id="header">
      <div id="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
          alt="logo"
          width={100}
        />
      </div>
      <div id="nav-items">
        <ul id="nav-items-ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RstaurantcardComponent = (props) => {
  console.log(props);
  const { resList } = props;

  const { name, cuisines, avgRating } = resList?.info;
  const { deliveryTime } = resList?.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resList.info.cloudinaryImageId
        }
        alt="restaurant-logo"
        className="restaurant-logo"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <p>{deliveryTime} min</p>
      <p>{avgRating} rating</p>
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "9862",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/e99d787f-4c80-45f2-a1a4-809fb692c9ad_9862.JPG",
      locality: "Bandra",
      areaName: "Bandra Kurla Complex",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "1.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/pizza-hut-bandra-bandra-kurla-complex-rest9862",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5172",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/27/53884025-cf01-44f4-afab-1fb9346577de_5172.JPG",
      locality: "Bandra East",
      areaName: "Bandra Kurla Complex",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "P",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/theobroma-bandra-east-bandra-kurla-complex-rest5172",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "32399",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/17fb1e67-86ac-4746-8853-27d9331db49f_32399.JPG",
      locality: "Kalina Artista",
      areaName: "Santacruz East",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "41K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/mcdonalds-kalina-artista-santacruz-east-rest32399",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "78036",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
      locality: "Central Plaza, Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "39K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/burger-king-central-plaza-kalina-santacruz-east-rest78036",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "202836",
      name: "Hangout Cakes & More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/11/0be4d0d5-3e01-4c38-be86-a8b646644a1a_202836.jpg",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹150 for two",
      cuisines: ["Cakes & Pastries", "Desserts", "Bakery"],
      avgRating: 4.5,
      veg: true,
      parentId: "4508",
      avgRatingString: "4.5",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/hangout-cakes-and-more-cst-road-santacruz-east-rest202836",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "535962",
      name: "Slyce Pizza",
      cloudinaryImageId: "4c899e0501bef7e4c6acd1fa7cc2c82b",
      locality: "Trade Center Building",
      areaName: "Bandra Kurla Complex",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 4.1,
      parentId: "321813",
      avgRatingString: "4.1",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/slyce-pizza-trade-center-building-bandra-kurla-complex-rest535962",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "673363",
      name: "Bombay Sweet Shop",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/14/7e6b7f1a-2f07-403b-8040-f106507aaab7_673363.jpg",
      locality: "Vidyanagari Marg",
      areaName: "Scruz Bandra East",
      costForTwo: "₹700 for two",
      cuisines: ["Sweets", "Desserts", "Snacks"],
      avgRating: 4.7,
      veg: true,
      parentId: "48883",
      avgRatingString: "4.7",
      totalRatingsString: "722",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/bombay-sweet-shop-vidyanagari-marg-scruz-bandra-east-rest673363",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395334",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "txirbmikcfw5yijtcfs5",
      locality: "Kalina Artista",
      areaName: "Scruz Bandra East",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "10761",
      avgRatingString: "4.3",
      totalRatingsString: "364",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/mcdonalds-gourmet-burger-collection-kalina-artista-scruz-bandra-east-rest395334",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639509",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "kbkr6vrtwjes0squcoqf",
      locality: "Bandra Kurla Complex",
      areaName: "Scruz Bandra East",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4,
      parentId: "351013",
      avgRatingString: "4.0",
      totalRatingsString: "970",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/dum-safar-biryani-bandra-kurla-complex-scruz-bandra-east-rest639509",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "391816",
      name: "Louis Burger",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/24b19dd3-c09d-4d3a-bff0-aa01684358b5_391816.JPG",
      locality: "Trade Centre",
      areaName: "Santacruz Bandra east",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.3,
      parentId: "22485",
      avgRatingString: "4.3",
      totalRatingsString: "5.2K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹295",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/louis-burger-trade-centre-santacruz-bandra-east-rest391816",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "681665",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/8a64c9be-7a6b-4870-a69a-be53f8c9d0a2_681665.jpg",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.3,
      parentId: "11216",
      avgRatingString: "4.3",
      totalRatingsString: "208",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/leancrust-pizza-thincrust-experts-gaurav-industrial-estate-kurla-west-rest681665",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "692689",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/17502345-35fd-4c60-a2d8-7cb4453c5213_692689.jpg",
      locality: "Kurla",
      areaName: "Malad West",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.7,
      parentId: "355285",
      avgRatingString: "4.7",
      totalRatingsString: "309",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "High%20Protein/rx%20tag%205.png",
            description: "High Protein",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/wefit-protein-bowls-salads-and-sandwiches-kurla-malad-west-rest692689",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "28721",
      name: "Oven Story Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/62cada56-2bbe-44a1-9172-d07af4c77d33_28721.jpg",
      locality: "Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "3534",
      avgRatingString: "4.3",
      totalRatingsString: "6.6K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/oven-story-pizza-kalina-santacruz-east-rest28721",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "328878",
      name: "Charcoal Eats - Biryani & Beyond",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/6096606d-fb9a-4b2e-a22b-48ee063a2c53_328878.jpg",
      locality: "Manipada Road",
      areaName: "SANTACRUZ EAST, Kalina",
      costForTwo: "₹499 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Mughlai"],
      avgRating: 4.4,
      parentId: "5338",
      avgRatingString: "4.4",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/charcoal-eats-biryani-and-beyond-manipada-road-santacruz-east-kalina-rest328878",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "576015",
      name: "Go Zero Ice Creams & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/24/a7380c2c-a50a-4b4c-8c11-b1447edf2fce_576015.JPG",
      locality: "Goodwill Premises",
      areaName: "BKC",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "343689",
      avgRatingString: "4.6",
      totalRatingsString: "126",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹51",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/go-zero-ice-creams-and-desserts-goodwill-premises-bkc-rest576015",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "698272",
      name: "Maiz Mexican Kitchen",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/15/c3a89bbb-5347-419b-9535-fad6711a50a6_698272.jpg",
      locality: "Kalina Cst Road",
      areaName: "BKC",
      costForTwo: "₹600 for two",
      cuisines: ["Mexican", "Italian", "American"],
      avgRating: 4.6,
      parentId: "11654",
      avgRatingString: "4.6",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 03:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "High%20Protein/rx%20tag%205.png",
            description: "High Protein",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/maiz-mexican-kitchen-kalina-cst-road-bkc-rest698272",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "740584",
      name: "Hola Pasta - Fresh Gourmet Pasta",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/b31f5f40-c84a-4ddb-b91c-7de469c0d5d2_740584.JPG",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹250 for two",
      cuisines: ["Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "418135",
      avgRatingString: "4.3",
      totalRatingsString: "116",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/hola-pasta-fresh-gourmet-pasta-gaurav-industrial-estate-kurla-west-rest740584",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "695754",
      name: "BOOM - Sub Style Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/69ef305e-bfcb-472c-87e0-2e93a1b124ec_695754.JPG",
      locality: "Kurla Andheri Road",
      areaName: "Kurla",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Indian", "Desserts"],
      avgRating: 4.6,
      parentId: "401169",
      avgRatingString: "4.6",
      totalRatingsString: "184",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/boom-sub-style-sandwiches-andheri-road-kurla-rest695754",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750450",
      name: "Daily Kitchen - Everyday Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/fa248b58-536b-49b2-9258-7a0476277cf0_750450.jpg",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.5,
      parentId: "444382",
      avgRatingString: "4.5",
      totalRatingsString: "393",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/daily-kitchen-everyday-homely-meals-gaurav-industrial-estate-kurla-west-rest750450",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "678579",
      name: "Itminaan Matka Biryani - Slow Cooked",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/f59b5c08-1812-4492-80c5-734a02ed7b0e_678579.JPG",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      avgRating: 4,
      parentId: "107673",
      avgRatingString: "4.0",
      totalRatingsString: "110",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-5fcc12b5-1924-4ead-814d-76925754f2ec",
    },
    cta: {
      link: "https://www.swiggy.com/city/mumbai/itminaan-matka-biryani-slow-cooked-gaurav-industrial-estate-kurla-west-rest678579",
      type: "WEBLINK",
    },
  },
];

const BodyComponet = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restaurant-container">
        {/* <RstaurantcardComponent resList={restaurantList[0]}/>
         <RstaurantcardComponent resList={restaurantList[1]}/>
          <RstaurantcardComponent resList={restaurantList[2]}/>
           <RstaurantcardComponent resList={restaurantList[3]}/>
            <RstaurantcardComponent resList={restaurantList[4]}/>
             <RstaurantcardComponent resList={restaurantList[5]}/>
              <RstaurantcardComponent resList={restaurantList[6]}/>
               <RstaurantcardComponent resList={restaurantList[7]}/>
                <RstaurantcardComponent resList={restaurantList[8]}/>
                 <RstaurantcardComponent resList={restaurantList[9]}/>
                  <RstaurantcardComponent resList={restaurantList[10]}/>
                   <RstaurantcardComponent resList={restaurantList[11]}/> */}
        {restaurantList.map((res) => (
          <RstaurantcardComponent key={res.info.id} resList={res} />  //react recommend do not use index as key
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <HeadersComponent />
      <BodyComponet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<AppLayout />);
