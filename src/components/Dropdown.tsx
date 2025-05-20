import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext<{
  open: boolean;
  toggle: () => void;
}>({
  open: false,
  toggle: () => {},
});

function Dropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <DropdownContext.Provider value={{ open, toggle }}>
      {children}
    </DropdownContext.Provider>
  );
}

function Trigger({ children }: { children: React.ReactNode }) {
  const { toggle } = useContext(DropdownContext);
  if (!toggle) {
    throw new Error("Dropdown.Trigger must be used within a Dropdown");
  }

  if (typeof children !== "string") {
    throw new Error("Dropdown.Trigger children must be a string");
  }

  return <button onClick={toggle}>{children}</button>;
}

function Items({ children }: { children: React.ReactNode }) {
  const dropdownContext = useContext(DropdownContext);
  if (!dropdownContext) {
    throw new Error("Dropdown.Items must be used within a Dropdown");
  }

  return (
    dropdownContext.open &&
    children &&
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === Item) {
        return child;
      } else {
        throw new Error(
          "Dropdown.Items children must be Dropdown.Item components"
        );
      }
    })
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

Dropdown.Trigger = Trigger;
Dropdown.Items = Items;
Dropdown.Item = Item;

export default Dropdown;
