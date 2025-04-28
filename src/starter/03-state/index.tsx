import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "react docs",
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "react router docs",
  },
  {
    id: 3,
    url: "https://reacttraining.com",
    // remove text property to see the error
    text: "react training",
  },
];

function Component() {
  // const [text, setText] = useState("shakeAndBake");
  const [number, setNumber] = useState(5);
  // const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setNumber(23),
            //  setList(["hi", "bye"])
            setLinks([...links, { id: 4, url: "hello", text: "hello" }]);
        }}
      >
        click me
      </button>
      <p>{number}</p>
      {/* <p>{list}</p> */}
      <div>
        {links.map((item) => {
          const { id, url, text } = item;
          return (
            <div key={id}>
              <p>{id}</p>
              <p>{url}</p>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Component;
