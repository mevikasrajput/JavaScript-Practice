const searchBtn = document.getElementById('search-btn')
const mealLists = document.getElementById('meal')
const mealDetailsContent = document.querySelector('meal')
const recipeCloseBtn = document.getElementById('recipe-close-btn')
const showRecipe = document.getElementsByClassName('recipe-btn')

// Event listeners
searchBtn.addEventListener('click', getMealList)

function getMealList() {
  let searchInputTxt = document.getElementById('search-input').value.trim()
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      let html = ''
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
            <div class="meal-item" data-id = "${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="" srcset="" />
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
            </div>
            `
        })
        mealLists.classList.remove('notFound')
      } else {
        html = `Sorry, we didn't find any meal "${searchInputTxt}".`
        mealLists.classList.add('notFound')
      }
      mealLists.innerHTML = html
    })
}
