import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// const allCategory = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategory);
const allNewCategory = items.map((item) => item.category);
const allCategory = ["all", ...new Set(allNewCategory)];
console.log(allCategory);
console.log(allNewCategory);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategory);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);

      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories
        filterItems={filterItems}
        categories={categories}
      ></Categories>
      <Menu items={menuItems}></Menu>
    </section>
  );
}

export default App;
