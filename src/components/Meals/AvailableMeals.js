import Card from '../Ui/Card';
import MealItem from './Mealitem/Mealitem';
import classes from './AvailableMeals.modules.css';



const Dummy_Meals = [
    {
        id:'m1',
        name: 'Sushi',
        description: 'fitness fish  and  veggies',
        price: 22.99,
    },
    {
        id:'m2',
        name: 'Biryani',
        description: 'indian food',
        price: 12.99,
    },
    {
        id:'m3',
        name: 'Burger',
        description: 'not healthy',
        price: 20.99,
    },
    {
        id:'m4',
        name: 'green bow',
        description: 'fitness fish  and  veggies',
        price: 22.99,
    },
];
 const AvailableMeals = ()=>{
    const mealslist = Dummy_Meals.map((meal)=>(
        <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
        )
    )
  

    return (
        <section className={classes.meals}>
            <Card>
            <ul>{mealslist}</ul>
            </Card>
        </section>
    )
 }
  export default AvailableMeals;
