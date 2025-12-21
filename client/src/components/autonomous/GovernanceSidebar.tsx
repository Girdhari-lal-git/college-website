import React from "react";

interface Props {
  bodies: string[];
  active: string;
  onSelect: (body: string) => void;
}

const GovernanceSidebar: React.FC<Props> = ({
  bodies,
  active,
  onSelect,
}) => {
  return (
    <div className="border rounded-lg p-4 space-y-1">
      {bodies.map((b) => (
        <div
          key={b}
          onClick={() => onSelect(b)}
          className={`p-2 rounded cursor-pointer transition
            ${
              active === b
                ? "bg-primary text-white"
                : "hover:bg-muted"
            }`}
        >
          {b}
        </div>
      ))}
    </div>
  );
};

export default GovernanceSidebar;
