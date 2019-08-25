'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Recipes', [
      {
        title: 'Chicken Vesuvio',
        cookTime: 60,
        caloriesPerServing: 1057,
        servingAmount: 4,
        image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
        url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
        healthDetails: '["Peanut-Free", "Tree-Nut-Free"]',
        ingredients: '["1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks", "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", "3/4 cup white wine", "3/4 cup chicken stock", "3 tablespoons chopped parsley", "1 tablespoon dried oregano", "Salt and pepper","1 cup frozen peas, thawed"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chicken Gravy',
        cookTime: 270,
        caloriesPerServing: 182,
        servingAmount: 6,
        image: "https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg",
        url: "http://www.marthastewart.com/332664/chicken-gravy",
        healthDetails: '["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["4 cups chicken bones and wings", "2 tablespoons unsalted butter, softened", "2 tablespoons all-purpose flour", "4 cups homemade bruce and eric brombergs chicken stock, or store-bought low-sodium chicken stock", "1 tablespoon fresh thyme leaves", "Coarse salt and freshly ground black pepper"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kreplach (Chicken Dumplings)',
        cookTime: 10,
        caloriesPerServing: 534,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg",
        url: "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
        healthDetails: '["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["1 1/2 teaspoons canola oil", "1/2 small shallot, finely chopped", "1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped", "2/3 cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)", "2 chicken livers (optional)", "2 garlic cloves, finely chopped", "1/4 cup finely chopped chives, plus extra for serving", "1 1/4 teaspoons kosher salt", "3/4 teaspoon freshly ground black pepper", "30 to 34 square wonton wrappers", "8 cups store-bought or homemade chicken broth"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chicken Piccata',
        cookTime: 0,
        caloriesPerServing: 412,
        servingAmount: 4,
        image: "https://www.edamam.com/web-img/a29/a293566f53abc01af0a24157134b4a87.jpg",
        url: "http://www.simplyrecipes.com/recipes/chicken_piccata/",
        healthDetails: '["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"]',
        ingredients: '["2-4 boneless, skinless chicken breast halves (1 1/2 pound total), or 4-8 chicken cutlets", "1/2 cup flour", "1/4 teaspoon salt", "Pinch ground black pepper", "3 Tbsp grated Parmesan cheese", "4 Tbsp olive oil", "4 Tbsp butter", "1/2 cup chicken stock or dry white wine (such as a Sauvignon Blanc)", "2 Tbsp lemon juice", "1/4 cup brined capers", "2 Tbsp fresh chopped parsley"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Roast Chicken',
        cookTime: 0,
        caloriesPerServing: 252,
        servingAmount: 10,
        image: "https://www.edamam.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg",
        url: "http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs",
        healthDetails: '["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["1 whole chicken, about 3-4 pounds", "-- Salt and fresh-ground pepper, to taste", "3 to 4 sprigs thyme, or other herbs", "-- Olive oil, to taste", "-- Chicken stock (optional)"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Roast Beef',
        cookTime: 127,
        caloriesPerServing: 901,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg",
        url: "http://www.saveur.com/article/Recipes/Roast-Beef",
        healthDetails: '["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["8-lb. shell roast of beef", "Coarse salt and freshly ground black pepper"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Homemade Italian Beef Recipe',
        cookTime: 300,
        caloriesPerServing: 844,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/4d6/4d6487af4e7162d2f0fc43819b4e44e6.jpg",
        url: "http://www.seriouseats.com/recipes/2014/05/homemade-italian-beef-sandwich.html",
        healthDetails: '["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["3 pounds beef necks, or other meaty beef bones like beef shin", "2 pounds oxtails", "1 medium onion, chopped (about 1 cup)", "1 medium carrot, chopped (about 3/4 cup)", "4 medium cloves garlic, peeled and left whole", "2 bay leaves", "10 black peppercorns", "4 cloves", "1/2 to 1 teaspoon salt", "2 green bell peppers", "8 Italian rolls", "2 pounds thinly sliced roast beef (see note above)"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Beef Brisket',
        cookTime: 0,
        caloriesPerServing: 308,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg",
        url: "http://simplyrecipes.com/recipes/beef_brisket/",
        healthDetails: '["Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["3 to 4 lbs of a brisket cut of beef", "3/4 cup barbeque sauce", "1/4 cup soy sauce", "1 cup of water"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Beef Stroganoff',
        cookTime: 45,
        caloriesPerServing: 472,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/ba5/ba5f382509d84cc31530fdea39624072.jpg",
        url: "http://www.marthastewart.com/341384/beef-stroganoff",
        healthDetails: '["Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["1 pound beef tenderloin", "Coarse salt and ground pepper", "3 tablespoons canola oil", "1 medium onion, thinly sliced", "1 pound white mushrooms, sliced 1/2 inch thick", "1 cup reduced-sodium canned beef broth", "1 tablespoon dijon mustard", "1/2 cup sour cream", "Chopped fresh dill, for garnish"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Portabello Beef Stew',
        cookTime: 195,
        caloriesPerServing: 313,
        servingAmount: 3,
        image: "https://www.edamam.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2.JPG",
        url: "https://food52.com/recipes/14484-portabello-beef-stew",
        healthDetails: '["Peanut-Free", "Tree-Nut-Free"]',
        ingredients: '["1 pound beef stew meat", "2 tablespoons flour", "1 onion, sliced", "1 teaspoon dried thyme", "1/2 cup red wine", "15 ounces beef broth (1 can)", "2 carrots, sliced", "10 ounces baby portabello mushrooms"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Serious Chocolate: Easy Chocolate Pie Crust Recipe',
        cookTime: 0,
        caloriesPerServing: 213,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/4d9/4d92006b030763f551ce22e97d074555.jpg",
        url: "http://www.seriouseats.com/recipes/2009/11/serious-chocolate-chocolate-pie-crust.html",
        healthDetails: '["Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["2 cups chocolate wafers or 2 cups chocolate graham crackers", "1/4 cup sugar", "3/4 stick of butter (6 tablespoons)"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Iced Chocolate',
        cookTime: 0,
        caloriesPerServing: 816,
        servingAmount: 2,
        image: "https://www.edamam.com/web-img/834/8347d3849d4573fbfb72c361b0119e51.jpg",
        url: "http://www.davidlebovitz.com/2011/06/iced-chocolate-recipe/#more-5842",
        healthDetails: '["Vegetarian", "Peanut-Free", "Tree-Nut-Free"]',
        ingredients: '["3/4 cup (180ml) whole or lowfat milk", "1 tbsp unsweetened cocoa powder, preferably Dutch-process", "8 x chocolates or 4 ounces (115g) bittersweet or semisweet chocolate, chopped", "1 1/2 cup (6 ounces, 175g) ice cubes", "2-3 scoops chocolate ice cream or chocolate sherbet", "1-2 tbsp Kahluà or espresso (cooled), or to taste", "Lightly sweetened whipped cream and chocolate shavings, for serving"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chocolate Glaze',
        cookTime: 49,
        caloriesPerServing: 204,
        servingAmount: 8,
        image: "https://www.edamam.com/web-img/2de/2de103698faddff3b93195bd86d7d360.jpg",
        url: "http://www.marthastewart.com/1140471/chocolate-glaze-gingerbread-cupcakes",
        healthDetails: '["Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["6 ounces best-quality bittersweet chocolate or semisweet chocolate", "1 cup heavy cream"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chocolate Chunkers',
        cookTime: 0,
        caloriesPerServing: 285,
        servingAmount: 14,
        image: "https://www.edamam.com/web-img/738/73856c80eb8421caa239d0dc7c829230.jpg",
        url: "http://doriegreenspan.com/2009/03/chocolate-chunkers-the-cookies-that-didnt-get-me-fired.html#more",
        healthDetails: '["Vegetarian", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["1/3 Cup All Purpose Flour", "1/4 Cup unsweetened cocoa powder", "1/2 Teaspoon Salt", "1/4 Teaspoon Baking Powder", "3 Tablespoons Unsalted Butter", "6 ounces Bittersweet Chocolate", "1 Ounce unsweetened chocolate", "2 Large Eggs", "2/3 Cup Sugar", "1 Teaspoon Vanilla Extract", "6 Ounces semisweet chocolate chips", "6 Ounces Salted peanuts"]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chocolate Dipped Strawberries',
        cookTime: 0,
        caloriesPerServing: 239,
        servingAmount: 10,
        image: "https://www.edamam.com/web-img/3c5/3c558709195198381a8d5c535d72a265.jpg",
        url: "http://simplyrecipes.com/recipes/chocolate_dipped_strawberries/",
        healthDetails: '["Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]',
        ingredients: '["24-30 strawberries, fresh", "6 ounces of white chocolate", "8 ounces of dark chocolate"]',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Recipes', null, {});
  }
};
