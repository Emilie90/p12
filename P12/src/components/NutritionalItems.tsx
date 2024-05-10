type NutritionalItemsProps = {
  name: "Calories" | "Proteines" | "Glucides" | "Lipides";
  value: number | undefined;
};

const NutritionalItems = ({ name, value }: NutritionalItemsProps) => {
  const suffix = name === "Calories" ? "kcal" : "g";
  return (
    <div className="nutrionalItem">
      <img src={`/src/assets/${name}.svg`} alt={name} />
      <div>
        <p>
          {value} {suffix}
        </p>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default NutritionalItems;
