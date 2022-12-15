import { PersonProps } from "./PersonProps";

const Person = (name: PersonProps) => {
  return (
    <div>
      {name.name.first} {name.name.last}
    </div>
  );
};

export default Person;
